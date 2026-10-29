
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  ClipboardCheck,
  ExternalLink,
  Link2,
  Search,
  ShieldCheck,
  Sparkles,
  Store,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import GlassModal from '../components/common/GlassModal';
import AuditReport from '../pages/AuditReport';

const trackMetaLead = (contentName) => {
  if (
    typeof window !== 'undefined' &&
    typeof window.fbq === 'function'
  ) {
    window.fbq('track', 'Lead', {
      content_name: contentName,
    });
  }
};

const API_BASE_URL = 'https://sj39lg4vy1.execute-api.ap-south-1.amazonaws.com';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  marketplace: '',
  storeUrl: '',
  productUrls: ['', '', ''],
};

const isValidHttpUrl = (value) => {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
};

const getStoreName = (storeUrl, productUrls = []) => {
  const urlToUse =
    storeUrl?.trim() || productUrls.find((url) => url?.trim())?.trim();

  if (!urlToUse) return 'Online Store';

  try {
    return new URL(urlToUse).hostname.replace(/^www\./i, '');
  } catch {
    return 'Online Store';
  }
};

const FreeAudit = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [auditId, setAuditId] = useState(null);
  const [reportAccessToken, setReportAccessToken] = useState(null);
  const [auditStatus, setAuditStatus] = useState(null);
  const [apiReport, setApiReport] = useState(null);
  const [apiError, setApiError] = useState('');
  const credentialsRef = useRef(null);
  const pollingRef = useRef(false);

  const updateField = (field, value) => {
    credentialsRef.current = null;
    setForm((current) => ({ ...current, [field]: value }));
  };

  const updateProductUrl = (index, value) => {
    credentialsRef.current = null;
    setForm((current) => ({
      ...current,
      productUrls: current.productUrls.map((url, i) =>
        i === index ? value : url
      ),
    }));
  };

  const makeRandomToken = () => {
    const bytes = new Uint8Array(32);
    window.crypto.getRandomValues(bytes);
    let binary = '';
    bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
    return window.btoa(binary)
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');
  };

  const makeIdempotencyKey = () => {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    const bytes = new Uint8Array(16);
    window.crypto.getRandomValues(bytes);
    return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};
    const productUrls = form.productUrls.map((url) => url.trim()).filter(Boolean);
    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    const phone = form.phone.trim();
    const storeUrl = form.storeUrl.trim();
    const storeName = getStoreName(storeUrl, productUrls);

    if (!name) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!phone) nextErrors.phone = 'Please enter your phone number.';
    if (!productUrls.length) {
      nextErrors.productUrls = 'Enter at least one product page URL.';
    } else if (productUrls.some((url) => !isValidHttpUrl(url))) {
      nextErrors.productUrls = 'Each product URL must be a valid HTTP or HTTPS URL.';
    }
    if (storeUrl && !isValidHttpUrl(storeUrl)) {
      nextErrors.storeUrl = 'Enter a valid store URL starting with https://';
    }

    setErrors(nextErrors);
    setApiError('');

    if (Object.keys(nextErrors).length) return;

    // Keep credentials for a retry of the same unchanged form.
    if (!credentialsRef.current) {
      credentialsRef.current = {
        idempotencyKey: makeIdempotencyKey(),
        reportAccessToken: makeRandomToken(),
        requestFingerprint: JSON.stringify({
          name, email, phone, marketplace: storeName, storeUrl, productUrls,
        }),
      };
    }

    const credentials = credentialsRef.current;
    const currentFingerprint = JSON.stringify({
      name, email, phone, marketplace: storeName, storeUrl, productUrls,
    });

    if (credentials.requestFingerprint !== currentFingerprint) {
      credentialsRef.current = {
        idempotencyKey: makeIdempotencyKey(),
        reportAccessToken: makeRandomToken(),
        requestFingerprint: currentFingerprint,
      };
    }

    const activeCredentials = credentialsRef.current;

    setIsSubmitting(true);
    setAuditId(null);
    setReportAccessToken(null);
    setAuditStatus(null);
    setApiReport(null);

    try {
      const response = await fetch(`${API_BASE_URL}/audits`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Idempotency-Key': activeCredentials.idempotencyKey,
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          marketplace: storeName,
          storeUrl: storeUrl || null,
          productUrls,
          reportAccessToken: activeCredentials.reportAccessToken,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || `Submission failed (HTTP ${response.status}).`);
      }

      if (!data.auditId) {
        throw new Error('The API accepted the request but did not return an audit ID.');
      }
      // Track the accepted audit request.
      trackMetaLead('Free Webstore Audit');

      setAuditId(data.auditId);
      setReportAccessToken(data.reportAccessToken || activeCredentials.reportAccessToken);
      setAuditStatus(data.status || 'QUEUED');
      setShowResults(true);
    } catch (error) {
      setApiError(
        error instanceof TypeError
          ? 'Could not reach the audit service. Check your connection and API CORS settings, then retry.'
          : (error.message || 'Unable to submit your audit.')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!showResults || !auditId || !reportAccessToken) return undefined;

    let cancelled = false;
    let timeoutId;

    const poll = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/audits/${encodeURIComponent(auditId)}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${reportAccessToken}`,
            },
            cache: 'no-store',
          }
        );

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.error || `Could not retrieve audit status (HTTP ${response.status}).`);
        }

        if (cancelled) return;

        setAuditStatus(data.status || 'UNKNOWN');

        if (data.status === 'COMPLETED' && data.report) {
          setApiReport(data.report);
          setApiError('');
          return;
        }

        if (data.status === 'FAILED') {
          setApiError('The audit could not be completed. Please submit a new audit or contact Sellaro Digitec.');
          return;
        }

        timeoutId = window.setTimeout(poll, 2500);
      } catch (error) {
        if (cancelled) return;
        setApiError(
          error instanceof TypeError
            ? 'Unable to reach the results API. Check the GET route and CORS configuration.'
            : (error.message || 'Unable to retrieve audit results.')
        );
        // Retry transient fetch/API errors without losing the current credentials.
        timeoutId = window.setTimeout(poll, 5000);
      }
    };

    poll();

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [showResults, auditId, reportAccessToken]);
  const inputClass =
    'mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10';

  const renderError = (field) =>
    errors[field] ? (
      <p className="mt-1 text-xs text-red-600">{errors[field]}</p>
    ) : null;

  return (
    <>
      <Helmet>
        <title>Free Marketplace Listing Audit | Sellaro Digitec</title>
        <meta
          name="description"
          content="Check your marketplace product listings for potential improvements with Sellaro Digitec's free listing audit."
        />
      </Helmet>

      <section className="relative isolate overflow-hidden bg-slate-50 bg-blueprint-grid px-4 py-14 sm:py-20">
        <div className="glow-orb-blue pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full" />
        <div className="glow-orb-gold pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">
              <Sparkles size={15} />
              FREE MARKETPLACE AUDIT
            </div>

            <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Is your product listing reaching its{' '}
              <span className="text-brand-gradient">full potential?</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Submit a few product links and discover opportunities to improve
              your listing content, images and product presentation.
            </p>

            <div className="mt-8 space-y-4">
              {[
                ['Listing quality checks', 'Review publicly visible product information.'],
                ['Actionable suggestions', 'Discover potential content improvements.'],
                ['No marketplace login', 'Never share your seller account password.'],
              ].map(([title, description]) => (
                <div key={title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={20} />
                  <div>
                    <p className="font-semibold text-slate-800">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs leading-5 text-slate-500">
              <ShieldCheck size={17} className="shrink-0 text-slate-500" />
              Public listing review only. Results depend on accessible page data.
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-5 sm:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                Start your audit
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Tell us about your store
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fields marked with * are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="audit-name" className="text-sm font-medium text-slate-700">
                    Full name *
                  </label>
                  <input
                    id="audit-name"
                    className={inputClass}
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {renderError('name')}
                </div>

                <div>
                  <label htmlFor="audit-phone" className="text-sm font-medium text-slate-700">
                    Phone number *
                  </label>
                  <input
                    id="audit-phone"
                    type="tel"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    placeholder="Your phone number"
                    autoComplete="tel"
                  />
                  {renderError('phone')}
                </div>
              </div>

              <div>
                <label htmlFor="audit-email" className="text-sm font-medium text-slate-700">
                  Email address *
                </label>
                <input
                  id="audit-email"
                  type="email"
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
                {renderError('email')}
              </div>

              

              <div>
                <label htmlFor="audit-store" className="text-sm font-medium text-slate-700">
                  E-commerce store URL <span className="font-normal text-slate-400"></span>
                </label>
                <input
                  id="audit-store"
                  type="url"
                  className={inputClass}
                  value={form.storeUrl}
                  onChange={(e) => updateField('storeUrl', e.target.value)}
                  placeholder="https://your-store.com"
                />
                {renderError('storeUrl')}
              </div>

              <div>
                <div className="flex items-start gap-2">
                  <div>
                    <label className="text-sm font-medium text-slate-700">
                      Product page URL(s) *
                    </label>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Add 1–3 public product pages from your store.
                    </p>
                  </div>
                  <CircleHelp size={17} className="mt-0.5 shrink-0 text-slate-400" />
                </div>

                <div className="mt-3 space-y-3">
                  {form.productUrls.map((url, index) => (
                    <div key={index} className="relative">
                      <Link2
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="url"
                        className={`${inputClass} !mt-0 !pl-10`}
                        value={url}
                        onChange={(e) => updateProductUrl(index, e.target.value)}
                        placeholder={`Product listing URL ${index + 1}${index === 0 ? ' (required)' : ' (optional)'}`}
                        aria-label={`Product listing URL ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
                {renderError('productUrls')}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex min-h-12 w-full disabled:cursor-not-allowed disabled:opacity-60 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:shadow-orange-500/30 focus:outline-none focus:ring-4 focus:ring-orange-500/25"
              >
                <Search size={18} />
                {isSubmitting ? 'Submitting audit…' : 'Check My Listings'}
                {!isSubmitting && <ArrowRight size={18} className="transition group-hover:translate-x-1" />}
              </button>

              {apiError && (
                <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm leading-6 text-red-700">
                  {apiError}
                </p>
              )}

              <p className="text-center text-xs leading-5 text-slate-400">
                By continuing, you agree to our website's privacy policy.
              </p>
            </form>
          </div>
        </div>
      </section>

      
<GlassModal
        isOpen={showResults}
        onClose={() => setShowResults(false)}
        title="Your Free Listing Audit"
        className="max-w-4xl"
      >
        {!apiReport ? (
          <div className="space-y-4 p-2" aria-live="polite">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-orange-100 border-t-orange-500" />
            <h3 className="text-center text-lg font-semibold text-slate-900">
              {auditStatus === 'PROCESSING' ? 'Analyzing your listings…' : 'Your audit is being prepared…'}
            </h3>
            <p className="text-center text-sm leading-6 text-slate-600">
              Status: {auditStatus || 'Submitting'}. This page will update automatically when the report is ready.
            </p>
            {apiError && (
              <p role="alert" className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
                {apiError}
              </p>
            )}
            {auditId && (
              <p className="text-center text-xs text-slate-400">
                Audit reference: {auditId}
              </p>
            )}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowResults(false)}
                className="min-h-10 rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close (processing continues)
              </button>
            </div>
          </div>
        ) : (
          <AuditReport
            report={apiReport}
            onClose={() => setShowResults(false)}
          />
        )}
      </GlassModal>

    </>
  );
};

export default FreeAudit;
