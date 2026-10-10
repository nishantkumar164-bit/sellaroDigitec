import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Shield,
  Facebook,
  Instagram,
  Linkedin
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
      href: '/services/wordpress-website-development'
    },
    { name: 'Video Editing', href: '/services/video-editing' }
  ];

  const complianceBadges = [
    'Amz SPN Verified',
    'Marketplace Launch Experts',
    'India Based Support Team'
  ];

  const countryLinks = [
    { name: 'USA', href: '/usa' },
    { name: 'UAE', href: '/uae' },
    { name: 'Canada', href: '/canada' },
    { name: 'Australia', href: '/australia' }
  ];

  return (
    <footer className="relative bg-slate-100 border-t border-slate-200 pt-20 pb-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full glow-orb-gold pointer-events-none opacity-30 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

        {/* Column 1 - Brand */}

        <div className="flex flex-col gap-6">

          <Link to="/" className="flex items-center gap-3">
            <img
              src="/image/digitec_logo.webp"
              alt="Sellaro Digitec Solutions"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="text-slate-600 text-sm leading-relaxed">
            Accelerating brand revenue and operational efficiency across
            global and Indian e-commerce marketplaces.
            Trusted growth catalysts.
          </p>

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold w-fit">
            ✓ 2450+ Businesses Launched Successfully
          </div>

          <div className="flex flex-col gap-2">

            {complianceBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs text-slate-600 font-medium"
              >
                <Shield className="h-3.5 w-3.5 text-orange-500 shrink-0" />
                <span>{badge}</span>
              </div>
            ))}

          </div>

        </div>


        {/* Column 2 - Growth Pillars */}

        <div>

          <h2 className="font-heading text-slate-900 font-bold text-base mb-6 uppercase tracking-wider">
            Growth Pillars
          </h2>

          <ul className="flex flex-col gap-3">

            {servicesLinks.map((link, idx) => (
              <li key={idx}>

                <Link
                  to={link.href}
                  className="
                    text-slate-600
                    hover:text-slate-900
                    text-sm
                    transition
                    hover:translate-x-1
                    inline-block
                  "
                >
                  {link.name}
                </Link>

              </li>
            ))}

          </ul>

        </div>


        {/* Column 3 - Regional Operations */}

        <div>

          <h2 className="font-heading text-slate-900 font-bold text-base mb-6 uppercase tracking-wider">
            Regional Operations
          </h2>

          {/* India Office */}

          <div className="flex gap-3 items-start">

            <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />

            <div>

              <p className="text-slate-800 font-semibold text-sm">
                India
              </p>

              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Sellaro Digitec Solutions Pvt. Ltd.
                <br />
                Beur Mor, Anishabad
                <br />
                Patna, Bihar
              </p>

            </div>

          </div>


          
          {/* Markets We Serve */}

<div className="mt-8">

  <p className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-4">
    Markets We Serve
  </p>

  <div className="flex flex-col gap-2.5">

    {/* India - External Website */}
    <a
  href="https://digitecsolution.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    text-sm
    text-slate-700
    font-medium
    hover:text-orange-500
    hover:translate-x-1
    transition-all
    inline-block
  "
>
  India
</a>

    {/* USA */}
    <Link
      to="/usa"
      className="
        text-sm
        text-slate-700
        font-medium
        hover:text-orange-500
        hover:translate-x-1
        transition-all
        inline-block
      "
    >
      USA
    </Link>

    {/* UK */}
<Link
  to="/uk"
  className="
    text-sm
    text-slate-700
    font-medium
    hover:text-orange-500
    hover:translate-x-1
    transition-all
    inline-block
  "
>
  UK
</Link>

    {/* UAE */}
    <Link
      to="/uae"
      className="
        text-sm
        text-slate-700
        font-medium
        hover:text-orange-500
        hover:translate-x-1
        transition-all
        inline-block
      "
    >
      UAE
    </Link>

    {/* Canada */}
    <Link
      to="/canada"
      className="
        text-sm
        text-slate-700
        font-medium
        hover:text-orange-500
        hover:translate-x-1
        transition-all
        inline-block
      "
    >
      Canada
    </Link>

    {/* Australia */}
    <Link
      to="/australia"
      className="
        text-sm
        text-slate-700
        font-medium
        hover:text-orange-500
        hover:translate-x-1
        transition-all
        inline-block
      "
    >
      Australia
    </Link>

  </div>

</div>

        </div>


        {/* Column 4 - Contact */}

        <div className="flex flex-col gap-6">

          <div>

            <h2 className="font-heading text-slate-900 font-bold text-base mb-2 uppercase tracking-wider">
              Get In Touch
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Need help launching on Amz, Walmart,
              Shopify or other marketplaces?
              Our experts are ready to assist.
            </p>

          </div>


          {/* Contact Details */}

          <div className="flex flex-col gap-3 text-sm text-slate-600">

            <a
              href="mailto:sellarodigitecsolutions@gmail.com"
              className="flex items-center gap-3 hover:text-slate-900 transition"
            >
              <Mail className="h-4 w-4 text-orange-500" />

              <span>
                sellarodigitecsolutions@gmail.com
              </span>

            </a>


            <div className="flex items-center gap-3">

              <Phone className="h-4 w-4 text-orange-500" />

              <span>
                +91 9031 047 291
              </span>

            </div>

          </div>


          {/* Social Media */}

          <div>

            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
              Follow Us
            </p>

            <div className="flex items-center gap-4">

              {/* Facebook */}

              <a
                href="https://www.facebook.com/profile.php?id=61576156656108"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sellaro Digitec on Facebook"
                className="
                  h-11 w-11 flex items-center justify-center
                  rounded-lg
                  bg-white
                  border
                  border-slate-200
                  text-slate-600
                  hover:text-blue-600
                  hover:-translate-y-1
                  transition-all
                "
              >
                <Facebook size={18} />
              </a>


              {/* Instagram */}

              <a
                href="https://www.instagram.com/_digitecsolutions_?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sellaro Digitec on Instagram"
                className="
                  h-11 w-11 flex items-center justify-center
                  rounded-lg
                  bg-white
                  border
                  border-slate-200
                  text-slate-600
                  hover:text-pink-500
                  hover:-translate-y-1
                  transition-all
                "
              >
                <Instagram size={18} />
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/company/digitec-solution-268a5b365/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Sellaro Digitec on LinkedIn"
                className="
                  h-11 w-11 flex items-center justify-center
                  rounded-lg
                  bg-white
                  border
                  border-slate-200
                  text-slate-600
                  hover:text-blue-700
                  hover:-translate-y-1
                  transition-all
                "
              >
                <Linkedin size={18} />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          mt-16
          pt-8
          border-t
          border-slate-200
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          text-xs
          text-slate-600
          relative
          z-10
        "
      >

        <div>
          © {currentYear} Sellaro Digitec Solutions Pvt. Ltd.
          All Rights Reserved. Registered in India.
        </div>


        <div className="flex gap-6">

          <Link
            to="/privacy-policy"
            className="hover:text-slate-800 transition"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms-conditions"
            className="hover:text-slate-800 transition"
          >
            Terms & Conditions
          </Link>

          <Link
            to="/cache-policy"
            className="hover:text-slate-800 transition"
          >
            Cache Policy
          </Link>

        </div>

      </div>

    </footer>
  );
};

export default Footer;