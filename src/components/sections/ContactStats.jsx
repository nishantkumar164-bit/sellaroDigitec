import React from 'react';
import {
    Briefcase,
    TrendingUp,
    Users,
    Clock3,
} from 'lucide-react';

const stats = [
    {
        icon: Briefcase,
        value: '500+',
        title: 'Brands Scaled',
        subtitle: 'Across 15+ countries',
    },
    {
        icon: TrendingUp,
        value: '₹50Cr+',
        title: 'Revenue Managed',
        subtitle: "For our client's stores",
    },
    {
        icon: Users,
        value: '8+',
        title: 'Marketplace Experts',
        subtitle: 'Amz, Walmart, Shopify & more',
    },
    {
        icon: Clock3,
        value: '24 Hr',
        title: 'Response Time',
        subtitle: 'We value your time',
    },
];

const ContactStats = () => {
    return (
        <section className="-mt-8 pb-8 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">

                <div className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          shadow-sm
          overflow-hidden
        ">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                        {stats.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className={`
                    flex items-center gap-4 p-8
                    ${index !== stats.length - 1
                                            ? 'border-b lg:border-b-0 lg:border-r border-slate-200'
                                            : ''}
                  `}
                                >
                                    <div className="
                    w-16 h-16
                    rounded-full
                    bg-orange-50
                    flex items-center
                    justify-center
                    flex-shrink-0
                  ">
                                        <Icon className="w-8 h-8 text-orange-500" />
                                    </div>

                                    <div>
                                        <h3 className="text-4xl font-extrabold text-slate-900 leading-none">
                                            {item.value}
                                        </h3>

                                        <p className="mt-2 font-semibold text-slate-800">
                                            {item.title}
                                        </p>

                                        <p className="text-sm text-slate-500 mt-1">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactStats;