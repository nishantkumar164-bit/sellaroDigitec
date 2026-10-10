import React, { useState } from 'react';
import { Sparkles, ArrowRight, DollarSign, TrendingUp, Percent, Coins, ShieldCheck, CheckCircle2, PiggyBank, Award, Layers, BarChart2, Users, CheckCircle } from 'lucide-react';
import Button from '../common/Button';

const ROICalculator = ({ onOpenForm, currency, onCurrencyToggle }) => {
  // Use state matching mockup fields
  const [salesINR, setSalesINR] = useState(1000000);
  const [salesUSD, setSalesUSD] = useState(15000);
  const [conversion, setConversion] = useState(2.5);
  const [adSpendINR, setAdSpendINR] = useState(200000);
  const [adSpendUSD, setAdSpendUSD] = useState(3000);
  const [skus, setSkus] = useState(1000);

  const sales = currency === 'INR' ? salesINR : salesUSD;
  const setSales = currency === 'INR' ? setSalesINR : setSalesUSD;
  const adSpend = currency === 'INR' ? adSpendINR : adSpendUSD;
  const setAdSpend = currency === 'INR' ? setAdSpendINR : setAdSpendUSD;

  const minSales = currency === 'INR' ? 100000 : 1000;
  const maxSales = currency === 'INR' ? 10000000 : 150000;
  const minAd = currency === 'INR' ? 10000 : 100;
  const maxAd = currency === 'INR' ? 500000 : 5000;

  const optimizedMonthly = sales * 1.85;
  const monthlyLift = optimizedMonthly - sales;
  const potentialRevenueIncrease = monthlyLift * 12; 
  const annualRevenueImpact = optimizedMonthly * 12;

  const formatCurrency = (val) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  const formatCr = (val) => {
    if (currency === 'INR') {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    return `$${(val / 1000000).toFixed(2)}M`;
  };

  return (
    <section id="roi-calculator" className="relative py-20 md:py-24 overflow-hidden bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] text-orange-500 font-extrabold tracking-widest uppercase bg-orange-50 px-4 py-1.5 rounded-full border border-orange-200 shadow-sm">
            INTERACTIVE GROWTH ESTIMATOR
          </span>
          <h2 className="font-heading text-4xl lg:text-5xl font-extrabold text-slate-900 mt-5 tracking-tight leading-tight">
            Discover Your Ecommerce <br/><span className="text-orange-500">Growth Potential.</span>
          </h2>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed max-w-xl mx-auto font-medium">
            See how much revenue, orders, and ad spend you could save by optimizing your listings, storefront, and advertising with Sellaro Digitec.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* LEFT PANEL */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 h-full flex flex-col">
              
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-blue-600 font-extrabold uppercase tracking-wider text-xs">
                  <Sparkles className="h-4 w-4" />
                  <span>Input Your Current Metrics</span>
                </div>
                <button
                  onClick={onCurrencyToggle}
                  className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-orange-50 px-3 py-1.5 rounded-md border border-orange-200 hover:bg-orange-100 transition shadow-sm"
                >
                  <Coins className="h-3.5 w-3.5 text-orange-500" />
                  <span>Currency: {currency}</span>
                </button>
              </div>

              {/* Slider 1: Monthly Sales Revenue */}
              <div className="mb-8 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <DollarSign className="h-4 w-4 text-blue-500" />
                    </div>
                    Monthly Sales Revenue
                  </label>
                  <span className="font-heading font-extrabold text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                    {formatCurrency(sales)}
                  </span>
                </div>
                <input
                  type="range"
                  min={minSales}
                  max={maxSales}
                  step={currency === 'INR' ? 100000 : 1000}
                  value={sales}
                  onChange={(e) => setSales(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500 my-3"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
                  <span>{currency === 'INR' ? '₹1L' : '$1K'}</span>
                  <span>{currency === 'INR' ? '₹10L' : '$10K'}</span>
                  <span>{currency === 'INR' ? '₹50L' : '$50K'}</span>
                  <span>{currency === 'INR' ? '₹1Cr+' : '$100K+'}</span>
                </div>
              </div>

              {/* Slider 2: Conversion Rate */}
              <div className="mb-8 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <div className="bg-orange-50 p-2 rounded-lg">
                      <Percent className="h-4 w-4 text-orange-500" />
                    </div>
                    Current Conversion Rate
                  </label>
                  <span className="font-heading font-extrabold text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                    {conversion}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="15"
                  step="0.5"
                  value={conversion}
                  onChange={(e) => setConversion(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500 my-3"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
                  <span>0.5% (Poor)</span>
                  <span>2.5% (Average)</span>
                  <span>5% (Good)</span>
                  <span>8% (Excellent)</span>
                  <span>12%+ (Leader)</span>
                </div>
              </div>

              {/* Slider 3: Ad Spend */}
              <div className="mb-8 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <div className="bg-emerald-50 p-2 rounded-lg">
                      <TrendingUp className="h-4 w-4 text-emerald-500" />
                    </div>
                    Monthly Advertising Spend
                  </label>
                  <span className="font-heading font-extrabold text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                    {formatCurrency(adSpend)}
                  </span>
                </div>
                <input
                  type="range"
                  min={minAd}
                  max={maxAd}
                  step={currency === 'INR' ? 10000 : 100}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500 my-3"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
                  <span>{currency === 'INR' ? '₹10K' : '$1K'}</span>
                  <span>{currency === 'INR' ? '₹50K' : '$5K'}</span>
                  <span>{currency === 'INR' ? '₹2L' : '$20K'}</span>
                  <span>{currency === 'INR' ? '₹5L+' : '$50K+'}</span>
                </div>
              </div>

              {/* Slider 4: SKUs */}
              <div className="mb-10 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-slate-800 flex items-center gap-2">
                    <div className="bg-purple-50 p-2 rounded-lg">
                      <Layers className="h-4 w-4 text-purple-500" />
                    </div>
                    Total Active SKUs / Listings
                  </label>
                  <span className="font-heading font-extrabold text-slate-900 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                    {skus.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="5000"
                  step="10"
                  value={skus}
                  onChange={(e) => setSkus(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-500 my-3"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-bold mt-1">
                  <span>100</span>
                  <span>500</span>
                  <span>1,000</span>
                  <span>5,000+</span>
                </div>
              </div>

              <div className="mt-auto pt-4 flex items-center justify-center gap-2 text-[11px] text-blue-600 font-bold bg-blue-50/50 py-3 rounded-lg border border-blue-100 shadow-sm">
                <ShieldCheck className="h-4 w-4" />
                Your data is safe and secure. We never store or share your information.
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 h-full flex flex-col">
              
              <div className="flex items-center gap-2 text-emerald-600 font-extrabold uppercase tracking-wider text-xs mb-6">
                <TrendingUp className="h-4 w-4" />
                <span>Your Growth Opportunity</span>
              </div>

              {/* Top 4 Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="border border-slate-100 rounded-xl p-4 text-center bg-white shadow-sm flex flex-col justify-between h-full">
                  <p className="text-[9px] font-bold text-slate-500 uppercase leading-tight mb-2">Potential<br/>Revenue Increase</p>
                  <p className="font-heading font-extrabold text-blue-500 text-lg sm:text-xl">{formatCurrency(potentialRevenueIncrease)}</p>
                  <p className="text-[10px] text-blue-500 font-bold mt-2 flex items-center justify-center gap-0.5"><TrendingUp className="w-3 h-3"/> 102% Lift</p>
                </div>
                <div className="border border-slate-100 rounded-xl p-4 text-center bg-white shadow-sm flex flex-col justify-between h-full">
                  <p className="text-[9px] font-bold text-slate-500 uppercase leading-tight mb-2">Additional<br/>Monthly Orders</p>
                  <p className="font-heading font-extrabold text-blue-500 text-lg sm:text-xl">+{Math.round(monthlyLift / (currency==='INR'? 2000 : 30))}</p>
                  <p className="text-[10px] text-blue-500 font-bold mt-2 flex items-center justify-center gap-0.5"><TrendingUp className="w-3 h-3"/> More Orders</p>
                </div>
                <div className="border border-slate-100 rounded-xl p-4 text-center bg-white shadow-sm flex flex-col justify-between h-full">
                  <p className="text-[9px] font-bold text-slate-500 uppercase leading-tight mb-2">Estimated ACOS<br/>Reduction</p>
                  <p className="font-heading font-extrabold text-blue-500 text-lg sm:text-xl">-15%</p>
                  <p className="text-[10px] text-blue-500 font-bold mt-2 flex items-center justify-center gap-0.5"><TrendingUp className="w-3 h-3"/> Lower ACOS</p>
                </div>
                <div className="border border-slate-100 rounded-xl p-4 text-center bg-white shadow-sm flex flex-col justify-between h-full">
                  <p className="text-[9px] font-bold text-slate-500 uppercase leading-tight mb-2">Annual Revenue<br/>Impact</p>
                  <p className="font-heading font-extrabold text-blue-500 text-lg sm:text-xl">{formatCr(annualRevenueImpact)}</p>
                  <p className="text-[10px] text-blue-500 font-bold mt-2 flex items-center justify-center gap-0.5"><TrendingUp className="w-3 h-3"/> Yearly Impact</p>
                </div>
              </div>

              {/* Chart & Waste Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 flex-1">
                
                {/* Bar Chart */}
                <div className="border border-slate-100 rounded-xl p-6 bg-white shadow-sm flex flex-col">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-4 text-center">Current VS Optimized Revenue</p>
                  <div className="flex justify-center items-center gap-4 text-[9px] font-bold text-slate-500 mb-6">
                    <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-slate-300"></div> Current Scenario</span>
                    <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-blue-500"></div> Optimized Scenario</span>
                  </div>
                  
                  {/* Visual Bar representation */}
                  <div className="relative h-40 flex items-end justify-center gap-8 border-b border-slate-200 pb-1 mt-auto">
                    
                    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[9px] font-bold text-slate-600">
                      <span>{currency==='INR'?'₹15L':'$15K'}</span>
                      <span>{currency==='INR'?'₹10L':'$10K'}</span>
                      <span>{currency==='INR'?'₹5L':'$5K'}</span>
                      <span>₹0</span>
                    </div>

                    <div className="absolute w-full border-t border-slate-100 border-dashed" style={{ bottom: '33%' }}></div>
                    <div className="absolute w-full border-t border-slate-100 border-dashed" style={{ bottom: '66%' }}></div>
                    <div className="absolute w-full border-t border-slate-100 border-dashed" style={{ bottom: '100%' }}></div>

                    <div className="flex flex-col items-center gap-1.5 w-24 relative z-10">
                      <span className="text-[10px] font-extrabold text-slate-800">{formatCurrency(sales)}</span>
                      <div className="w-full bg-slate-300 rounded-t-md" style={{ height: '66px' }}></div>
                      <span className="text-[8px] text-slate-500 font-bold mt-1 text-center leading-tight">Current Monthly<br/>Revenue</span>
                    </div>

                    <div className="flex flex-col items-center gap-1.5 w-24 relative z-10">
                      <span className="text-[10px] font-extrabold text-slate-800">{formatCurrency(optimizedMonthly)}</span>
                      <div className="w-full bg-blue-500 rounded-t-md shadow-md" style={{ height: '110px' }}></div>
                      <span className="text-[8px] text-slate-500 font-bold mt-1 text-center leading-tight">Optimized Monthly<br/>Revenue</span>
                    </div>
                  </div>
                </div>

                {/* Ad Waste */}
                <div className="border border-slate-100 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-white shadow-sm">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-4">Advertising Waste Recovered</p>
                  <p className="font-heading font-extrabold text-blue-500 text-3xl mb-2">{formatCurrency(adSpend * 0.4)} <span className="text-xl">/mo</span></p>
                  <p className="text-[10px] font-semibold text-slate-500 mb-6">By eliminating wasted ad spend</p>
                  <div className="bg-emerald-50 p-5 rounded-full border border-emerald-100 shadow-sm">
                    <PiggyBank className="h-10 w-10 text-emerald-500" />
                  </div>
                </div>

              </div>

              {/* Bottom Drivers */}
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <p className="text-[10px] font-extrabold text-slate-600 uppercase mb-4">What's driving this estimate?</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-8">
                  {['Listing SEO & Keyword Targeting', 'A+ Content & Better Conversion', 'PPC Optimization & Bid Management', 'Catalog & Data Quality Improvements', 'Storefront & UX Enhancements'].map(item => (
                    <div key={item} className="flex items-center gap-2 text-[10px] font-bold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      {item}
                    </div>
                  ))}
                </div>

                <Button variant="primary" className="w-full shadow-lg hover:shadow-xl text-lg py-4" onClick={onOpenForm}>
                  Get My Free Growth Audit <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <div className="flex items-center justify-center gap-3 mt-5 text-[11px] font-bold text-slate-600">
                  <div className="flex -space-x-3">
                    <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=1" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=2" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=3" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/100?img=4" alt="" />
                  </div>
                  Join 100+ brands already growing with Sellaro Digitec.
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 5 Pillar Brand Highlights bottom row */}
        <div className="flex flex-wrap justify-between items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 border-r border-slate-100 pr-4">
            <div className="p-3 bg-blue-50 text-blue-500 rounded-full"><Award className="h-6 w-6" /></div>
            <div><p className="font-heading font-extrabold text-base text-slate-900">100+</p><p className="text-[10px] font-bold text-slate-500 uppercase">Brands Managed</p></div>
          </div>
          <div className="flex items-center gap-3 border-r border-slate-100 pr-4">
            <div className="p-3 bg-orange-50 text-orange-500 rounded-full"><Layers className="h-6 w-6" /></div>
            <div><p className="font-heading font-extrabold text-base text-slate-900">50,000+</p><p className="text-[10px] font-bold text-slate-500 uppercase">Listings Optimized</p></div>
          </div>
          <div className="flex items-center gap-3 border-r border-slate-100 pr-4">
            <div className="p-3 bg-emerald-50 text-emerald-500 rounded-full"><BarChart2 className="h-6 w-6" /></div>
            <div><p className="font-heading font-extrabold text-base text-slate-900">$10M+</p><p className="text-[10px] font-bold text-slate-500 uppercase">Revenue Influenced</p></div>
          </div>
          <div className="flex items-center gap-3 border-r border-slate-100 pr-4">
            <div className="p-3 bg-purple-50 text-purple-500 rounded-full"><Users className="h-6 w-6" /></div>
            <div><p className="font-heading font-extrabold text-base text-slate-900">95%</p><p className="text-[10px] font-bold text-slate-500 uppercase">Client Retention Rate</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-500 rounded-full"><CheckCircle className="h-6 w-6" /></div>
            <div><p className="font-heading font-extrabold text-base text-slate-900">500+</p><p className="text-[10px] font-bold text-slate-500 uppercase">Projects Delivered</p></div>
          </div>
        </div>
        
        <p className="text-center text-[11px] font-bold text-slate-500 mt-6 flex items-center justify-center gap-1.5">
          <ShieldCheck className="h-4 w-4" />
          Estimates are benchmarked from real client data across top marketplaces and D2C brands.
        </p>

      </div>
    </section>
  );
};

export default ROICalculator;
