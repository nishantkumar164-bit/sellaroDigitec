
import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://sellarodigitec.com";

const SEO = ({
  title,
  description,
  canonical,
  noIndex = false,
}) => {
  // Normalize canonical path
  const normalizedPath = canonical
    ? `/${canonical.replace(/^\/+|\/+$/g, "")}`
    : null;

  // Generate canonical URL using preferred non-www domain
  const canonicalUrl = normalizedPath
    ? `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`
    : null;

  // Development warning if canonical is missing
  if (import.meta.env.DEV && !canonical) {
    console.warn(
      "SEO component: canonical path is missing."
    );
  }

  return (
    <Helmet>
      {/* Page Title */}
      {title && <title>{title}</title>}

      {/* Meta Description */}
      {description && (
        <meta
          name="description"
          content={description}
        />
      )}

      {/* Robots Directive */}
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, follow"
            : "index, follow, max-image-preview:large"
        }
      />

      {/* Canonical URL */}
      {canonicalUrl && (
        <link
          rel="canonical"
          href={canonicalUrl}
        />
      )}
    </Helmet>
  );
};

export default SEO;
