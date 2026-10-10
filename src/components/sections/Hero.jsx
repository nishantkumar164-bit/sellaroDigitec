import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import MarketplaceOrbit from "../home/MarketplaceOrbit";

const Hero = ({ onOpenForm, onScrollToROI }) => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  // const [activeImageIdx, setActiveImageIdx] = useState(0);

  const keyphrases = [
    'Amz Account Management',
    'Shopify Store Development',
    'Walmart Marketplace Growth',
    'Etsy Store Management',
    'Flipkart Seller Services',
    'Ecommerce SEO',
    'Google Ads Optimization',
    'Product Listing Optimization',
    'A+ Content Design',
    'Brand Building Services',
    'Full Catalog Management',
    'Product Graphics Design',
    'Amz Listing Creation'
  ];

  const platforms = [
    { name: 'Ebay', img: '/image/ebay_logo.png' },
    { name: 'Etsy', img: '/image/etsy_logo.png' },
    { name: 'Amz', img: '/image/amazon_logo.png' },
    { name: 'Flipkart', img: '/image/flipkart_logo.webp' },
    { name: 'Meta Ads', img: '/image/meta_ads.webp' },
    { name: 'Google Ads', img: '/image/google_ads.webp' },
    { name: 'Shopify', img: '/image/shopify_logo.webp' },
    { name: 'Wordpress', img: '/image/Wordpress_logo.webp' }
  ];

  // Cycle key phrases
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % keyphrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-10  pb-12 overflow-hidden bg-blueprint-grid">

      {/* Radial ambient background light halos */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full glow-orb-blue pointer-events-none opacity-30 animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full glow-orb-gold pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full mb-12">

        {/* Left Column: Sales Copy & Action Nodes */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">

          {/* Target Audience Trust Badge */}
          <div className="inline-flex items-center gap-2 self-start bg-slate-100 border border-slate-200/80 rounded-full px-4 py-2 mb-4 shadow-sm">
            <ShieldCheck className="h-4.5 w-4.5 text-blue-600 shrink-0" />
            <span className="text-xs text-slate-700 font-semibold tracking-wide">
              Trusted Ecommerce Growth Partner Across India, USA, UAE, Canada & Australia
            </span>
          </div>

          {/* Premium Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">

            We Build the <span className="text-brand-gradient">Revenue Engines</span> That Scale Ecommerce Business.
          </h1>

          {/* Rotating Terminal text indicator */}
          <div className="flex items-center gap-3 font-heading text-lg sm:text-xl md:text-2xl text-slate-800 font-bold mb-5 h-12">
            <Terminal className="h-6 w-6 text-blue-600 shrink-0" />
            <span className="text-slate-650">Core Focus:</span>
            <div className="relative overflow-hidden w-full h-full flex items-center">
              {keyphrases.map((phrase, idx) => (
                <span
                  key={idx}
                  className={`absolute left-0 transition-all duration-700 ease-out ${idx === activeWordIndex
                    ? 'opacity-100 translate-y-0 scale-100 text-slate-900 font-extrabold'
                    : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
                    }`}
                >
                  {phrase}
                </span>
              ))}
            </div>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
            Sellaro Digitec Solutions helps brands and sellers increase revenue through Amz account management, marketplace onboarding, Shopify store development, ecommerce website design, SEO, PPC advertising, product listing optimization, A+ content creation, and performance marketing services.
          </p>

          {/* Call-to-action clusters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="primary" size="md" onClick={onOpenForm}>
              Get Free Ecommerce Growth Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" size="md" onClick={onScrollToROI}>
              Calculate Revenue Lift
            </Button>
          </div>

          {/* Multi-Channel Trust stats & Ratings placed in the SAME row */}
          <div className="flex flex-wrap gap-4 border-t border-slate-200 pt-8">


            {/* Google Rating Card directly in the row */}
            {/* Google Reviews Card */}
            <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 min-h-[60px]">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google Reviews"
                className="h-8 w-8 object-contain shrink-0"
              />

              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">
                  Google Reviews
                </p>

                <div className="flex items-center gap-1 mt-1">
                  <span className="text-amber-500 text-[11px] tracking-tight">
                    ★★★★★
                  </span>

                  <span className="text-[10px] font-semibold text-slate-600">
                    4.8 / 5
                  </span>
                </div>

                <p className="text-[10px] text-slate-500 font-semibold mt-1">
                  40+ Reviews
                </p>

                <p className="text-[9px] text-slate-600 font-medium">
                  Verified Business Profile
                </p>
              </div>

            </div>

            {/* Amazon SPN Trust Card */}
            <div className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-md rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 min-h-[60px]">

              <img
                src="/image/amazon_logo.png"
                alt="Amz SPN"
                className="h-8 w-8 object-contain shrink-0"
              />

              <div className="leading-tight">
                <p className="text-xs font-bold text-slate-900">
                  Amz SPN Verified
                </p>

                <div className="flex items-center gap-1 mt-1">
                  <span className="text-amber-500 text-[11px] tracking-tight">
                    ★★★★★
                  </span>

                  <span className="text-[10px] font-semibold text-slate-600">
                    4.9 / 5
                  </span>
                </div>

                <p className="text-[10px] text-slate-500 font-semibold mt-1">
                  34+ Verified Reviews
                </p>

                <p className="text-[9px] text-slate-600 font-medium">
                  Seller Central Verified
                </p>
              </div>

            </div>

            <div className="flex items-center gap-2 p-2 bg-white/70 backdrop-blur-md rounded-lg border border-slate-200 shadow-sm min-h-[52px]">
              <ShieldCheck className="h-5 w-5 text-green-600" />

              <div>
                <p className="text-xs font-bold text-slate-900">
                  Multi-Marketplace Expert
                </p>

                <p className="text-[10px] text-slate-500 font-semibold">
                  Amz • Shopify • Walmart
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Ecommerce Orbit */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center lg:-mt-10 lg:translate-y-[-24px]">
          <MarketplaceOrbit />
        </div>

      </div>

      {/* Infinite scrolling platform logos slider at the bottom of the section (Moving Right to Left) */}
      <div className="w-full border-y border-slate-200/80 bg-slate-50/50 py-6 overflow-hidden relative mt-8">
        <div className="max-w-7xl mx-auto px-6 mb-3">
          <p className="text-center text-[14px] font-bold text-slate-900 uppercase tracking-widest">
            Trusted Ecommerce Growth Across Leading Marketplaces
          </p>
          <p className="text-center text-[11px] font-semibold text-slate-600 uppercase tracking-widest">
            Helping brands grow revenue across Amz, Walmart, Flipkart, Etsy, eBay, Shopify, Google Ads and Meta Ads.
          </p>
        </div>

        {/* Right to Left Slider Container */}
        <div className="relative flex w-full overflow-hidden">
          <div className="animate-scroll-left">
            {/* First Set */}
            {platforms.map((platform, idx) => (
              <div key={idx} className="mx-6 inline-flex items-center justify-center bg-white border border-slate-200 shadow-sm rounded-lg px-6 py-3 min-w-[130px] h-[58px] transition duration-300">
                <img
                  src={platform.img}
                  alt={platform.name}
                  className="h-11 w-auto object-contain max-w-[118px]"
                />
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {platforms.map((platform, idx) => (
              <div key={idx + 8} className="mx-6 inline-flex items-center justify-center bg-white border border-slate-200 shadow-sm rounded-lg px-6 py-3 min-w-[130px] h-[58px] transition duration-300">
                <img
                  src={platform.img}
                  alt={platform.name}
                  className="h-8 w-auto object-contain max-w-[100px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
