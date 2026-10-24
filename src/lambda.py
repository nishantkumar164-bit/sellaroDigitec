
import json
import boto3
import os
import uuid
from datetime import datetime, timezone

s3 = boto3.client("s3")
ses = boto3.client("ses")

BUCKET_NAME = os.environ["BUCKET_NAME"]
SES_FROM_EMAIL = os.environ["SES_FROM_EMAIL"]
SES_TO_EMAIL = os.environ["SES_TO_EMAIL"]

ALLOWED_ORIGIN = "https://sellarodigitec.com"

CORS_HEADERS = {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Content-Type": "application/json"
}


def response(status_code, payload):
    return {
        "statusCode": status_code,
        "headers": CORS_HEADERS,
        "body": json.dumps(payload)
    }


def lambda_handler(event, context):
    # Handle CORS preflight if OPTIONS is routed to Lambda
    method = (
        event.get("requestContext", {})
        .get("http", {})
        .get("method")
        or event.get("httpMethod", "")
    )

    if method == "OPTIONS":
        return response(200, {"success": True})

    # Parse and validate request
    try:
        raw_body = event.get("body") or "{}"

        if event.get("isBase64Encoded"):
            import base64
            raw_body = base64.b64decode(raw_body).decode("utf-8")

        body = json.loads(raw_body)
        print(f"DEBUG: Received body: {body}")

        if not isinstance(body, dict):
            return response(400, {
                "success": False,
                "message": "Invalid request body."
            })

        name = str(body.get("name") or "").strip()
        email = str(body.get("email") or "").strip()

        # if not name or not email:
        #     return response(400, {
        #         "success": False,
        #         "message": "Name and email are required."
        #     })
        phone = str(body.get("phone")).strip()
        company_name = str(body.get("company_name") or "").strip()
        services = str(body.get("services"))
        target_platform = str(body.get("target_platform") or "").strip()
        description = str(body.get("description") or "").strip()
        source = str(body.get("source") or "Website").strip()

    except (json.JSONDecodeError, UnicodeDecodeError, TypeError, ValueError):
        return response(400, {
            "success": False,
            "message": "Invalid request data."
        })

    now = datetime.now(timezone.utc)
    timestamp = now.strftime("%Y-%m-%dT%H:%M:%SZ")
    lead_id = str(uuid.uuid4())

    lead_data = {
        "lead_id": lead_id,
        "name": name,
        "email": email,
        "phone": phone,
        "company_name": company_name,
        "services": services,
        "target_platform": target_platform,
        "description": description,
        "source": source,
        "created_at": timestamp
    }

    # Save the lead to S3 first.
    # Do not return success if this write fails.
    s3_key = (
        f"year={now.year}/"
        f"month={now.month:02d}/"
        f"day={now.day:02d}/"
        f"{lead_id}.json"
    )

    try:
        s3.put_object(
            Bucket=BUCKET_NAME,
            Key=s3_key,
            Body=json.dumps(lead_data, ensure_ascii=False, indent=2).encode("utf-8"),
            ContentType="application/json"
        )
    except Exception:
        print("ERROR: Failed to save lead to S3.")
        print(f"Lead ID: {lead_id}")
        raise

    # At this point, S3 has acknowledged the write.
    # Email failure must not change the saved lead's status.
    email_body = f"""
NEW SELLARO LEAD

Lead ID: {lead_id}
Name: {name}
Email: {email}
Company: {company_name}
Phone Number : {phone}
Target Platform: {target_platform}
Services selected : {services}
Lead Source: {source}
Requirements: {description}
Timestamp: {timestamp}
S3 Location: {s3_key}
"""

    try:
        ses.send_email(
            Source=SES_FROM_EMAIL,
            Destination={
                "ToAddresses": [SES_TO_EMAIL]
            },
            Message={
                "Subject": {
                    "Data": f"New Lead - {name}",
                    "Charset": "UTF-8"
                },
                "Body": {
                    "Text": {
                        "Data": email_body,
                        "Charset": "UTF-8"
                    }
                }
            }
        )
    except Exception as email_error:
        # Log the notification failure without misreporting the saved lead.
        print(f"WARNING: Lead {lead_id} saved, but SES notification failed.")
        print(f"SES error: {str(email_error)}")

    # Return success only after the S3 write succeeds.
    return response(200, {
        "success": True,
        "message": "Your enquiry has been saved successfully.",
        "lead_id": lead_id
    })
