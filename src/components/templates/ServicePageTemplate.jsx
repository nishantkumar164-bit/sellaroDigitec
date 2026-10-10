// src/components/templates/ServicePageTemplate.jsx

import React from 'react';
import {
    ShieldCheck,
    Users,
    TrendingUp,
    Award
} from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';
import MarketplaceMarquee from '../common/MarketplaceMarquee';
import ContactFAQ from '../sections/ContactFAQ';
import ContactCTA from '../sections/ContactCTA';





const ServicePageTemplate = ({
    onOpenForm,
    badge,
    title,
    highlight,
    description,
    heroImage,
    trustItems,
    marketplaces,
    growthMetric,
    listingMetric,
    retentionMetric,
    marketplaceBadge,
    marketplaceTitle,
    marketplaceDescription,
    marketplaceImage,
    marketplacePoints,
    features,
    whyChooseUs,
    faqs
}) => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                {/* Overlay */}

                <div className="absolute inset-0 bg-white/90" />
                <div
                    className="
    absolute
    top-10
    right-20
    w-[500px]
    h-[500px]
    bg-orange-400
    rounded-full
    blur-[140px]
    opacity-15
  "
                />

                <div
                    className="
    absolute
    bottom-0
    left-20
    w-[450px]
    h-[450px]
    bg-blue-400
    rounded-full
    blur-[140px]
    opacity-15
  "
                />

                {/* Grid Background */}

                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgba(148,163,184,.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.15) 1px, transparent 1px)',
                        backgroundSize: '48px 48px'
                    }}
                />

                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

                        {/* LEFT SIDE */}

                        <div>

                            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                                {badge}
                            </span>

                            <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black text-slate-900">

                                {title}

                                <span className="block text-orange-500">
                                    {highlight}
                                </span>

                            </h1>

                            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                                {description}
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">

                                <Button onClick={onOpenForm}>
                                    Get Free Audit
                                </Button>

                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        document
                                            .getElementById('what-we-offer')
                                            ?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                >
                                    Explore Services
                                </Button>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">

                                {trustItems?.slice(0, 3).map((item, idx) => {

                                    const Icon = item.icon;

                                    return (

                                        <div
                                            key={idx}
                                            className="
                    bg-white
                    border
                    border-slate-200
                    shadow-md
                    hover:shadow-lg
                    hover:border-orange-200
                    transition-all
duration-300
                    px-3
                    py-2
                    rounded-xl
                    flex
                    items-center
                    gap-2
                "
                                        >

                                            <Icon className="w-5 h-5 text-orange-500" />

                                            <span className="font-medium text-slate-700">
                                                {item.title}
                                            </span>

                                        </div>

                                    );
                                })}

                            </div>

                        </div>

                        {/* RIGHT SIDE */}

                        <div className="relative hidden lg:block">

                            <img
                                src={heroImage}
                                alt={title}
                                className="
                    rounded-3xl
                    shadow-2xl
                    border
                    border-slate-200
                    w-full
                "
                            />

                            {/* Floating Card */}

                            <div
                                className="
                    absolute
                    -bottom-6
                    -left-6
                    bg-white
                    rounded-2xl
                    shadow-xl
                    p-6
                    border
                    border-slate-100
                "
                            >

                                <p className="text-slate-500 text-sm">
                                    Revenue Growth
                                </p>

                                <h3 className="text-3xl font-black text-green-500">
                                    {growthMetric}
                                </h3>

                            </div>

                            <div
                                className="
                    absolute
                    -top-6
                    -right-6
                    bg-white
                    rounded-2xl
                    shadow-xl
                    p-6
                    border
                    border-slate-100
                "
                            >

                                <p className="text-slate-500 text-sm">
                                    Listings Managed
                                </p>

                                <h3 className="text-3xl font-black text-orange-500">
                                    {listingMetric}
                                </h3>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* Logo moving Effect*/}
            <MarketplaceMarquee marketplaces={marketplaces} />
            {/* What We Offer */}
            <section
                id="what-we-offer"
                className="py-20"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16">
                        What We Offer
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {features?.map((feature, idx) => {

                            const Icon = feature.icon;

                            return (
                                <Card
                                    className="
    group
    p-8
    text-center
    transition-all
    duration-500
    hover:-translate-y-2
    hover:shadow-xl
    hover:shadow-orange-100
    hover:border-orange-200
  "
                                >

                                    <div className="flex justify-center mb-5">

                                        <div className="
          w-14 h-14
          rounded-xl
          bg-orange-100
          flex items-center
          justify-center
        ">
                                            <Icon className="w-7 h-7 text-orange-500" />
                                        </div>

                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                                        {feature.name}
                                    </h3>

                                    <p className="text-slate-600">
                                        {feature.desc}
                                    </p><div
                                        className="
    mt-5
    h-1
    w-0
    bg-gradient-to-r
    from-orange-400
    to-orange-600
    rounded-full
    group-hover:w-16
    transition-all
    duration-500
  "
                                    />


                                </Card>
                            );
                        })}

                    </div>

                </div>

            </section>
            {/* Marketplace Expertise */}

            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Image */}

                        <div>
                            <img
                                src={marketplaceImage}
                                alt="Seller Dashboard"
                                className="
            w-full
            rounded-3xl
            shadow-2xl
            border
            border-slate-200
          "
                            />
                        </div>

                        {/* Content */}

                        <div>

                            <span className="
          inline-flex
          px-4 py-2
          rounded-full
          bg-orange-50
          text-orange-600
          font-semibold
          text-sm
        ">
                                {marketplaceBadge}
                            </span>

                            <h2 className="
          mt-6
          text-4xl
          font-black
          text-slate-900
        ">
                                {marketplaceTitle}
                            </h2>

                            <p className="
          mt-6
          text-lg
          text-slate-600
          leading-relaxed
        ">
                                {marketplaceDescription}
                            </p>

                            <div className="mt-8 space-y-4">

                                {marketplacePoints?.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="
                w-6 h-6
                rounded-full
                bg-orange-100
                flex items-center justify-center
                text-orange-500
                text-sm
              ">
                                            ✓
                                        </div>

                                        <span className="text-slate-700 font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* WHY CHOOSE US */}
            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-16">
                        Why Choose Sellaro Digitec
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {whyChooseUs?.map((item, idx) => {

                            const Icon = item.icon;

                            return (
                                <Card
                                    key={idx}
                                    className="
  group
  p-8
  transition-all
  duration-500
  hover:-translate-y-2
  hover:shadow-xl
  hover:shadow-orange-100
  hover:border-orange-200
"
                                    glowColor="orange"
                                >

                                    <div className="mb-5">

                                        <div
                                            className="
                                    w-14
                                    h-14
                                    rounded-xl
                                    bg-orange-100
                                    flex
                                    items-center
                                    justify-center
                                "
                                        >
                                            <Icon className="w-7 h-7 text-orange-500" />
                                        </div>

                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                    <div
                                        className="
    mt-5
    h-1
    w-0
    bg-gradient-to-r
    from-orange-400
    to-orange-600
    rounded-full
    group-hover:w-16
    transition-all
    duration-500
  "
                                    />

                                </Card>
                            );
                        })}

                    </div>

                </div>

            </section>
            {/* FAQ */}
            <ContactFAQ
                badge="SERVICE FAQ"
                title={`${title} FAQs`}
                subtitle={`Common questions about our ${title.toLowerCase()} services.`}
                faqs={faqs}
            />

            <ContactCTA
                badge="Ready To Scale?"
                title="Let's Grow Your"
                highlightedText="Business Faster"
                description="Book a free consultation and discover how Sellaro Digitec can help you scale revenue across marketplaces."
                buttonText="Book Free Strategy Call"
                onButtonClick={onOpenForm}
            />
        </div>
    );
};

export default ServicePageTemplate;