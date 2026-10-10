import React from 'react';
import ContactForm from '../components/sections/ContactForm';
import ContactStats from '../components/sections/ContactStats';
import ContactProcess from '../components/sections/ContactProcess';
import ContactCards from '../components/sections/ContactCards';
import ContactFAQ from '../components/sections/ContactFAQ';
import ContactCTA from '../components/sections/ContactCTA';


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


const Contact = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-white via-orange-50/20 to-white">

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

      {/* Middle Glow */}
      <div className="absolute top-[40%] right-[-200px] w-[500px] h-[500px] bg-primary-500/5 blur-3xl rounded-full pointer-events-none" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-[-200px] w-[500px] h-[500px] bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 pt-24">

        <ContactForm />

        <ContactStats />

        <ContactProcess />

        <ContactCards />

        {/* Infinite scrolling platform logos slider at the bottom of the section (Moving Right to Left) */}
        <div className="w-full border-y border-slate-200/80 bg-slate-50/50 py-6 overflow-hidden relative mt-8">
          <div className="max-w-7xl mx-auto px-6 mb-3">
            <p className="text-center text-[14px] font-bold text-slate-900 uppercase tracking-widest">
              Trusted by Brands Across Leading Marketplace
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
                    className="h-8 w-auto object-contain max-w-[100px]"
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

        <ContactFAQ />

        <ContactCTA />


      </div>
    </div>
  );
};

export default Contact;