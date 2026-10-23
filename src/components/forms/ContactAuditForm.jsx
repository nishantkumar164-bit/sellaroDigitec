import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const ContactAuditForm = () => {
    const API_URL = import.meta.env.VITE_CONTACT_API;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        marketplace: 'Amz India',
        message: '',
    });

    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim() || !formData.email.trim()) {
            return;
        }

        if (!API_URL) {
            setErrorMessage('The enquiry service is temporarily unavailable. Please try again later.');
            setStatus('error');
            return;
        }

        try {
            setStatus('submitting');
            setErrorMessage('');

            const payload = {
                name: formData.name.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                company_name: formData.company.trim(),
                target_platform: formData.marketplace,
                monthly_sales: 'Not Provided',
                description: formData.message.trim(),
                source: 'Website Glass Modal',
            };

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const responseText = await response.text();

            let result;
            try {
                result = JSON.parse(responseText);
            } catch {
                throw new Error('The server returned an invalid response. Please try again.');
            }

            if (!response.ok || result.success !== true) {
                throw new Error(
                    result.message ||
                    result.error ||
                    'Unable to save your enquiry. Please try again.'
                );
            }

            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                marketplace: 'Amz India',
                message: '',
            });

            setStatus('success');
        } catch (error) {
            console.error('Contact audit submission failed:', error);
            setErrorMessage(
                error?.message || 'Failed to submit your request. Please try again.'
            );
            setStatus('error');
        }
    };

    return (
        <div className="w-full">
            {(status === 'idle' || status === 'submitting' || status === 'error') && (
                <>
                    <div className="mb-6">
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Fill out the form below and our ecommerce growth specialists
                            will review your business and provide actionable
                            recommendations for scaling across marketplaces.
                        </p>
                    </div>

                    {status === 'error' && (
                        <div
                            role="alert"
                            className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                        >
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label
                                    htmlFor="audit-name"
                                    className="block text-xs font-bold uppercase text-slate-500 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    id="audit-name"
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="audit-email"
                                    className="block text-xs font-bold uppercase text-slate-500 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="audit-email"
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@company.com"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="audit-company"
                                className="block text-xs font-bold uppercase text-slate-500 mb-2"
                            >
                                Company Name
                            </label>
                            <input
                                id="audit-company"
                                type="text"
                                name="company"
                                autoComplete="organization"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Your Brand Name"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="audit-phone"
                                className="block text-xs font-bold uppercase text-slate-500 mb-2"
                            >
                                Phone / WhatsApp <span className="font-normal normal-case">(optional)</span>
                            </label>
                            <input
                                id="audit-phone"
                                type="tel"
                                name="phone"
                                autoComplete="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="+91 98765 43210"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="audit-marketplace"
                                className="block text-xs font-bold uppercase text-slate-500 mb-2"
                            >
                                Marketplace / Service
                            </label>
                            <select
                                id="audit-marketplace"
                                name="marketplace"
                                value={formData.marketplace}
                                onChange={handleInputChange}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                            >
                                <option value="Amz India">Amazon India</option>
                                <option value="Amazon Global">Amazon Global</option>
                                <option value="Flipkart">Flipkart</option>
                                <option value="Shopify">Shopify</option>
                                <option value="Walmart">Walmart</option>
                                <option value="Google Ads">Google Ads</option>
                                <option value="Meta Ads">Meta Ads</option>
                                <option value="Multi Marketplace Growth">Multi Marketplace Growth</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="audit-message"
                                className="block text-xs font-bold uppercase text-slate-500 mb-2"
                            >
                                Tell Us About Your Business
                            </label>
                            <textarea
                                id="audit-message"
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Describe your business, marketplace challenges, advertising goals, or growth objectives..."
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm resize-none focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        <Button
                            variant="accent"
                            size="lg"
                            type="submit"
                            className="w-full"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting'
                                ? 'Submitting...'
                                : 'Get Free Ecommerce Growth Audit'}
                            <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </form>
                </>
            )}

            {status === 'success' && (
                <div className="py-10 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-5">
                        <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Request Submitted Successfully
                    </h3>

                    <p className="text-slate-600 max-w-md mx-auto">
                        Thank you for contacting Sellaro Digitec.
                        Our ecommerce growth specialists have received your request
                        and will get back to you shortly.
                    </p>

                    <Button
                        variant="primary"
                        className="mt-6"
                        onClick={() => {
                            setErrorMessage('');
                            setStatus('idle');
                        }}
                    >
                        Submit Another Request
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ContactAuditForm;
