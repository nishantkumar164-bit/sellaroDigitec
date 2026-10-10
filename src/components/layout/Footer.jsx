
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Facebook,
  Instagram,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'AMZ Account Management', href: '/services/amazon' },
    { name: 'Etsy Account Management', href: '/services/etsy' },
    { name: 'Walmart Account Management', href: '/services/walmart' },
    { name: 'Google Ads', href: '/services/google-display-ads' },
    { name: 'Meta Ads', href: '/services/meta-ads' },
    { name: 'Brand Registry', href: '/services/brand-registry' },
    {
      name: 'Wordpress Website Development',
      href: '/services/wordpress-website-development',
    },
    { name: 'Video Editing', href: '/services/video-editing' },
    { name: 'Blog & Insights', href: '/blog' },
  ];

  const complianceBadges = [
    'Amz SPN Verified',
    'Marketplace Launch Experts',
    'India Based Support Team',
  ];

  const marketLinkClass =
    'inline-block text-sm font-medium text-slate-700 transition-all hover:translate-x-1 hover:text-orange-500';

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-100 pt-16 pb-10 sm:pt-20">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full glow-orb-gold opacity-30"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

        {/* Column 1 — Brand */}
        <div className="flex flex-col gap-6">
          <Link
            to="/"
            className="flex w-fit items-center gap-3"
            aria-label="Sellaro Digitec home"
          >
            <img
              src="/image/digitec_logo.webp"
              alt="Sellaro Digitec Solutions"
              className="h-12 w-auto object-contain"
              loading="lazy"
            />
          </Link>

          <p className="text-sm leading-relaxed text-slate-600">
            Accelerating brand revenue and operational efficiency across
            global and Indian e-commerce marketplaces. Trusted growth
            catalysts.
          </p>

          <div className="inline-flex w-fit items-center rounded-full bg-orange-50 px-3 py-2 text-xs font-semibold text-orange-600">
            ✓ 2450+ Businesses Launched Successfully
          </div>

          <div className="flex flex-col gap-2">
            {complianceBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-xs font-medium text-slate-600"
              >
                <Shield
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-orange-500"
                />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2 — Growth Pillars */}
        <div>
          <h2 className="mb-6 font-heading text-base font-bold uppercase tracking-wider text-slate-900">
            Growth Pillars
          </h2>

          <ul className="flex flex-col gap-3">
            {servicesLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="inline-block text-sm text-slate-600 transition hover:translate-x-1 hover:text-slate-900"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Markets We Serve */}
        <div>
          <h2 className="mb-6 font-heading text-base font-bold uppercase tracking-wider text-slate-900">
            Markets We Serve
          </h2>

          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="https://digitecsolution.in/"
                target="_blank"
                rel="noopener noreferrer"
                className={marketLinkClass}
              >
                India
              </a>
            </li>

            <li>
              <Link to="/usa" className={marketLinkClass}>
                USA
              </Link>
            </li>

            <li>
              <Link to="/uk" className={marketLinkClass}>
                UK
              </Link>
            </li>

            <li>
              <Link to="/uae" className={marketLinkClass}>
                UAE
              </Link>
            </li>

            <li>
              <Link to="/canada" className={marketLinkClass}>
                Canada
              </Link>
            </li>

            <li>
              <Link to="/australia" className={marketLinkClass}>
                Australia
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 — Get in Touch */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="mb-3 font-heading text-base font-bold uppercase tracking-wider text-slate-900">
              Get in Touch
            </h2>

            <p className="text-sm leading-relaxed text-slate-600">
              Need help launching on Amazon, Walmart, Shopify, or other
              marketplaces? Our experts are ready to assist.
            </p>
          </div>

          {/* India office address */}
          <div className="flex items-start gap-3">
            <MapPin
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
            />

            <address className="not-italic text-sm leading-relaxed text-slate-600">
              <span className="font-semibold text-slate-800">
                India Office
              </span>
              <br />
              Sellaro Digitec Solutions Pvt. Ltd.
              <br />
              Beur Mor, Anishabad
              <br />
              Patna, Bihar, India
            </address>
          </div>

          {/* Contact details */}
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <a
              href="mailto:sellarodigitecsolutions@gmail.com"
              className="flex items-start gap-3 transition hover:text-slate-900"
            >
              <Mail
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-orange-500"
              />

              <span className="break-all">
                sellarodigitecsolutions@gmail.com
              </span>
            </a>

            <a
              href="tel:+919031047291"
              className="flex items-center gap-3 transition hover:text-slate-900"
            >
              <Phone
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-orange-500"
              />

              <span>+91 9031 047 291</span>
            </a>
          </div>

          {/* Social media */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Follow Us
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61576156656108"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sellaro Digitec on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:text-blue-600"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>

              <a
                href="https://www.instagram.com/_digitecsolutions_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sellaro Digitec on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:text-pink-500"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>

              <a
                href="https://www.linkedin.com/company/digitec-solution-268a5b365/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sellaro Digitec on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:text-blue-700"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="relative z-10 mx-auto mt-14 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-6 pt-8 text-center text-xs text-slate-600 md:mt-16 md:flex-row md:text-left">
        <div>
          © {currentYear} Sellaro Digitec Solutions Pvt. Ltd. All Rights
          Reserved. Registered in India.
        </div>

        <nav
          aria-label="Legal links"
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          <Link
            to="/privacy-policy"
            className="transition hover:text-slate-800"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms-conditions"
            className="transition hover:text-slate-800"
          >
            Terms &amp; Conditions
          </Link>

          <Link
            to="/cache-policy"
            className="transition hover:text-slate-800"
          >
            Cache Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
