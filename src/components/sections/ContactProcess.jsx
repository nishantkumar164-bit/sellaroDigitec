import React from 'react';
import {
    Phone,
    Search,
    TrendingUp,
    Rocket,
    ArrowRight,
} from 'lucide-react';

const steps = [
    {
        number: '01',
        icon: Phone,
        title: 'Discovery Call',
        description:
            'We understand your business goals, marketplace challenges and growth opportunities.',
    },
    {
        number: '02',
        icon: Search,
        title: 'Account Audit',
        description:
            'Our experts analyze listings, advertising, competitors and operational gaps.',
    },
    {
        number: '03',
        icon: TrendingUp,
        title: 'Growth Roadmap',
        description:
            'Receive a custom strategy with actionable recommendations and priorities.',
    },
    {
        number: '04',
        icon: Rocket,
        title: 'Execution Plan',
        description:
            'We implement proven growth systems to scale your marketplace business.',
    },
];

const ContactProcess = () => {
    return (
        <section className="relative py-20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-orange-500/5 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="inline-flex px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-[0.25em]">
                        Our Process
                    </span>

                    <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        What Happens After You Reach Out?
                    </h2>

                    <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
                        A streamlined onboarding process designed to uncover opportunities,
                        build a strategy, and accelerate marketplace growth.
                    </p>
                </div>

                {/* Timeline */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Connector */}
                                {index !== steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-20 left-[78%] w-[80%] z-0">
                                        <div className="h-[2px] bg-gradient-to-r from-orange-200 via-orange-300 to-transparent" />
                                    </div>
                                )}

                                {/* Card */}
                                <div
                                    className="
                    relative
                    h-full
                    bg-white/70
                    backdrop-blur-sm
                    border
                    border-white
                    rounded-3xl
                    p-8
                    shadow-lg
                    shadow-slate-200/50
                    hover:shadow-2xl
                    hover:shadow-orange-100
                    hover:-translate-y-2
                    transition-all
                    duration-500
                  "
                                >
                                    {/* Step Number */}
                                    <div className="absolute -top-4 left-6">
                                        <div
                                            className="
                        px-4
                        py-2
                        rounded-full
                        text-white
                        text-xs
                        font-bold
                        tracking-widest
                        bg-gradient-to-r
                        from-orange-500
                        to-orange-600
                        shadow-lg
                        shadow-orange-500/30
                      "
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Icon */}
                                    <div className="relative mt-4 mb-6">

                                        <div className="absolute inset-0 flex justify-center">
                                            <div className="w-20 h-20 bg-orange-400/20 blur-2xl rounded-full" />
                                        </div>

                                        <div
                                            className="
                        relative
                        w-20
                        h-20
                        mx-auto
                        rounded-2xl
                        bg-gradient-to-br
                        from-orange-50
                        to-orange-100
                        border
                        border-orange-100
                        flex
                        items-center
                        justify-center
                        group-hover:scale-110
                        transition-transform
                        duration-500
                      "
                                        >
                                            <Icon className="w-9 h-9 text-orange-500" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-slate-900 text-center">
                                        {step.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 text-sm leading-relaxed text-center">
                                        {step.description}
                                    </p>

                                    {/* Bottom Accent */}
                                    <div
                                        className="
                      mt-6
                      h-1
                      w-0
                      bg-gradient-to-r
                      from-orange-400
                      to-orange-600
                      rounded-full
                      mx-auto
                      group-hover:w-20
                      transition-all
                      duration-500
                    "
                                    />
                                </div>

                                {/* Mobile Arrow */}
                                {index !== steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center py-4">
                                        <ArrowRight className="rotate-90 text-orange-300" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default ContactProcess;