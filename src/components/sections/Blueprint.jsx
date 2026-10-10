import React from 'react';
import { Check, Shield, UserCheck, Star, Users, Award, TrendingUp } from 'lucide-react';

const Blueprint = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover & Audit',
      color: 'bg-blue-600',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      bulletBg: 'bg-blue-600/10',
      description: 'We analyze your business, marketplace accounts, listings, ads and competitors to find growth opportunities.',
      bullets: [
        'Account & Store Audit',
        'Listing & SEO Audit',
        'Competitor Analysis',
        'Performance Benchmarking'
      ],
      // Render simulated UI representation matching the wireframe
      mockup: (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-full aspect-[4/3] flex flex-col justify-between">
          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
            <span className="w-2 h-2 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-4 flex-1">
            {/* Visual circle chart representation */}
            <div className="w-16 h-16 rounded-full border-8 border-blue-600 border-t-slate-200 relative flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-slate-800">4.8</span>
            </div>
            {/* Bar charts representation */}
            <div className="flex flex-col gap-1 w-full">
              <div className="h-2 w-3/4 bg-slate-200 rounded" />
              <div className="h-2 w-1/2 bg-blue-600 rounded" />
              <div className="h-2 w-5/6 bg-slate-200 rounded" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[9px] text-slate-500 font-bold uppercase mt-2">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-ping" />
            <span>Audit Diagnostic Complete</span>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'Optimize & Build',
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      borderColor: 'border-orange-500',
      bulletBg: 'bg-orange-500/10',
      description: 'We optimize listings, design high-converting content, build storefronts and improve user experience.',
      bullets: [
        'Listing Optimization',
        'A+ Content Creation',
        'Storefront Development',
        'SEO & Content Optimization'
      ],
      mockup: (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-full aspect-[4/3] flex flex-col justify-between">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-2">
            <span className="text-[9px] font-extrabold text-orange-600 uppercase bg-orange-50 px-1.5 py-0.5 rounded">A+ Enhanced</span>
            <span className="text-[9px] font-bold text-slate-500">Live Preview</span>
          </div>
          <div className="flex gap-3 flex-1 items-center">
            {/* Camera photo symbol representation */}
            <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
              <div className="w-6 h-4 bg-orange-500 rounded relative">
                <span className="absolute -top-1 left-2 w-2.5 h-1 bg-orange-600 rounded" />
                <span className="absolute top-1 left-2.5 w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <div className="h-1.5 w-full bg-slate-200 rounded" />
              <div className="h-1.5 w-5/6 bg-slate-200 rounded" />
              <div className="h-1.5 w-2/3 bg-orange-500 rounded" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1.5 mt-2">
            <div className="h-10 bg-slate-100 rounded border border-slate-200" />
            <div className="h-10 bg-slate-100 rounded border border-slate-200" />
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'Launch & Scale',
      color: 'bg-blue-600',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      bulletBg: 'bg-blue-600/10',
      description: 'We launch targeted advertising campaigns and marketplace initiatives to drive traffic, visibility and sales.',
      bullets: [
        'PPC Campaign Setup',
        'Marketplace Promotions',
        'Traffic & Visibility Growth',
        'Sales Acceleration'
      ],
      mockup: (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-full aspect-[4/3] flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-1">
              <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-[8px]">a</span>
              <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-[8px]">G</span>
              <span className="w-4 h-4 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-[8px]">f</span>
            </div>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Campaign Active</span>
          </div>
          <div className="flex-1 bg-slate-50 rounded-lg p-2 border border-slate-150 flex flex-col justify-between">
            <div className="flex items-end gap-1 h-12 justify-around">
              <div className="w-3 h-4 bg-slate-200 rounded-t" />
              <div className="w-3 h-8 bg-slate-200 rounded-t" />
              <div className="w-3 h-10 bg-slate-200 rounded-t" />
              <div className="w-3 h-14 bg-blue-600 rounded-t animate-pulse" />
            </div>
            <div className="flex justify-between text-[8px] text-slate-600 font-bold uppercase mt-1">
              <span>ACoS: 14.5%</span>
              <span className="text-emerald-600">ROAS: 4.8x</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: '04',
      title: 'Measure & Analyze',
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      borderColor: 'border-orange-500',
      bulletBg: 'bg-orange-500/10',
      description: 'We track performance with advanced analytics and identify what’s working to maximize ROI.',
      bullets: [
        'Performance Monitoring',
        'Data & Analytics Tracking',
        'ROI & Conversion Analysis',
        'Insightful Reporting'
      ],
      mockup: (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-full aspect-[4/3] flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
            <span className="text-[9px] font-bold text-slate-900">Analytics Dashboard</span>
            <span className="text-[8px] text-emerald-600 font-extrabold uppercase bg-emerald-50 px-1 rounded">+38.5%</span>
          </div>
          <div className="flex-1 flex gap-2 items-center">
            {/* Linear trendline graph */}
            <svg className="w-full h-16 stroke-orange-500 stroke-2 fill-none" viewBox="0 0 100 50">
              <path d="M0,45 Q20,30 40,40 T80,10 T100,5" />
              <circle cx="100" cy="5" r="3" className="fill-orange-500" />
            </svg>
          </div>
          <div className="text-[8px] text-slate-600 font-semibold text-center mt-1">
            Real-Time Conversion Telemetry Active
          </div>
        </div>
      )
    },
    {
      num: '05',
      title: 'Optimize & Grow',
      color: 'bg-blue-600',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-600',
      bulletBg: 'bg-blue-600/10',
      description: 'We continuously optimize strategies, scale winning campaigns and drive long-term sustainable growth.',
      bullets: [
        'Continuous Optimization',
        'Campaign Scaling',
        'Profitability Improvement',
        'Long-Term Growth'
      ],
      mockup: (
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm w-full aspect-[4/3] flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-extrabold text-blue-600 uppercase bg-blue-50 px-1.5 py-0.5 rounded">Scale Phase</span>
            <TrendingUp className="h-4.5 w-4.5 text-blue-600 shrink-0" />
          </div>
          <div className="flex items-center gap-3 flex-1">
            {/* Rocket scale design */}
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
              <span className="text-xl">🚀</span>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <div className="h-1.5 w-full bg-slate-200 rounded" />
              <div className="h-1.5 w-3/4 bg-blue-600 rounded" />
              <div className="h-1.5 w-1/2 bg-blue-600 rounded" />
            </div>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-blue-600 w-5/6" />
          </div>
        </div>
      )
    }
  ];

  const brandValues = [
    {
      icon: Shield,
      title: 'Data-Driven Strategies',
      desc: 'Every decision backed by data and analytics.'
    },
    {
      icon: UserCheck,
      title: 'Dedicated Experts',
      desc: 'Experienced team managing your growth journey.'
    },
    {
      icon: Star,
      title: 'Multi-Platform Expertise',
      desc: 'Experts in all major marketplaces and advertising platforms.'
    },
    {
      icon: Award,
      title: 'Results Focused',
      desc: 'We measure success by your revenue growth.'
    },
    {
      icon: Users,
      title: 'End-to-End Support',
      desc: 'From onboarding to scaling, we\'ve got you covered.'
    }
  ];

  return (
    <section
      id="blueprint"
      className="relative pt-8 pb-20 md:pt-12 md:pb-24 overflow-hidden bg-white"
    >

      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[-10%] w-[550px] h-[550px] rounded-full glow-orb-blue pointer-events-none opacity-15" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="text-xs text-blue-600 font-extrabold tracking-widest uppercase bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full">
            THE SELLARO GROWTH ENGINE™
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight">
            How We Turn Ecommerce Stores <br />Into <span className="text-brand-gradient">Revenue Engines</span>
          </h2>
          <p className="text-slate-650 text-sm sm:text-base mt-4 leading-relaxed max-w-3xl mx-auto">
            Our proven 5-step growth framework helps brands launch, optimize, and scale across <span className="text-blue-600 font-semibold">Amz, Walmart, Flipkart, Etsy, eBay, Shopify</span> and more.
          </p>
        </div>

        {/* 5 Card Step Process Grid (Converting into perfect horizontal flow matching image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-20 relative">

          {/* Loop over process cards */}
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col bg-slate-50/50 border border-slate-200 hover:border-slate-300 hover:bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 group">

              {/* Dynamic Connecting Arrow indicators (Hidden on mobile screens) */}
              {idx < 4 && (
                <div className="hidden lg:block absolute top-8 left-[95%] w-[30%] h-px border-t border-dashed border-slate-300 z-20 pointer-events-none">
                  <span className="absolute top-[-4px] right-0 w-2 h-2 rounded-full bg-slate-300" />
                </div>
              )}

              {/* Top Row Number Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className={`w-8 h-8 ${step.color} text-white font-heading font-extrabold rounded-full flex items-center justify-center shadow-md`}>
                  {step.num}
                </span>
                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Stage {step.num}</span>
              </div>

              {/* Wireframe Mockup Area */}
              <div className="mb-6 flex items-center justify-center bg-slate-100 rounded-xl p-2.5 border border-slate-200/60 min-h-[140px]">
                {step.mockup}
              </div>

              {/* Content Description */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-550 text-xs leading-relaxed mb-6">{step.description}</p>
                </div>

                {/* Sub Bullet deliverables list */}
                <div className="space-y-2 border-t border-slate-200/80 pt-4">
                  {step.bullets.map((bullet, bidx) => (
                    <div key={bidx} className="flex items-start gap-2">
                      <span className={`p-0.5 rounded-full ${step.bulletBg} ${step.textColor} shrink-0 mt-0.5`}>
                        <Check className="h-3 w-3 stroke-[3px]" />
                      </span>
                      <span className="text-[11px] font-semibold text-slate-700 leading-tight">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* 5 Pillar Brand Highlights bottom row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-t border-slate-200/80 pt-12">
          {brandValues.map((val, idx) => {
            const ValueIcon = val.icon;
            return (
              <div key={idx} className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-xl transition duration-300">
                <div className="p-2.5 bg-orange-500/10 border border-orange-500/20 text-orange-600 rounded-xl shrink-0">
                  <ValueIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-xs font-bold text-slate-900 leading-none mb-1.5">{val.title}</p>
                  <p className="text-[10px] text-slate-500 leading-normal font-medium">{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Blueprint;
