
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, canonical }) => {
  const siteUrl = "https://sellarodigitec.com";

  const canonicalUrl = canonical
    ? `${siteUrl}/${canonical.replace(/^\/+/, "")}`
    : siteUrl;

  return (
    <Helmet>
      {title && <title>{title}</title>}

      {description && (
        <meta name="description" content={description} />
      )}

      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
