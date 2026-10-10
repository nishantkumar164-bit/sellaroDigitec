import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = ({ faqs = [] }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div
                    key={index}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white"
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-5 text-left"
                    >
                        <span className="font-semibold text-slate-900">
                            {faq.question}
                        </span>

                        <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    {openIndex === index && (
                        <div className="px-5 pb-5 text-slate-600">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;