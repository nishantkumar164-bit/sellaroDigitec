import React from 'react';
import Button from '../common/Button';
import {
    Rocket,
    TrendingUp,
    SearchCheck,
    BarChart4,
    ShieldCheck,
    Gauge,
    Eye,
    BadgeCheck
} from 'lucide-react';
import ContactFAQ from '../sections/ContactFAQ';
import ContactCTA from '../sections/ContactCTA';
import DeviceShowcaseSection from '../common/DeviceShowcaseSection';


const businessTemplate = ({
    onOpenForm,
    heroHighlights,
    performanceMetrics,
    services,

    badge,
    title,
    highlight,
    description,
    heroImage,

    metric1Value,
    metric1Label,
    metric2Value,
    metric2Label,

    showcaseTitle,
    showcaseDescription,
    showcaseMetrics,
    showcaseHighlights,
    showcaseSlides,

    faqs
}) => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO SECTION */}

            <section className="relative pt-28 pb-16 overflow-hidden">

                {/* Background */}

                <div className="absolute inset-0 bg-white" />

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

                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-center">

                        {/* LEFT */}

                        <div>

                            <span
                                className="
                                    inline-flex
                                    rounded-full
                                    border
                                    border-emerald-200
                                    bg-emerald-50
                                    px-4
                                    py-2
                                    text-sm
                                    font-semibold
                                    text-emerald-700
                                "
                            >
                                {badge}
                            </span>

                            <h1
                                className="
                                    mt-8
                                    text-4xl
                                    md:text-5xl
                                    lg:text-5xl
                                    font-black
                                    text-slate-900
                                "
                            >
                                {title}

                                <span className="block text-emerald-700">
                                    {highlight}
                                </span>
                            </h1>

                            <p
                                className="
                                    mt-6
                                    text-lg
                                    text-slate-600
                                    leading-relaxed
                                    max-w-2xl
                                "
                            >
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
                                            .getElementById('growth-framework')
                                            ?.scrollIntoView({
                                                behavior: 'smooth'
                                            })
                                    }
                                >
                                    View Framework
                                </Button>

                            </div>
                            <div className="mt-8 flex flex-wrap gap-4">

                                {heroHighlights?.map((item, idx) => {

                                    const Icon = item.icon;

                                    return (

                                        <div
                                            key={idx}
                                            className="
          flex items-center gap-3
          px-5 py-3
          rounded-2xl
          bg-white
          border border-slate-200
          shadow-sm
          hover:shadow-lg
          hover:shadow-orange-100
          hover:border-orange-200
          hover:-translate-y-1
          transition-all duration-300
        "
                                        >

                                            <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">
                                                <Icon className="w-5 h-5 text-emerald-700" />
                                            </div>

                                            <div>
                                                <p className="font-semibold text-slate-900">
                                                    {item.title}
                                                </p>

                                                <p className="text-xs text-slate-500">
                                                    {item.subtitle}
                                                </p>
                                            </div>

                                        </div>

                                    );

                                })}

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative hidden lg:block">

                            <div
                                className="
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-white
                                    shadow-2xl
                                    overflow-hidden
                                "
                            >

                                <img
                                    src={heroImage}
                                    alt={title}
                                    className="w-full"
                                />

                            </div>

                            {/* KPI CARD 1 */}

                            <div
                                className="
                                    absolute
                                    -top-5
                                    -right-5
                                    bg-white
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    shadow-xl
                                    px-5
                                    py-4
                                "
                            >
                                <p className="text-xs text-slate-500">
                                    {metric1Label}
                                </p>

                                <h3 className="text-3xl font-black text-emerald-700">
                                    {metric1Value}
                                </h3>
                            </div>

                            {/* KPI CARD 2 */}

                            <div
                                className="
                                    absolute
                                    -bottom-5
                                    -left-5
                                    bg-white
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    shadow-xl
                                    px-5
                                    py-4
                                "
                            >
                                <p className="text-xs text-slate-500">
                                    {metric2Label}
                                </p>

                                <h3 className="text-3xl font-black text-green-500">
                                    {metric2Value}
                                </h3>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* PERFORMANCE BAR */}

            <section className="bg-[#030B1F] py-8">

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                    {performanceMetrics?.map((item, idx) => (

                        <div
                            key={idx}
                            className="text-center"
                        >

                            <h3 className="text-4xl font-black text-emerald-500">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-slate-300">
                                {item.label}
                            </p>

                        </div>

                    ))}

                </div>

            </section>

            {/* WHAT WE MANAGE */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <span
                            className="
          inline-flex
          px-4 py-2
          rounded-full
          bg-emerald-50
          border
          border-orange-100
          text-emerald-500
          text-xs
          font-bold
          uppercase
          tracking-[0.25em]
        "
                        >
                            Business Compliance Services
                        </span>

                        <h2 className="mt-4 text-4xl font-black text-slate-900">
                            What We Offer
                        </h2>

                        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                            Professional registration, compliance and business support services to help your business operate legally and grow confidently.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {services?.map((item, idx) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={idx}
                                    className="
              group
              bg-white
              rounded-3xl
              border
              border-slate-200
              p-8
              shadow-sm
              hover:shadow-xl
              hover:shadow-blue-100
              hover:border-emerald-200
              hover:-translate-y-2
              transition-all
              duration-500
            "
                                >

                                    <div
                                        className="
                w-16 h-16
                rounded-2xl
                bg-emerald-50
                flex items-center justify-center
                mb-6
                group-hover:scale-105
                transition-all
                duration-500
              "
                                    >

                                        <Icon className="w-8 h-8 text-emerald-500" />

                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div
                                        className="
                mt-6
                h-1
                w-0
                bg-gradient-to-r
                from-orange-400
                to-orange-600
                rounded-full
                group-hover:w-20
                transition-all
                duration-500
              "
                                    />

                                </div>

                            );
                        })}

                    </div>

                </div>

            </section>

            {/* CAMPAIGN GROWTH FRAMEWORK */}

            <section
                id="growth-framework"
                className="py-15 bg-slate-50"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <span
                            className="
          inline-flex
          px-4 py-2
          rounded-full
          bg-indigo-50
          border
          border-blue-100
          text-emerald-500
          text-xs
          font-bold
          uppercase
          tracking-[0.25em]
        "
                        >
                            Our Compliance Process
                        </span>

                        <h2 className="mt-4 text-4xl font-black text-slate-900">
                            How We Simplify Compliance
                        </h2>

                        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                            A simple step-by-step process that ensures accurate documentation, timely filing and successful registration.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

                        {[
                            {
                                step: '01',
                                icon: SearchCheck,
                                title: 'Consultation',
                                desc: 'Understand your business and compliance requirements.'
                            },
                            {
                                step: '02',
                                icon: Rocket,
                                title: 'Documentation',
                                desc: 'Collect and verify required documents.'
                            },
                            {
                                step: '03',
                                icon: BarChart4,
                                title: 'Application Filing',
                                desc: 'Submit registrations and compliance applications.'
                            },
                            {
                                step: '04',
                                icon: TrendingUp,
                                title: 'Approval & Support',
                                desc: 'Receive approvals and ongoing business guidance.'
                            }
                        ].map((item, idx) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={idx}
                                    className="
              group
              relative
              bg-white
              rounded-3xl
              border
              border-slate-200
              p-8
              shadow-sm
              hover:shadow-xl
              hover:shadow-blue-100
              hover:border-emerald-200
              hover:-translate-y-2
              transition-all
              duration-500
            "
                                >

                                    {/* Step Number */}

                                    <div
                                        className="
                absolute
                -top-4
                left-8
                px-4
                py-2
                rounded-full
                bg-emerald-500
                text-white
                text-sm
                font-black
                shadow-lg
              "
                                    >
                                        {item.step}
                                    </div>

                                    <div
                                        className="
                mt-4
                w-16
                h-16
                rounded-2xl
                bg-indigo-50
                flex
                items-center
                justify-center
              "
                                    >
                                        <Icon className="w-8 h-8 text-emerald-500" />
                                    </div>

                                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div
                                        className="
                mt-6
                h-1
                w-0
                bg-gradient-to-r
                from-blue-400
                to-indigo-600
                rounded-full
                group-hover:w-20
                transition-all
                duration-500
              "
                                    />

                                </div>

                            );
                        })}

                    </div>

                </div>

            </section>

            {/* WHY CHOOSE SELLARO */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <span
                            className="
          inline-flex
          px-4 py-2
          rounded-full
          bg-indigo-50
          border
          border-orange-100
          text-emerald-700
          text-xs
          font-bold
          uppercase
          tracking-[0.25em]
        "
                        >
                            Why Choose Sellaro
                        </span>

                        <h2 className="mt-4 text-4xl font-black text-slate-900">
                            Compliance Made Simple
                        </h2>

                        <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                            Our experts simplify complex registration and compliance processes so you can focus on growing your business.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {[
                            {
                                icon: Gauge,
                                title: 'Expert Guidance',
                                desc: 'Compliance specialists helping you avoid costly mistakes.'
                            },
                            {
                                icon: Eye,
                                title: 'Fast Processing',
                                desc: 'Efficient workflows designed to reduce delays.'
                            },
                            {
                                icon: ShieldCheck,
                                title: 'Transparent Documentation',
                                desc: 'Clear communication throughout the process.'
                            },
                            {
                                icon: BadgeCheck,
                                title: 'End-to-End Support',
                                desc: 'From registration to ongoing compliance assistance.'
                            }
                        ].map((item, idx) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={idx}
                                    className="
              group
              bg-white
              rounded-3xl
              border
              border-slate-200
              p-8
              shadow-sm
              hover:shadow-xl
              hover:shadow-orange-100
              hover:border-orange-200
              hover:-translate-y-2
              transition-all
              duration-500
            "
                                >

                                    <div
                                        className="
                w-16 h-16
                rounded-2xl
                bg-emerald-50
                flex items-center justify-center
                mb-6
                group-hover:scale-105
                transition-all
                duration-500
              "
                                    >
                                        <Icon className="w-8 h-8 text-emerald-700" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <div
                                        className="
                mt-6
                h-1
                w-0
                bg-gradient-to-r
                from-orange-400
                to-orange-600
                rounded-full
                group-hover:w-20
                transition-all
                duration-500
              "
                                    />

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* RESULTS SNAPSHOT */}

            <DeviceShowcaseSection
                badge="Success Stories"

                sectionTitle={showcaseTitle}

                sectionDescription={showcaseDescription}

                metrics={showcaseMetrics}

                highlights={showcaseHighlights}

                showcaseSlides={showcaseSlides}
            />
            <div className="h-16" />
            <ContactFAQ
                badge="BUSINESS COMPLIANCE FAQ"
                title={`${title} FAQs`}
                subtitle={`Common questions about our ${title.toLowerCase()} services.`}
                faqs={faqs}
                accentColor="emerald"
            />
            <ContactCTA
                badge="Ready To Scale?"
                title="Let's Register & Grow"
                highlightedText="Your Business"
                description="Book a free consultation and get expert guidance on registrations, compliance and business growth."
                buttonText="Get Free Consultation"
                onButtonClick={onOpenForm}
            />

        </div>
    );
};

export default businessTemplate;