import React, { useState } from 'react';
import { Send, CheckCircle2, LoaderCircle } from 'lucide-react';
import Button from '../common/Button';
import Card from '../common/Card';

const trackMetaLead = (contentName) => {
  if (
    typeof window !== 'undefined' &&
    typeof window.fbq === 'function'
  ) {
    window.fbq('track', 'Lead', {
      content_name: contentName,
    });
  }
};

const ContactForm = () => {
  console.log("API URL =", import.meta.env.VITE_CONTACT_API);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    marketplace: 'Amz India',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      services: checked
        ? [...prev.services, value]
        : prev.services.filter((service) => service !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMessage('Please enter your name and phone number to submit your enquiry.');
      setStatus('error');
      return;
    }

    setErrorMessage('');

    try {
      if (!API_URL || API_URL.includes('undefined')) {
        throw new Error('The contact form is not configured correctly. Please contact us directly.');
      }

      setStatus('submitting');

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company_name: formData.company.trim(),
        services: formData.services,
        target_platform: formData.marketplace,
        description: formData.message.trim(),
        source: 'Contact Page'
      };

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // Lambda's response body should contain { success: true } only after S3 saves the lead.
      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error('The server returned an invalid response. Please try again.');
      }

      if (!response.ok || result?.success !== true) {
        throw new Error(
          result?.message || result?.error ||
          `We could not confirm that your enquiry was saved (HTTP ${response.status}). Please try again.`
        );
      }

      // Show success only when both HTTP status and Lambda's success flag are valid.
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        marketplace: 'Amz India',
        message: ''
      });
      trackMetaLead('Contact Page Form');
      setStatus('success');
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setErrorMessage(
        error?.message || 'Something went wrong while submitting your enquiry. Please try again.'
      );
      setStatus('error');
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
              Tell us what your business needs. Our team can help with marketplace management, advertising, ecommerce websites, SEO, and creative solutions.
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
                      <label htmlFor="contact-email" className="text-xs text-slate-500 font-bold uppercase">Corporate Email <span className="normal-case font-normal"></span></label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
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
                        <option value="Amz India">Amazon India</option>
                        <option value="Amz Global">Amazon Global (US/CA/UK)</option>
                        <option value="Flipkart">Flipkart</option>
                        <option value="Ebay">eBay</option>
                        <option value="Etsy">Etsy</option>
                        <option value="Shopify D2C">Shopify / Custom D2C</option>
                        <option value="Other">Other / Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-phone" className="text-xs text-slate-500 font-bold uppercase">
                        Phone / WhatsApp <span className="text-red-500 normal-case">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="bg-white border border-slate-200 text-slate-800 placeholder-slate-400 rounded-lg py-3.5 px-4 text-sm focus:outline-none focus:border-primary-500 transition shadow-sm"
                      />
                    </div>

                    
                  </div>

                  <fieldset className="flex flex-col gap-3">
                    <legend className="text-xs text-slate-500 font-bold uppercase">
                      Which services do you need? <span className="text-slate-400 normal-case">(select all that apply)</span>
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        'Marketplace Account Management',
                        'Marketplace Advertising & PPC',
                        'Social Media Ads',
                        'Ecommerce Website Development',
                        'SEO & Digital Marketing',
                        'Graphics & Video Solutions',
                        'Other / Not Sure Yet'
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex items-start gap-2.5 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 cursor-pointer hover:border-primary-400 transition"
                        >
                          <input
                            type="checkbox"
                            name="services"
                            value={service}
                            checked={formData.services.includes(service)}
                            onChange={handleServiceChange}
                            className="mt-0.5 h-4 w-4 accent-blue-600"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

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
                <div className="flex flex-col items-center justify-center text-center py-14" role="status" aria-live="polite">
                  <LoaderCircle className="h-12 w-12 text-primary-600 animate-spin mb-5" />
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">
                    Submitting Your Enquiry
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                    Please wait while we securely save your enquiry. This may take a few seconds.
                  </p>
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

                  {/* <Button variant="primary" size="md" onClick={() => setStatus('idle')}>
                    Back to Form
                  </Button> */}
                </div>
              )}
              {status === "error" && (
                <div className="text-center py-10">
                  <h3 className="text-xl font-bold text-red-600">
                    Submission Failed
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {errorMessage || 'We could not confirm that your enquiry was saved. Please try again.'}
                  </p>

                  <Button
                    variant="primary"
                    className="mt-6"
                    onClick={() => {
                      setErrorMessage('');
                      setStatus('idle');
                    }}
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
