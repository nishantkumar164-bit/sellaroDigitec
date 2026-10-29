import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Globe,
  Coins,
  ChevronDown,
  Sparkles,
  Target,
  Layers,
  ShieldCheck,
  Code2
} from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Button from '../common/Button';

const Navbar = ({ currency, onCurrencyToggle }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Mobile accordion state tracking
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileMarketplaceOpen, setMobileMarketplaceOpen] = useState(false);
  const [mobilePerformanceOpen, setMobilePerformanceOpen] = useState(false);
  const [mobileSocialOpen, setMobileSocialOpen] = useState(false);
  const [mobileComplianceOpen, setMobileComplianceOpen] = useState(false);
  const [mobileWebsiteOpen, setMobileWebsiteOpen] = useState(false);

  const isServicesActive = location.pathname.startsWith('/services');

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative font-semibold text-sm tracking-wider py-2 transition-all duration-300 hover:text-orange-500 ${isActive
          ? 'text-orange-600 font-bold'
          : 'text-slate-700'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {children}

          {isActive && (
            <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-orange-500 rounded-full"></span>
          )}
        </>
      )}
    </NavLink>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
      ? 'bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-lg py-2'
      : 'bg-white/95 backdrop-blur-sm py-3'
      }`}>
      <div
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-[60px]' : 'h-[72px]'
          }`}
      >

        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-start gap-1 group focus:outline-none"
        >
          <span
            className={`font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-600 rounded-full border border-orange-400/40 uppercase tracking-wider self-start shadow-sm transition-all duration-500 ${isScrolled
              ? 'text-[8px] px-1.5 py-0.5'
              : 'text-[9px] px-2 py-0.5'
              }`}
          >
            Verified Amz SPN
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <img
              src="/image/logo.webp"
              alt="Sellaro Digitec Solutions"
              className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10'
                }`}
              onError={(e) => {
                if (e.target.src.endsWith('/image/logo.webp')) {
                  e.target.src = '/images/logo.webp';
                } else {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }
              }}
            />
            <div className="hidden" style={{ display: 'none' }}>
              <div className="font-heading text-lg font-extrabold text-slate-900 tracking-wide flex items-center gap-1.5 leading-none">
                SELLARO <span className="text-orange-500 text-xs font-bold px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">GROWTH</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? 'gap-6' : 'gap-8'
            }`}
        >

          {/* SERVICES MEGAMENU TRIGGER */}
          <div className="relative group">
            <NavLink
              to="/services"
              className={`relative flex items-center gap-2 font-semibold transition-all duration-500 tracking-wider py-2 transition-all duration-300 hover:text-orange-500 ${isServicesActive
                ? 'text-orange-600 font-bold'
                : 'text-slate-700'
                }`}
            >
              Services

              {isServicesActive && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-orange-500 rounded-full"></span>
              )}

              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </NavLink>

            {/* Premium Megamenu Flyout */}
            <div className="absolute -left-24 top-full mt-0 w-[1100px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/60 p-8 grid grid-cols-5 gap-10 mt-2">
                {/* Column 1: Account Management */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-1">
                    <Layers className="w-4 h-4 text-orange-500" />
                    <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">Marketplace Management</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: 'Amz Account', to: '/services/amazon' },
                      { name: 'Flipkart Account', to: '/services/flipkart' },
                      { name: 'Meesho Account', to: '/services/meesho' },
                      { name: 'JioMart Account', to: '/services/joimart' },
                      { name: 'eBay Account', to: '/services/ebay' },
                      { name: 'Etsy Account', to: '/services/etsy' },
                      { name: 'Walmart Account', to: '/services/walmart' }
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5"
                      >
                        {item.name} Solutions
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 2: Digital Marketing */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-1">
                    <Target className="w-4 h-4 text-orange-500" />
                    <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">Digital Marketing</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: 'Google Search Ads', to: '/services/google-search-ads' },
                      { name: 'Google Display Ads', to: '/services/google-display-ads' },
                      { name: 'Google Products Listing', to: '/services/google-products-listing' },
                      { name: 'Google Shopping Ads', to: '/services/google-shopping-ads' }
                    ].map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Custom Social Media Growth */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-1">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">Social Media Growth</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <Link to="/services/meta-ads" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      Meta Ads
                    </Link>
                    <Link to="/services/influencer-marketing" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      Influencer Marketing
                    </Link>
                    <Link to="/services/content-design" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      Content Design
                    </Link>
                    <Link to="/services/video-editing" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      Video Editing
                    </Link>
                  </div>
                </div>
                
                {/* Column 3: Custom Social Website Development */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-1">
                    <Code2 className="w-4 h-4 text-orange-500" />
                    <span className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider">Website Development</span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <Link to="/services/shopify" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      Shopify
                    </Link>
                    <Link to="/services/wordpress" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      WordPress
                    </Link>
                    <Link to="/services/custom-website" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      Custom Website
                    </Link>
                    <Link to="/services/website-redesign" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      Website Redesign & Customization
                    </Link>
                    <Link to="/services/product-catalouge-design" className="text-slate-600 hover:text-orange-500 text-xs font-semibold transition-colors py-0.5">
                      Product Catalogue Design
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <NavItem to="/launch" className="text-slate-650 hover:text-slate-950 font-semibold transition-all duration-500 transition tracking-wider py-2">
            New Account Launch
          </NavItem>

          {/* <NavItem to="/portfolio" className="text-slate-650 hover:text-slate-950 font-semibold transition-all duration-500 transition tracking-wider py-2">
            Portfolio
          </NavItem> */}

          <NavItem to="/contact" className="text-slate-650 hover:text-slate-950 font-semibold transition-all duration-500 transition tracking-wider py-2">
            Contact Us
          </NavItem>

        </div>

        {/* Desktop CTA & Switchers */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onCurrencyToggle}
            className={`flex items-center transition-all duration-500 bg-white hover:bg-slate-50 text-slate-800 rounded-full border border-slate-200 shadow-sm ${isScrolled
              ? 'gap-1 px-2 py-1 text-[11px]'
              : 'gap-1.5 px-3 py-2 text-xs'
              }`}
          >
            <Coins className="h-3.5 w-3.5 text-orange-500" />
            <span>CURRENCY: <strong>{currency}</strong></span>
          </button>

          <div className="flex items-center text-slate-600 gap-1.5 text-xs font-semibold bg-slate-100 py-2 px-3 rounded-full border border-slate-200/60 shadow-sm">
  <Globe className="h-3.5 w-3.5 text-orange-500" />

  <a href="https://sellarodigitec.com/usa" className="hover:text-orange-500 transition-colors">
    US
  </a>

  <span>•</span>

  <a href="https://sellarodigitec.com/uk" className="hover:text-orange-500 transition-colors">
    UK
  </a>

  <span>•</span>

  <a href="https://sellarodigitec.com/uae" className="hover:text-orange-500 transition-colors">
    UAE
  </a>

  <span>•</span>

  <a href="https://sellarodigitec.com/canada" className="hover:text-orange-500 transition-colors">
    CA
  </a>

  <span>•</span>

  <a href="https://digitecsolution.in/" className="hover:text-orange-500 transition-colors">
    IN
  </a>
</div>

          <div
            className={`transition-all duration-500 ${isScrolled ? 'scale-90' : 'scale-100'
              }`}
          >
            <Link to="/free-audit">
              <Button variant="primary" size="sm">
                Get Free Webstore Audit
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle Trigger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onCurrencyToggle}
            aria-label={`Change currency (currently ${currency})`}
            className="flex items-center justify-center gap-1 text-[11px] font-bold bg-slate-100 min-h-11 min-w-11 px-3 rounded-full border border-slate-200 text-slate-800"
          >
            <span>{currency}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-500 hover:text-slate-950 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="
      fixed inset-0
      z-50
      md:hidden
      bg-black/50
      backdrop-blur-xl
      transition-opacity
      duration-300
    "
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Slide-Out Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[380px] bg-white border-l border-slate-200 shadow-2xl p-8 z-[60] transform transition-transform duration-500 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between pb-6 border-b border-slate-200/80 mb-8">
          <span className="font-heading font-extrabold text-slate-950 text-md">NAVIGATION</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close navigation menu" className="text-slate-500 hover:text-slate-900 p-2 min-h-11 min-w-11 flex items-center justify-center">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col gap-5 overflow-y-auto pr-2">

          {/* Mobile services collapsible */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`font-heading text-lg font-bold flex items-center justify-between w-full text-left transition-colors ${isServicesActive
                ? 'text-orange-600'
                : 'text-slate-700 hover:text-orange-500'
                }`}
            >
              <span>Services</span>
              {isServicesActive && (
                <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-orange-500 rounded-full"></span>
              )}

              <ChevronDown
                className="w-4 h-4 transition-transform group-hover:rotate-180"
              />
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-150 py-1">

                {/* Account management Accordion */}
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    aria-expanded={mobileMarketplaceOpen}
                    onClick={() => setMobileMarketplaceOpen(!mobileMarketplaceOpen)}
                    className="text-slate-650 hover:text-slate-900 font-heading text-sm font-semibold flex items-center justify-between w-full text-left"
                  >
                    <span>Marketplace Management</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileMarketplaceOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileMarketplaceOpen && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-slate-100 py-1">
                      {[
                        { name: 'Amz Account', to: '/services/amazon' },
                        { name: 'Flipkart Account', to: '/services/flipkart' },
                        { name: 'Meesho Account', to: '/services/meesho' },
                        { name: 'JioMart Account', to: '/services/joimart' },
                        { name: 'eBay Account', to: '/services/ebay' },
                        { name: 'Etsy Account', to: '/services/etsy' },
                        { name: 'Walmart Account', to: '/services/walmart' }
                      ].map((item) => (
                        <Link key={item.name} to={item.to} onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-orange-500 text-xs font-semibold py-1">
                          {item.name} Solutions
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Digital Marketing Accordion */}
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    aria-expanded={mobilePerformanceOpen}
                    onClick={() => setMobilePerformanceOpen(!mobilePerformanceOpen)}
                    className="text-slate-655 hover:text-slate-900 font-heading text-sm font-semibold flex items-center justify-between w-full text-left"
                  >
                    <span>Digital Marketing</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobilePerformanceOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobilePerformanceOpen && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-slate-100 py-1">
                      {[
                        { name: 'Google Search Ads', to: '/services/google-search-ads' },
                        { name: 'Google Display Ads', to: '/services/google-display-ads' },
                        { name: 'Google Products Listing', to: '/services/google-products-listing' },
                        { name: 'Google Shopping Ads', to: '/services/google-shopping-ads' }
                      ].map((item) => (
                        <Link key={item.name} to={item.to} onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-orange-500 text-xs font-semibold py-1">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* General brand channels */}
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    aria-expanded={mobileComplianceOpen}
                    onClick={() => setMobileComplianceOpen(!mobileComplianceOpen)}
                    className="text-slate-655 hover:text-slate-900 font-heading text-sm font-semibold flex items-center justify-between w-full text-left"
                  >
                    <span>Social Media Growth</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileComplianceOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileComplianceOpen && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-slate-100 py-1">
                      {[
                        { name: 'Meta Ads', to: '/services/meta-ads' },
                        { name: 'Influencer Marketing', to: '/services/influencer-marketing' },
                        { name: 'Content Design', to: '/services/content-design' },
                        { name: 'Video Editing', to: '/services/video-editing' }
                      ].map((item) => (
                        <Link key={item.name} to={item.to} onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-orange-500 text-xs font-semibold py-1">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                

                {/* General Website */}
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    aria-expanded={mobileWebsiteOpen}
                    onClick={() => setMobileWebsiteOpen(!mobileWebsiteOpen)}
                    className="text-slate-655 hover:text-slate-900 font-heading text-sm font-semibold flex items-center justify-between w-full text-left"
                  >
                    <span>Website Development</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileSocialOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileWebsiteOpen && (
                    <div className="pl-4 flex flex-col gap-2 border-l border-slate-100 py-1">
                      {[
                        { name: 'Shopify', to: '/services/shopify' },
                        { name: 'Wordpress', to: '/services/wordpress' },
                        { name: 'Custom Websites', to: '/services/custom-website' },
                        { name: 'Website Redesign', to: '/services/website-redesign' },
                        { name: 'Product Catalog Design', to: '/services/product-catalog-design' }
                      ].map((item) => (
                        <Link key={item.name} to={item.to} onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-orange-500 text-xs font-semibold py-1">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>

          <NavLink
            to="/launch"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-heading text-lg font-bold py-1 transition-colors ${isActive
                ? 'text-orange-600'
                : 'text-slate-700 hover:text-orange-500'
              }`
            }
          >
            New Account Launch
          </NavLink>

          <NavLink
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-heading text-lg font-bold py-1 transition-colors ${isActive
                ? 'text-orange-600'
                : 'text-slate-700 hover:text-orange-500'
              }`
            }
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `font-heading text-lg font-bold py-1 transition-colors ${isActive
                ? 'text-orange-600'
                : 'text-slate-700 hover:text-orange-500'
              }`
            }
          >
            Contact Us
          </NavLink>

          <div className="h-px bg-slate-200/80 my-2" />

          <Link to="/free-audit" onClick={() => setIsOpen(false)}>
            <Button variant="primary" size="md" className="w-full mt-2">
              Get Free Webstore Audit
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
