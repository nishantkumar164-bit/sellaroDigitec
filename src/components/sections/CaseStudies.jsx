import React, { useState } from 'react';
import { Check, Sparkles, ShoppingBag, BarChart2, CheckCircle2, TrendingUp, Star, Award, Layers } from 'lucide-react';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Marketplace', 'D2C Storefronts', 'Branding', 'Creative'];

  const projects = [
    {
      brand: 'The Herbal Bowl ( India )',
      title: 'Amz A + Listing Optimization & SEO',
      category: 'Marketplace',
      logo: '/image/herbal-bowl-logo.webp',
      challenge: 'Low organic visibility and poor conversion rate despite strong product reviews.',
      solutions: [
        'In-depth keyword research',
        'Listing rewrite & SEO optimization',
        'A+ Content design & image upgrades',
        'Catalog restructuring & indexing'
      ],
      results: [
        { label: 'Conversion Rate', value: '+35%' },
        { label: 'Organic Traffic', value: '+22%' },
        { label: 'Revenue Growth', value: '+18%' }
      ],
      tags: ['Amz SEO', 'A+ Content', 'Listing Optimization'],
      // Interactive visual element mimicking mockup
      preview: (
        <div className="relative bg-[#fafafa] border border-slate-200 rounded-xl p-4 w-full shadow-inner flex flex-col justify-between min-h-[180px]">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
            <span className="text-[9px] font-extrabold text-slate-800 tracking-wider">A+ Listing on Ecommerce Platform</span>
            <span className="text-[8px] bg-emerald-100 text-emerald-800 px-1 py-0.5 rounded font-extrabold font-mono">Live</span>
          </div>
          <div className="flex gap-4 items-center flex-1">
            <img
              src="/image/moringa-powder_final.webp"
              alt="Listing preview"
              loading="lazy"
              decoding="async"
              className="w-20 h-20 object-cover rounded-lg border border-slate-250 shrink-0"
            />
            <div className="flex flex-col gap-1 w-full">
              <div className="h-2 w-full bg-slate-300 rounded" />
              <div className="h-2 w-5/6 bg-slate-200 rounded" />
              <div className="h-1.5 w-1/3 bg-orange-500 rounded mt-1" />
            </div>
          </div>
          <div className="border-t border-slate-100 pt-2 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase">
            <span>A+ Content Injected</span>
            <span className="text-orange-500">★★★★★</span>
          </div>
        </div>
      )
    },
    {
      brand: 'GSEL Store (INDIA)',
      title: 'Custom Headless Shopify Launch',
      category: 'D2C Storefronts',
      logo: 'https://gselstore.com/cdn/shop/files/GSEL.png?height=72&v=1776961652',
      challenge: 'Slow website speed and high cart abandonment affecting sales.',
      solutions: [
        'Custom headless Shopify build',
        'Ultra-fast performance optimization',
        'Conversion-focused UX & checkout',
        'Mobile-first responsive design'
      ],
      results: [
        { label: 'Sales Lift', value: '+46%' },
        { label: 'Conversion Rate', value: '+31%' },
        { label: 'Page Load Time', value: '0.7s' }
      ],
      tags: ['Shopify Plus', 'Headless Storefront', 'Performance Optimization'],
      preview: (
        <div className="relative bg-[#fafafa] border border-slate-200 rounded-xl p-4 w-full shadow-inner flex flex-col justify-between min-h-[180px]">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
            <span className="text-[9px] font-extrabold text-slate-800 tracking-wider">shopify store</span>
            <span className="text-[8px] bg-blue-100 text-blue-800 px-1 py-0.5 rounded font-extrabold font-mono">Fast</span>
          </div>
          <div className="flex gap-4 items-center flex-1">
            <img
              src="https://gselstore.com/cdn/shop/files/peel_img_front.png?v=1777441529&width=1600"
              alt="Shopify product"
              className="w-20 h-20 object-cover rounded-lg border border-slate-250 shrink-0"
            />
            <div className="flex flex-col gap-1 w-full">
              <div className="h-1.5 w-full bg-slate-350 rounded" />
              <div className="h-1.5 w-2/3 bg-slate-250 rounded" />
              <div className="h-3 w-1/2 bg-blue-600 rounded mt-1.5" />
            </div>
          </div>
          <div className="border-t border-slate-100 pt-2 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase">
            <span>Checkout Optimized</span>
            <span className="text-emerald-600 font-extrabold">99/100 Speed</span>
          </div>
        </div>
      )
    },
    {
  brand: 'Ochitya',
  title: 'Branding & Product Catalog Design',
  category: 'Branding',
  logo: '/image/ochitya_logo.webp',

  challenge:
    'Ochitya needed to improve its brand visibility and create a stronger, more consistent visual identity across its marketing materials. Its product catalog also lacked a structured and professional presentation, making it difficult to showcase its products range effectively.',

  solutions: [
    'Brand identity and visual consistency across marketing materials',
    'Professional product catalog design for product collections',
    'Structured product presentation with consistent layouts and visuals',
    'Branded marketing creatives to improve product visibility',
    'Visual content designed to strengthen brand recognition'
  ],

  results: [
    { label: 'Brand Visibility', value: 'Improved' },
    { label: 'Product Catalog', value: 'Redesigned' },
    { label: 'Brand Consistency', value: 'Strengthened' }
  ],

  tags: [
    'Branding',
    'Product Catalog Design',
    'Brand Identity',
    'Furniture Marketing'
  ],

  preview: (
    <div className="relative bg-[#fafafa] border border-slate-200 rounded-xl p-4 w-full shadow-inner flex flex-col justify-between min-h-[180px]">

      <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
        <span className="text-[9px] font-extrabold text-slate-800 tracking-wider">
          BRANDING & CATALOG
        </span>

        <span className="text-[8px] bg-blue-100 text-blue-800 px-1 py-0.5 rounded font-extrabold font-mono">
          Branding
        </span>
      </div>

      <div className="flex gap-4 items-center flex-1">

        <div className="w-20 h-20 rounded-lg bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center overflow-hidden">
          <img
            src="/image/iron_steamer.webp"
            alt="Ochitya_products"
            className="max-w-[70px] max-h-[55px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <div className="h-2 w-full bg-slate-300 rounded" />
          <div className="h-1.5 w-4/5 bg-slate-200 rounded" />

          <div className="flex gap-2 mt-1">
            <div className="h-7 w-1/3 bg-blue-600 rounded" />
            <div className="h-7 w-1/3 bg-slate-200 rounded" />
            <div className="h-7 w-1/3 bg-slate-300 rounded" />
          </div>
        </div>

      </div>

      <div className="border-t border-slate-100 pt-2 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase">
        <span>Brand + Product Catalog</span>
        <span className="text-emerald-600 font-extrabold">
          Visibility + Consistency
        </span>
      </div>

    </div>
  )
},
    {
  brand: 'Kosmic Furniture (INDIA)',
  title: 'Social Media Creative & Video Content',
  category: 'Creative',
  logo: 'https://kosmicfurniture.com/cdn/shop/files/Master_file_kosmic_Recovered_blue-03.png?v=1784016223&width=280',

  challenge:
    'Kosmic Furniture needed engaging visual content to showcase its furniture products, strengthen its social media presence, and capture attention through static creatives and short-form video content.',

  solutions: [
    'Social media creatives for product promotions',
    'Engaging posts designed for furniture campaigns',
    'Professional video editing for promotional content',
    'Short-form Reels and social media video content'
  ],

  results: [
    { label: 'Social Creatives', value: 'Multiple' },
    { label: 'Video Content', value: 'Reels & Ads' },
    { label: 'Content Formats', value: 'Posts + Video' }
  ],

  tags: [
    'Social Media Creatives',
    'Video Editing',
    'Reels',
    'Furniture Marketing'
  ],

  preview: (
    <div className="relative bg-[#fafafa] border border-slate-200 rounded-xl p-4 w-full shadow-inner flex flex-col justify-between min-h-[180px]">

      <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
        <span className="text-[9px] font-extrabold text-slate-800 tracking-wider">
          SOCIAL MEDIA CREATIVE
        </span>

        <span className="text-[8px] bg-blue-100 text-blue-800 px-1 py-0.5 rounded font-extrabold font-mono">
          Creative
        </span>
      </div>

      <div className="flex gap-4 items-center flex-1">

        <div className="w-20 h-20 rounded-lg bg-slate-100 border border-slate-200 shrink-0 flex items-center justify-center overflow-hidden">
          <img
            src="/image/chair.webp"
            alt="Kosmic_chais"
            className="max-w-[70px] max-h-[55px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <div className="h-2 w-full bg-slate-300 rounded" />
          <div className="h-1.5 w-4/5 bg-slate-200 rounded" />

          <div className="flex gap-2 mt-1">
            <div className="h-7 w-1/3 bg-blue-600 rounded" />
            <div className="h-7 w-1/3 bg-slate-200 rounded" />
            <div className="h-7 w-1/3 bg-slate-300 rounded" />
          </div>
        </div>

      </div>

      <div className="border-t border-slate-100 pt-2 flex justify-between items-center text-[9px] text-slate-500 font-bold uppercase">
        <span>Social Media Content</span>
        <span className="text-emerald-600 font-extrabold">
          Posts + Reels
        </span>
      </div>

    </div>
  )
}
  ];

  const statHighlights = [
    { icon: Sparkles, value: '100+', desc: 'Brands Managed', sub: 'Across 10+ Countries' },
    { icon: Layers, value: '50,000+', desc: 'Listings Optimized', sub: 'For Marketplaces' },
    { icon: BarChart2, value: '$10M+', desc: 'Revenue Influenced', sub: 'For Our Clients' },
    { icon: CheckCircle2, value: '95%', desc: 'Client Retention Rate', sub: 'Long-term Partnerships' },
    { icon: Award, value: '500+', desc: 'Projects Delivered', sub: 'With Proven Results' }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="case-studies" className="relative py-20 md:py-24 overflow-hidden bg-blueprint-grid border-y border-slate-200/80">

      {/* Background ambient radial lights */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full glow-orb-gold pointer-events-none opacity-15" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full glow-orb-emerald pointer-events-none opacity-10" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Section Heading Tag */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-xs text-orange-600 font-extrabold tracking-widest uppercase bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full">
            CASE STUDIES & PROOF
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            Realized outcomes. <br />Measured <span className="text-brand-gradient">sales velocity</span>.
          </h2>
          <p className="text-slate-650 text-sm sm:text-base mt-4 leading-relaxed max-w-3xl mx-auto font-medium">
            Explore how we helped brands across marketplaces and D2C channels unlock growth, improve performance, and increase revenue.
          </p>
        </div>

        {/* Filter Category Row Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 text-xs font-bold rounded-full transition-all duration-300 border shadow-sm ${activeFilter === cat
                ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white border-orange-500'
                : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Horizontal Project Cases (Mockup Layout matching wireframe) */}
        <div className="space-y-8 mb-24">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group">

              {/* Left Logo and Copy Content */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shadow-sm">
                      <img src={project.logo} alt={project.brand} className="h-full w-auto object-contain" />
                    </div>
                    <div>
                      <p className="text-[10px] text-orange-600 font-extrabold uppercase tracking-widest">{project.brand}</p>
                      <h3 className="font-heading text-lg font-bold text-slate-900 leading-tight mt-0.5">{project.title}</h3>
                    </div>
                  </div>

                  {/* Challenge vs Solution layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                    <div>
                      <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider mb-1.5">Challenge</p>
                      <p className="text-slate-600 text-xs leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mb-1.5">Solution</p>
                      <ul className="space-y-1.5">
                        {project.solutions.map((sol, sidx) => (
                          <li key={sidx} className="flex items-start gap-1.5 text-slate-700 text-xs">
                            <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5px]" />
                            <span>{sol}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Interactive Mockup Presentation */}
              <div className="lg:col-span-4 flex items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200/60">
                {project.preview}
              </div>

              {/* Right Quantitative Metrics Results Cards */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <p className="text-[11px] text-slate-600 font-bold uppercase tracking-wider mb-4">Results</p>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.results.map((res, ridx) => {
                      return (
                        <div key={ridx} className="relative bg-slate-50 border border-slate-200 rounded-2xl p-4 shadow-sm hover:bg-white transition duration-300 overflow-hidden group flex flex-col justify-between">
                          <div className="relative z-10 text-center">
                            <p className="font-heading text-xl font-extrabold text-emerald-600">{res.value}</p>
                            <p className="text-[9px] text-slate-500 font-bold uppercase mt-1 leading-normal">{res.label}</p>
                          </div>
                          <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-40 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none">
                            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full text-emerald-500">
                              <path d="M0,50 L0,40 Q10,30 20,35 T40,25 T60,15 T80,20 T100,5 L100,50 Z" fill="currentColor" fillOpacity="0.15" />
                              <path d="M0,40 Q10,30 20,35 T40,25 T60,15 T80,20 T100,5" fill="none" stroke="currentColor" strokeWidth="2.5" />
                            </svg>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subtag Pill collection */}
                <div className="flex flex-wrap gap-1.5 border-t border-slate-100 pt-4 mt-auto">
                  {project.tags.map((tag, tidx) => (
                    <span key={tidx} className="text-[9px] font-bold text-slate-600 bg-slate-150 border border-slate-200/80 px-2.5 py-1 rounded-full shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 5 Pillar Brand Highlights bottom row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-t border-slate-200/80 pt-12">
          {statHighlights.map((val, idx) => {
            const ValueIcon = val.icon;
            return (
              <div key={idx} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition duration-300">
                <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-600 rounded-xl shrink-0">
                  <ValueIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-xs font-bold text-slate-900 leading-none mb-1.5">{val.value}</p>
                  <p className="text-[10px] text-slate-600 leading-none font-bold uppercase tracking-wider mb-1">{val.desc}</p>
                  <p className="text-[9px] text-slate-600 font-medium leading-normal">{val.sub}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
