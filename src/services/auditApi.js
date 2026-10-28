
const API_BASE_URL = import.meta.env.VITE_AUDIT_API_BASE_URL;

const TOKEN_STORAGE_PREFIX = 'sellaro-audit-credentials:';

function getOrCreateCredentials() {
  // Reuse credentials for retries of the same pending submission.
  const storageKey = `${TOKEN_STORAGE_PREFIX}pending`;

  try {
    const saved = sessionStorage.getItem(storageKey);

    if (saved) {
      const credentials = JSON.parse(saved);

      if (
        typeof credentials.idempotencyKey === 'string' &&
        typeof credentials.reportAccessToken === 'string'
      ) {
        return credentials;
      }
    }
  } catch {
    // If session storage is unavailable, generate fresh credentials.
  }

  const randomBytes = new Uint8Array(32);
  crypto.getRandomValues(randomBytes);

  const reportAccessToken = btoa(
    String.fromCharCode(...randomBytes)
  )
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');

  const keyBytes = new Uint8Array(32);
  crypto.getRandomValues(keyBytes);

  const idempotencyKey = Array.from(keyBytes, (byte) =>
    byte.toString(16).padStart(2, '0')
  ).join('');

  const credentials = {
    idempotencyKey,
    reportAccessToken,
  };

  try {
    sessionStorage.setItem(storageKey, JSON.stringify(credentials));
  } catch {
    // Credentials remain available in memory for this request only.
  }

  return credentials;
}

export function clearPendingAuditCredentials() {
  try {
    sessionStorage.removeItem(`${TOKEN_STORAGE_PREFIX}pending`);
  } catch {
    // Storage may be unavailable.
  }
}

export async function submitAudit(form) {
  if (!API_BASE_URL) {
    throw new Error('The audit API has not been configured yet.');
  }

  const productUrls = form.productUrls
    .map((url) => url.trim())
    .filter(Boolean);

  const credentials = getOrCreateCredentials();

  let response;

  try {
    response = await fetch(`${API_BASE_URL.replace(/\/+$/, '')}/audits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Idempotency-Key': credentials.idempotencyKey,
      },
      body: JSON.stringify({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        marketplace: form.marketplace,
        storeUrl: form.storeUrl.trim() || null,
        productUrls,
        reportAccessToken: credentials.reportAccessToken,
      }),
    });
  } catch {
    throw new Error(
      'We could not reach the audit service. Please retry the same submission.'
    );
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.error || 'We could not submit your audit. Please try again.'
    );
  }

  if (!data.auditId || !data.status) {
    throw new Error('The audit service returned an invalid response.');
  }

  // Return the token we generated, rather than relying on the server
  // to echo it back on every retry response.
  return {
    ...data,
    reportAccessToken: credentials.reportAccessToken,
    idempotencyKey: credentials.idempotencyKey,
  };
}

export async function getAuditResults(auditId, reportAccessToken) {
  if (!API_BASE_URL) {
    throw new Error('The audit API has not been configured yet.');
  }

  if (!auditId || !reportAccessToken) {
    throw new Error('Audit access credentials are missing.');
  }

  let response;

  try {
    response = await fetch(
      `${API_BASE_URL.replace(/\/+$/, '')}/audits/${encodeURIComponent(auditId)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${reportAccessToken}`,
        },
        cache: 'no-store',
      }
    );
  } catch {
    throw new Error('Could not connect to retrieve your audit report.');
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(
      data.error || 'Could not retrieve your audit report.'
    );
  }

  return data;
}
