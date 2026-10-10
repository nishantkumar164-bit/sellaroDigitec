import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const defaultFaqs = [
    {
        question: 'How quickly do you respond to inquiries?',
        answer:
            'Most inquiries receive a response within 24 business hours. Urgent requests are prioritized whenever possible.',
    },
    {
        question: 'Is the marketplace audit really free?',
        answer:
            'Yes. Our marketplace audit is completely complimentary and includes actionable recommendations to improve performance.',
    },
    {
        question: 'Do you work with new sellers or only established brands?',
        answer:
            'We work with both. Whether you are launching your first product or scaling an established business, we can help.',
    },
    {
        question: 'How do you ensure account & data security?',
        answer:
            'We follow secure operational practices, controlled access management, and confidentiality agreements to protect client data.',
    },
    {
        question: 'Which marketplaces do you support?',
        answer:
            'Amz, Walmart, Shopify, Flipkart, Meesho, Etsy, eBay, WooCommerce, and other major marketplaces.',
    },
    {
        question: 'What makes Sellaro Digitec different?',
        answer:
            'We combine marketplace operations, PPC advertising, catalog optimization, growth consulting, and development services under one team.',
    },
];

const ContactFAQ = ({
    badge = 'FAQ',
    title = 'Frequently Asked Questions',
    subtitle = 'Everything you need to know before scheduling your growth consultation.',
    faqs = defaultFaqs,
    accentColor = "orange"
}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const colorMap = {
        orange: {
            badgeBg: "bg-orange-50",
            badgeBorder: "border-orange-100",
            badgeText: "text-orange-500",
            hoverBorder: "hover:border-orange-200",
            iconActive: "text-orange-500"
        },

        emerald: {
            badgeBg: "bg-emerald-50",
            badgeBorder: "border-emerald-100",
            badgeText: "text-emerald-600",
            hoverBorder: "hover:border-emerald-200",
            iconActive: "text-emerald-600"
        },

        blue: {
            badgeBg: "bg-blue-50",
            badgeBorder: "border-blue-100",
            badgeText: "text-blue-600",
            hoverBorder: "hover:border-blue-200",
            iconActive: "text-blue-600"
        },

        indigo: {
            badgeBg: "bg-indigo-50",
            badgeBorder: "border-indigo-100",
            badgeText: "text-indigo-600",
            hoverBorder: "hover:border-indigo-200",
            iconActive: "text-indigo-600"
        },

        purple: {
            badgeBg: "bg-purple-50",
            badgeBorder: "border-purple-100",
            badgeText: "text-purple-600",
            hoverBorder: "hover:border-purple-200",
            iconActive: "text-purple-600"
        },

        rose: {
            badgeBg: "bg-rose-50",
            badgeBorder: "border-rose-100",
            badgeText: "text-rose-600",
            hoverBorder: "hover:border-rose-200",
            iconActive: "text-rose-600"
        }
    };

    const theme = colorMap[accentColor] || colorMap.orange;


    return (
        <section className="py-18">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">

                    <span
                        className={`
inline-flex
px-4
py-2
rounded-full
border
text-xs
font-bold
uppercase
tracking-[0.25em]
${theme.badgeBg}
${theme.badgeBorder}
${theme.badgeText}
`}
                    >
                        {badge}
                    </span>

                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
                        {title}
                    </h2>

                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                </div>

                {/* FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-4">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="
                group
                bg-white/80
                backdrop-blur-sm
                border
                border-slate-200
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                ${theme.hoverBorder}
                transition-all
                duration-300
              "
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="
                  w-full
                  px-6
                  py-5
                  flex
                  items-center
                  justify-between
                  text-left
                "
                            >
                                <span className="font-semibold text-slate-900 pr-4">
                                    {faq.question}
                                </span>

                                <ChevronDown
                                    className={`
                    flex-shrink-0
                    transition-all
                    duration-300
                    ${openIndex === index
                                            ? `rotate-180 ${theme.iconActive}`
                                            : 'text-slate-500'
                                        }
                  `}
                                />
                            </button>

                            <div
                                className={`
                  overflow-hidden
                  transition-all
                  duration-300
                  ${openIndex === index
                                        ? 'max-h-40'
                                        : 'max-h-0'
                                    }
                `}
                            >
                                <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ContactFAQ;