import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const ContactAuditForm = () => {
    const API_URL = import.meta.env.VITE_CONTACT_API;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        marketplace: 'Amz India',
        message: '',
    });

    const [status, setStatus] = useState('idle');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email) {
            return;
        }

        try {
            setStatus('submitting');

            const payload = {
                name: formData.name,
                email: formData.email,
                company_name: formData.company,
                target_platform: formData.marketplace,
                monthly_sales: 'Not Provided',
                description: formData.message,
                source: 'Website Glass Modal'
            };

            console.log('API URL:', API_URL);
            console.log('Payload:', payload);

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const responseText = await response.text();

            console.log('Status:', response.status);
            console.log('Response:', responseText);

            if (!response.ok) {
                throw new Error(
                    `HTTP ${response.status}: ${responseText}`
                );
            }

            setStatus('success');

            setFormData({
                name: '',
                email: '',
                company: '',
                marketplace: 'Amazon India',
                message: '',
            });

        } catch (error) {
            console.error('Submission Error:', error);

            alert(
                error?.message ||
                'Failed to submit request. Please try again.'
            );

            setStatus('idle');
        }
    };

    return (
        <div className="w-full">

            {status === 'idle' && (
                <>
                    <div className="mb-6">
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Fill out the form below and our ecommerce growth specialists
                            will review your business and provide actionable
                            recommendations for scaling across marketplaces.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div>
                                <label htmlFor="audit-name" className="block text-xs font-bold uppercase text-slate-500 mb-2">Name</label>

                                <input
                                    id="audit-name"
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="audit-email" className="block text-xs font-bold uppercase text-slate-500 mb-2">Email</label>

                                <input
                                    id="audit-email"
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@company.com"
                                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                                />
                            </div>

                        </div>

                        <div>
                            <label htmlFor="audit-company" className="block text-xs font-bold uppercase text-slate-500 mb-2">Company Name</label>

                            <input
                                    id="audit-company"
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="Your Brand Name"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="audit-marketplace" className="block text-xs font-bold uppercase text-slate-500 mb-2">Marketplace / Service</label>

                            <select
                                    id="audit-marketplace"
                                name="marketplace"
                                value={formData.marketplace}
                                onChange={handleInputChange}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:outline-none focus:border-orange-500"
                            >
                                <option>Amazon India</option>
                                <option>Amazon Global</option>
                                <option>Flipkart</option>
                                <option>Shopify</option>
                                <option>Walmart</option>
                                <option>Google Ads</option>
                                <option>Meta Ads</option>
                                <option>Multi Marketplace Growth</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="audit-message" className="block text-xs font-bold uppercase text-slate-500 mb-2">Tell Us About Your Business</label>

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
                        onClick={() => setStatus('idle')}
                    >
                        Submit Another Request
                    </Button>

                </div>
            )}

        </div>
    );
};

export default ContactAuditForm;