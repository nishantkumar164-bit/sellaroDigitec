
  import React, { useState } from 'react';
  import {
    AlertTriangle,
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    Check,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    FileSearch,
    Image,
    Lightbulb,
    ListChecks,
    ShieldAlert,
    Sparkles,
    Target,
    XCircle,
  } from 'lucide-react';

  function normalizeReport(apiReport) {
    if (!apiReport || typeof apiReport !== 'object') {
      return {
        mode: 'live',
        marketplace: 'Marketplace',
        analyzedAt: null,
        overallScore: null,
        summary: 'Waiting for the audit report.',
        categories: [],
        listings: [],
      };
    }

    const products = Array.isArray(apiReport.products) ? apiReport.products : [];
    const listings = products.map((product, index) => {
      const checks = Array.isArray(product.checks) ? product.checks : [];
      const findings = checks.map((check, checkIndex) => {
        const rawStatus = String(check.status || '').toLowerCase();
        const passed = check.passed === true || check.pass === true || rawStatus === 'pass' || rawStatus === 'passed' || check.ok === true;
        const failed = check.passed === false || check.pass === false || rawStatus === 'fail' || rawStatus === 'failed' || check.ok === false;
        const key = String(check.id || check.key || check.name || check.type || `check-${checkIndex + 1}`);
        const label = String(check.label || check.name || check.title || check.key || key)
          .replace(/[_-]+/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase());
        const evidence = check.evidence || check.details || check.message ||
          (passed ? 'This check passed using the HTML available to the audit worker.' :
            failed ? 'The available HTML did not satisfy this check.' :
              'The worker could not determine the outcome of this check from the returned HTML.');
        return {
          id: `${index}-${key}-${checkIndex}`,
          category: label,
          status: passed ? 'pass' : failed ? 'improve' : 'not_checked',
          title: String(check.title || label),
          evidence: String(evidence),
          recommendation: String(
            check.recommendation ||
            (passed
              ? 'Keep this element accurate and aligned with your marketplace requirements.'
              : failed
                ? `Review the listing's ${label.toLowerCase()} and update it where appropriate.`
                : 'Review this item manually in the marketplace listing or seller dashboard.')
          ),
          details: check.details ? String(check.details) : undefined,
        };
      });

      const passedCount = findings.filter((finding) => finding.status === 'pass').length;
      const score = typeof product.score === 'number'
        ? product.score
        : (product.accessible === true && findings.length
          ? Math.round((passedCount / findings.length) * 100)
          : null);
      const accessible = product.accessible === true;

      return {
        id: `${index}-${product.url || 'product'}`,
        url: String(product.url || ''),
        productName: String(product.title || product.productName || ''),
        status: accessible ? 'analyzed' : 'unavailable',
        score,
        findings,
        error: product.reason || 'The page could not be analyzed by the audit worker.',
      };
    });

    const accessibleCount = listings.filter((listing) => listing.status === 'analyzed').length;
    const score = typeof apiReport.score === 'number' ? apiReport.score : null;
    const summary = score == null
      ? `${accessibleCount} of ${products.length} product page(s) were accessible. No overall score was assigned because the audit could not calculate one from the available pages.`
      : `The audit completed basic HTML checks on ${accessibleCount} of ${products.length} product page(s). Review the findings below for issues detected in the returned page content.`;

    return {
      mode: 'live',
      marketplace: apiReport.marketplace || 'Marketplace',
      analyzedAt: apiReport.generatedAt || null,
      overallScore: score,
      summary,
      categories: [],
      listings,
      limitations: Array.isArray(apiReport.limitations) ? apiReport.limitations : [],
      scoreType: apiReport.scoreType || null,
    };
  }

  const statusConfig = {
    pass: {
      label: 'Passed',
      icon: CheckCircle2,
      iconClass: 'text-emerald-600',
      badgeClass: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
    },
    improve: {
      label: 'Needs improvement',
      icon: AlertTriangle,
      iconClass: 'text-amber-600',
      badgeClass: 'bg-amber-50 text-amber-800 ring-amber-200',
    },
    not_checked: {
      label: 'Not checked',
      icon: ShieldAlert,
      iconClass: 'text-slate-500',
      badgeClass: 'bg-slate-100 text-slate-600 ring-slate-200',
    },
    error: {
      label: 'Could not verify',
      icon: XCircle,
      iconClass: 'text-red-600',
      badgeClass: 'bg-red-50 text-red-700 ring-red-200',
    },
  };

  function scoreColor(score) {
    if (score >= 80) return '#059669';
    if (score >= 60) return '#D97706';
    return '#DC2626';
  }

  function ScoreRing({ score, size = 136 }) {
    const safeScore = Math.max(0, Math.min(100, score));
    const stroke = 9;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const dash = circumference * (safeScore / 100);

    return (
      <div
        className="relative shrink-0"
        style={{ width: size, height: size }}
        role="img"
        aria-label={`Listing quality score: ${safeScore} out of 100`}
      >
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeOpacity=".09"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={scoreColor(safeScore)}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference - dash}`}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold tracking-tight text-slate-950">
            {safeScore}
          </span>
          <span className="text-xs text-slate-500">out of 100</span>
        </div>
      </div>
    );
  }

  function ScoreBar({ category }) {
    return (
      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-slate-700">
            {category.name}
          </span>
          <span className="text-sm font-semibold tabular-nums text-slate-900">
            {category.score}/100
          </span>
        </div>
        <div
          className="h-2 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label={category.name}
          aria-valuenow={category.score}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${category.score}%`,
              backgroundColor: scoreColor(category.score),
            }}
          />
        </div>
      </div>
    );
  }

  function FindingCard({ finding }) {
    const [expanded, setExpanded] = useState(false);
    const config = statusConfig[finding.status] || statusConfig.error;
    const StatusIcon = config.icon;

    return (
      <article className="rounded-xl border border-slate-200 bg-white transition hover:border-slate-300">
        <div className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <StatusIcon
              size={21}
              className={`mt-0.5 shrink-0 ${config.iconClass}`}
            />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-medium text-slate-500">
                  {finding.category}
                </span>
                <span
                  className={`rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset ${config.badgeClass}`}
                >
                  {config.label}
                </span>
              </div>

              <h4 className="mt-2 font-semibold leading-6 text-slate-900">
                {finding.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {finding.evidence}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-emerald-50/70 p-3 sm:ml-8">
            <div className="flex items-start gap-2">
              <Lightbulb
                size={17}
                className="mt-0.5 shrink-0 text-emerald-700"
              />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                  Recommendation
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-700">
                  {finding.recommendation}
                </p>
              </div>
            </div>
          </div>

          {finding.details && (
            <div className="mt-3 sm:ml-8">
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
                className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-orange-600"
              >
                {expanded ? 'Hide details' : 'View audit details'}
                {expanded ? (
                  <ChevronUp size={16} />
                ) : (
                  <ChevronDown size={16} />
                )}
              </button>

              {expanded && (
                <div className="mt-2 rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                  {finding.details}
                </div>
              )}
            </div>
          )}
        </div>
      </article>
    );
  }

  function ListingCard({ listing, index, marketplace }) {
    const [expanded, setExpanded] = useState(index === 0);
    const passed = listing.findings.filter((f) => f.status === 'pass').length;
    const needsWork = listing.findings.filter((f) => f.status === 'improve').length;
    const unchecked = listing.findings.filter(
      (f) => f.status === 'not_checked' || f.status === 'error'
    ).length;

    return (
      <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <FileSearch size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Product {index + 1} · {marketplace}
              </p>
              <h3 className="mt-1 break-words font-semibold text-slate-900">
                {listing.productName || `Product listing ${index + 1}`}
              </h3>

              <a
                href={listing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex max-w-full items-center gap-1 break-all text-xs text-blue-700 hover:underline"
              >
                <span className="break-all">{listing.url}</span>
                <ExternalLink size={13} className="shrink-0" />
              </a>
            </div>

            {listing.status === 'analyzed' && listing.score != null && (
              <div className="shrink-0 text-right">
                <p className="text-2xl font-bold tabular-nums text-slate-900">
                  {listing.score}
                  <span className="text-sm font-medium text-slate-400">/100</span>
                </p>
                <p className="text-[11px] text-slate-500">Quality score</p>
              </div>
            )}
          </div>

          {listing.status === 'unavailable' ? (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <div className="flex items-start gap-2">
                <AlertTriangle size={19} className="mt-0.5 shrink-0 text-amber-700" />
                <div>
                  <p className="font-semibold text-amber-900">
                    Listing could not be analyzed
                  </p>
                  <p className="mt-1 text-sm leading-6 text-amber-800">
                    {listing.error || 'The page did not provide enough accessible information.'}
                  </p>
                  <p className="mt-2 text-sm text-amber-800">
                    No score has been assigned to this listing.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                  <Check size={14} /> {passed} passed
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-800">
                  <AlertTriangle size={14} /> {needsWork} to improve
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                  <ShieldAlert size={14} /> {unchecked} not verified
                </span>
              </div>

              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                aria-expanded={expanded}
                className="mt-4 flex min-h-11 w-full items-center justify-between border-t border-slate-100 pt-3 text-sm font-semibold text-slate-700 hover:text-orange-600"
              >
                {expanded ? 'Hide listing findings' : 'View listing findings'}
                {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </>
          )}
        </div>

        {expanded && listing.status !== 'unavailable' && (
          <div className="space-y-3 border-t border-slate-100 bg-slate-50/70 p-4 sm:p-5">
            {listing.findings.map((finding) => (
              <FindingCard key={finding.id} finding={finding} />
            ))}
          </div>
        )}
      </article>
    );
  }

  export default function AuditReport({
    report: apiReport,
    onClose,
    onConsultation,
  }) {
    const report = normalizeReport(apiReport);
    const isDemo = false;
    const listings = report.listings || [];
    const analyzedListings = listings.filter(
      (listing) => listing.status === 'analyzed' && listing.score != null
    );
    const totalPassed = listings.reduce(
      (sum, listing) =>
        sum + listing.findings.filter((f) => f.status === 'pass').length,
      0
    );
    const totalImprovements = listings.reduce(
      (sum, listing) =>
        sum + listing.findings.filter((f) => f.status === 'improve').length,
      0
    );
    const notVerified = listings.reduce(
      (sum, listing) =>
        sum +
        listing.findings.filter(
          (f) => f.status === 'not_checked' || f.status === 'error'
        ).length,
      0
    );

    const overallScore =
      typeof report.overallScore === 'number' && analyzedListings.length
        ? report.overallScore
        : null;

    const displayDate = report.analyzedAt
      ? new Date(report.analyzedAt).toLocaleString()
      : null;

    return (
      <div className="space-y-6">
        {isDemo && (
          <div
            role="status"
            className="rounded-xl border border-amber-200 bg-amber-50 p-4"
          >
            <p className="font-semibold text-amber-900">
              Preview mode — sample data
            </p>
            <p className="mt-1 text-sm leading-6 text-amber-800">
              These products, scores and findings are examples only. The live
              report must use results returned by the actual audit engine.
            </p>
          </div>
        )}

        <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-orange-600">
                <Sparkles size={17} />
                SELLARO DIGITEC
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Your listing audit
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {report.marketplace || 'Marketplace'} · {listings.length} submitted listing(s)
              </p>
            </div>

            {displayDate && (
              <p className="text-xs text-slate-500">
                Report generated: {displayDate}
              </p>
            )}
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex justify-center">
              {overallScore != null ? (
                <ScoreRing score={overallScore} />
              ) : (
                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-slate-200 text-center">
                  <ShieldAlert size={26} className="text-slate-400" />
                  <span className="mt-2 text-xs text-slate-500">No overall score</span>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                {overallScore == null
                  ? 'More information is needed'
                  : overallScore >= 80
                    ? 'Your listings have a strong foundation'
                    : overallScore >= 60
                      ? 'There is room to improve your listings'
                      : 'Several listing improvements may be needed'}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {report.summary ||
                  'Review the evidence and recommendations below to understand the next steps for your listings.'}
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                This report reflects basic checks on HTML returned to the audit worker. It does not measure sales, ranking, conversion, or advertising performance.
              </p>
              {report.limitations?.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-xs leading-5 text-slate-500">
                  {report.limitations.map((limitation, index) => (
                    <li key={index}>{limitation}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center gap-2">
            <ListChecks size={20} className="text-orange-600" />
            <h3 className="text-lg font-bold text-slate-900">Audit summary</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              {
                label: 'Products analyzed',
                value: analyzedListings.length,
                icon: FileSearch,
                color: 'text-blue-600',
              },
              {
                label: 'Checks passed',
                value: totalPassed,
                icon: CheckCircle2,
                color: 'text-emerald-600',
              },
              {
                label: 'Improvements',
                value: totalImprovements,
                icon: Target,
                color: 'text-amber-600',
              },
              {
                label: 'Not verified',
                value: notVerified,
                icon: ShieldAlert,
                color: 'text-slate-500',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white p-4"
                >
                  <Icon size={21} className={item.color} />
                  <p className="mt-3 text-2xl font-bold tabular-nums text-slate-900">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {report.categories?.length > 0 && (
          <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
            <h3 className="text-lg font-bold text-slate-900">
              Quality breakdown
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Scores for the categories the audit was able to evaluate.
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {report.categories.map((category) => (
                <ScoreBar key={category.name} category={category} />
              ))}
            </div>
          </section>
        )}

        <section>
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900">
              Product-by-product findings
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Expand each product to see the evidence, recommendations and
              additional details.
            </p>
          </div>

          {listings.length ? (
            <div className="space-y-4">
              {listings.map((listing, index) => (
                <ListingCard
                  key={listing.id || listing.url}
                  listing={listing}
                  index={index}
                  marketplace={report.marketplace || 'Marketplace'}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
              <FileSearch className="mx-auto text-slate-400" size={30} />
              <p className="mt-3 font-semibold text-slate-800">
                No listing results are available
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Submit accessible product URLs to start an audit.
              </p>
            </div>
          )}
        </section>

        <section className="relative overflow-hidden rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
          <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full bg-orange-500/20 blur-3xl" />

          <div className="relative">
            <div className="flex items-center gap-2 text-sm font-semibold text-orange-300">
              <Lightbulb size={18} />
              YOUR NEXT STEP
            </div>
            <h3 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">
              Turn these findings into an actionable growth plan.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Get expert help reviewing your product content, catalog quality,
              images and marketplace optimization opportunities.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-300" />
                Prioritized improvement plan
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-300" />
                Product content and catalog recommendations
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-300" />
                Support tailored to your marketplace
              </li>
            </ul>

            <a
              href="/contact?source=marketplace-audit"
              onClick={onConsultation}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-orange-950/20 transition hover:-translate-y-0.5 hover:from-orange-400 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-400/30 sm:w-auto"
            >
              Discuss My Audit
              <ArrowRight size={18} />
            </a>

            <p className="mt-3 text-xs leading-5 text-slate-400">
              Consultation and implementation services may be chargeable.
              No sales or ranking outcomes are guaranteed.
            </p>
          </div>
        </section>

        {onClose && (
          <div className="flex justify-end border-t border-slate-100 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="min-h-11 rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Close report
            </button>
          </div>
        )}
      </div>
    );
  }
