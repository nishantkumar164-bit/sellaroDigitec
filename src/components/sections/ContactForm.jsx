import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Database, Mail, TerminalSquare } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';

const ContactForm = () => {
  console.log("API URL =", import.meta.env.VITE_CONTACT_API);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    marketplace: 'Amz India',
    spend: '₹1,00,000 - ₹5,00,000',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      return;
    }

    try {
      setStatus("submitting");

      const payload = {
        name: formData.name,
        email: formData.email,
        company_name: formData.company,
        target_platform: formData.marketplace,
        monthly_sales: formData.spend,
        description: formData.message,
        source: "Contact Page"
      };

      console.log("API URL:", API_URL);
      console.log("Payload:", payload);
      if (!API_URL || API_URL.includes("undefined")) {
  throw new Error("Contact API URL is missing from the production build.");
}

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      console.log("Status:", response.status);

      const responseText = await response.text();
      console.log("Response:", responseText);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${responseText}`);
      }

      setFormData({
        name: "",
        email: "",
        company: "",
        marketplace: "Amz India",
        spend: "₹1,00,000 - ₹5,00,000",
        message: ""
      });

      setStatus("success");

    } catch (error) {
      console.error("FULL ERROR:", error);
      setStatus("error");
    }
  };
  const API_URL = import.meta.env.VITE_CONTACT_API;


  return (
    <section id="contact" className="relative pt-20 md:pt-24 pb-4 md:py-24 pb-12 overflow-hidden bg-blueprint-grid border-t border-slate-200/80">

      {/* Background radial glows */}
      <div className="absolute top-[20%] right-[-15%] w-[600px] h-[600px] rounded-full glow-orb-blue pointer-events-none opacity-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full glow-orb-gold pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Copy Area (Left Column) */}
          <div className="lg:col-span-5 text-left">
            <span className="text-xs text-primary-500 font-extrabold tracking-widest uppercase bg-primary-500/10 border border-primary-500/20 px-3 py-1.5 rounded-full">
              SECURE STRATEGY BRIEFING
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight leading-tight mb-6">
              Ready to <span className="text-brand-gradient">Grow Across </span>Amz, Shopify & Global Marketplaces?
            </h2>
            <p className="text-slate-650 text-sm sm:text-base leading-relaxed mb-8">
              Book a free ecommerce growth audit with our marketplace specialists. We'll analyze your listings, advertising performance, storefront experience, and growth opportunities across Amz, Walmart, Flipkart, Etsy, eBay, Shopify, and more.
            </p>

            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  ✓
                </div>
                <span className="font-medium text-slate-700">
                  Free Marketplace Audit
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  ✓
                </div>
                <span className="font-medium text-slate-700">
                  Amz SPN Verified Partner
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  ✓
                </div>
                <span className="font-medium text-slate-700">
                  Dedicated Growth Consultant
                </span>
              </div>

            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex items-center gap-4 mb-6">

              <div className="flex -space-x-2">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt=""
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt=""
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://i.pravatar.cc/40?img=3"
                  alt=""
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  Trusted by 500+ Brands
                </p>
                <p className="text-sm text-slate-500">
                  4.9/5 Average Client Rating
                </p>
              </div>

            </div>
          </div>

          {/* Form / Simulated Terminal (Right Column) */}
          <div className="lg:col-span-7">
            <Card glowColor="blue" interactive={false} className="p-8">

              {status === 'idle' && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs text-slate-500 font-bold uppercase">Name / Contact</label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-white border border-slate-200 text-slate-800 placeholder-slate-400 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-primary-500 transition shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs text-slate-500 font-bold uppercase">Corporate Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="j.doe@company.com"
                        className="bg-white border border-slate-200 text-slate-800 placeholder-slate-400 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-primary-500 transition shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label htmlFor="contact-company" className="text-xs text-slate-500 font-bold uppercase">Company Name</label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="D2C Brand Label"
                        className="bg-white border border-slate-200 text-slate-800 placeholder-slate-400 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-primary-500 transition shadow-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-marketplace" className="text-xs text-slate-500 font-bold uppercase">Target Platform</label>
                      <select
                        id="contact-marketplace"
                        name="marketplace"
                        value={formData.marketplace}
                        onChange={handleInputChange}
                        className="bg-white border border-slate-200 text-slate-800 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-primary-500 transition shadow-sm"
                      >
                        <option value="Amz India">Amz India (IN)</option>
                        <option value="Amz Global">Amz Global (US/CA/UK)</option>
                        <option value="Flipkart">Flipkart Storefront</option>
                        <option value="Shopify D2C">Shopify / Custom D2C</option>
                        <option value="Multi-Channel">Multi-Channel Scaling</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-sales" className="text-xs text-slate-500 font-bold uppercase">Current Monthly Store Sales</label>
                    <select
                      id="contact-sales"
                      name="spend"
                      value={formData.spend}
                      onChange={handleInputChange}
                      className="bg-white border border-slate-200 text-slate-800 rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-primary-500 transition shadow-sm"
                    >
                      <option value="< ₹1,00,000">Less than ₹1,00,000 (or $1,500) / mo</option>
                      <option value="₹1,00,000 - ₹5,00,000">₹1,00,000 - ₹5,00,000 / mo</option>
                      <option value="₹5,00,000 - ₹20,00,000">₹5,00,000 - ₹20,05,000 / mo</option>
                      <option value="₹20,00,000+">₹20,00,000+ (or $25,000+) / mo</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs text-slate-500 font-bold uppercase">Scope & Growth Challenges</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your account scaling or listing challenges..."
                      className="bg-white border border-slate-200 text-slate-800 placeholder-slate-400 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-primary-500 transition resize-none shadow-sm"
                    />
                  </div>

                  <Button variant="accent" size="lg" type="submit" className="w-full mt-2">
                    Submit Audit Request
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}

              {status === 'submitting' && (
                <div className="flex flex-col gap-6 py-6 justify-center">
                  <div className="flex items-center gap-3 font-heading text-lg font-bold text-slate-900 mb-2 uppercase tracking-wide">
                    <TerminalSquare className="h-6 w-6 text-primary-600 animate-pulse" />
                    <span>SP-API AUDIT PROCESS LOGS</span>
                  </div>

                  {/* Simulated console logs */}
                  <div className="bg-black/60 rounded-xl border border-slate-900 p-5 font-mono text-[11px] leading-relaxed text-slate-400 flex flex-col gap-2 min-h-60 overflow-y-auto custom-scrollbar shadow-inner">
                    {logs.map((log, idx) => (
                      <p
                        key={idx}
                        className={
                          log.startsWith('>> [')
                            ? 'text-accent-500'
                            : log.startsWith('>>')
                              ? 'text-primary-400 animate-pulse'
                              : 'text-slate-500'
                        }
                      >
                        {log}
                      </p>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 justify-center text-xs text-slate-650 font-semibold">
                    <div className="w-3 h-3 rounded-full bg-accent-600 animate-ping" />
                    <span>Executing serverless catalog scanning rules...</span>
                  </div>
                </div>
              )}

              {status === 'success' && (
                <div className="flex flex-col items-center justify-center text-center py-10">
                  <div className="bg-accent-500/10 p-5 rounded-full border border-accent-500/20 text-accent-500 mb-6 animate-bounce">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>

                  <h3 className="font-heading text-2xl font-extrabold text-slate-900 tracking-wide mb-3">
                    Request Submitted Successfully
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-8">
                    Thank you for contacting Sellaro Digitec. Our marketplace growth team has received your request and will review your requirements shortly.
                  </p>

                  <Button variant="primary" size="md" onClick={() => setStatus('idle')}>
                    Back to Form
                  </Button>
                </div>
              )}
              {status === "error" && (
                <div className="text-center py-10">
                  <h3 className="text-xl font-bold text-red-600">
                    Submission Failed
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Something went wrong while submitting your request.
                    Please try again.
                  </p>

                  <Button
                    variant="primary"
                    className="mt-6"
                    onClick={() => setStatus("idle")}
                  >
                    Try Again
                  </Button>
                </div>
              )}

            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;
