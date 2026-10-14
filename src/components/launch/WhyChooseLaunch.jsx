import {
    Rocket,
    ShieldCheck,
    UserRound,
    TrendingUp,
} from "lucide-react";

const features = [
    {
        icon: Rocket,
        title: "Fast Launch",
        description: "Go live within days, not weeks.",
        color: "text-orange-500",
        glow: "hover:shadow-orange-100",
    },
    {
        icon: ShieldCheck,
        title: "Global Compliance",
        description:
            "Guidance for essential docuementation for marketplace requirements.",
        color: "text-blue-500",
        glow: "hover:shadow-blue-100",
    },
    {
        icon: UserRound,
        title: "Dedicated Expert",
        description:
            "Real ecommerce specialists, not generic support teams.",
        color: "text-green-500",
        glow: "hover:shadow-green-100",
    },
    {
        icon: TrendingUp,
        title: "Growth Ready",
        description:
            "Launch with SEO, Ads, A+ Content & Conversion Optimization in mind.",
        color: "text-purple-500",
        glow: "hover:shadow-purple-100",
    },
];

export default function WhyChooseLaunch() {
    return (
        <section className="py-16 border-t border-slate-100 bg-white">

            <div className="max-w-[1400px] mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-12">

                    <p className="text-xs font-semibold uppercase tracking-[2px] text-slate-500">
                        Why Businesses Choose Sellaro
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        Your Success is{" "}
                        <span className="text-orange-500">
                            Our Mission
                        </span>
                    </h2>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {features.map((item) => {

                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className={`
                                    group
                                    bg-white
                                    border
                                    border-slate-200
                                    rounded-2xl
                                    p-6
                                    hover:-translate-y-1
                                    hover:shadow-xl
                                    transition-all
                                    duration-300
                                    ${item.glow}
                                `}
                            >

                                <div className="flex items-start gap-4">

                                    <div
                                        className={`
                                            flex
                                            items-center
                                            justify-center
                                            w-14
                                            h-14
                                            rounded-xl
                                            bg-slate-50
                                        `}
                                    >
                                        <Icon
                                            className={`w-8 h-8 ${item.color}`}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}