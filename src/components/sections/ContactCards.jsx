import React from 'react';
import {
    Mail,
    MessageCircle,
    MapPin,
    Clock3,
} from 'lucide-react';

const cards = [
    {
        icon: Mail,
        title: 'Email Us',
        primary: 'growth@sellarodigitec.com',
        secondary: 'Response within 24 hours',
        bg: 'bg-orange-50',
        color: 'text-orange-500',
    },
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        primary: '+91 9031 047 291',
        secondary: 'Quick chat for immediate assistance',
        bg: 'bg-green-50',
        color: 'text-green-500',
    },
    {
        icon: MapPin,
        title: 'Global Operations',
        primary: 'India • UAE • UK • USA • CANADA',
        secondary: 'Supporting brands worldwide',
        bg: 'bg-blue-50',
        color: 'text-blue-500',
    },
    {
        icon: Clock3,
        title: 'Availability',
        primary: 'Mon – Sat · 10 AM – 6 PM',
        secondary: "We're here to help",
        bg: 'bg-violet-50',
        color: 'text-violet-500',
    },
];

const ContactCards = () => {
    return (
        <section className="pt-2 pb-12">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-10">
                    <span className="inline-flex px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-[0.25em]">
                        Let's Connect
                    </span>

                    <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-slate-900">
                        Multiple Ways To Reach Us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={index}
                                className="
                  group
                  bg-white/80
                  backdrop-blur-sm
                  rounded-3xl
                  border
                  border-slate-200
                  p-6
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
                                    className={`
                    w-16 h-16
                    rounded-2xl
                    flex items-center justify-center
                    mb-5
                    transition-all
                    duration-500
                    group-hover:scale-105
                    ${card.bg}
                  `}
                                >
                                    <Icon
                                        className={`w-8 h-8 ${card.color}`}
                                    />
                                </div>

                                <h3 className="font-bold text-xl text-slate-900">
                                    {card.title}
                                </h3>

                                <p className="mt-3 font-semibold text-slate-800">
                                    {card.primary}
                                </p>

                                <p className="mt-2 text-sm text-slate-500">
                                    {card.secondary}
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
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
};

export default ContactCards;