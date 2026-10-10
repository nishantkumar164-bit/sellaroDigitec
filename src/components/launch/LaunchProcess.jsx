import {
    ClipboardCheck,
    FileText,
    UserPlus,
    Package,
    Store,
    TrendingUp,
} from "lucide-react";
import Button from '../common/Button';

const steps = [
    {
        number: "01",
        icon: ClipboardCheck,
        title: "Business Assessment",
        description:
            "We understand your business, goals & product category.",
        color: "bg-orange-500",
    },
    {
        number: "02",
        icon: FileText,
        title: "Documentation Review",
        description:
            "We review and guide you on all required documents and compliance.",
        color: "bg-blue-500",
    },
    {
        number: "03",
        icon: UserPlus,
        title: "Marketplace Registration",
        description:
            "We create and register your account on the marketplace and ensure approval.",
        color: "bg-green-500",
    },
    {
        number: "04",
        icon: Package,
        title: "Catalog Preparation",
        description:
            "We set up your profile, categories, shipping & product basics.",
        color: "bg-orange-400",
    },
    {
        number: "05",
        icon: Store,
        title: "Store Activation",
        description:
            "Your store is activated and ready for product listing and sales.",
        color: "bg-purple-500",
    },
    {
        number: "06",
        icon: TrendingUp,
        title: "Growth Consultation",
        description:
            "We recommend next steps for growth, marketing and scaling.",
        color: "bg-blue-600",
    },
];

export default function LaunchProcess() {
    return (
        <section id="launch-process" className="py-20 bg-white border-t border-slate-100">

            <div className="max-w-[1400px] mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <p className="text-xs uppercase tracking-[2px] font-semibold text-slate-500">
                        OUR PROVEN LAUNCH PROCESS
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-slate-900">
                        From Registration to{" "}
                        <span className="text-orange-500">
                            Revenue
                        </span>
                    </h2>

                </div>

                {/* Timeline */}

                <div className="relative">

                    {/* Timeline Line */}

                    <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-[2px] overflow-hidden">

                        {/* Base Dotted Line */}
                        <div
                            className="
            absolute
            inset-0
            border-t-2
            border-dashed
            border-slate-200
        "
                        />

                        {/* Moving Ray */}
                        <div className="timeline-ray" />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

                        {steps.map((step) => {

                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="
                                        group
                                        relative
                                        text-center
                                        transition-all
                                        duration-500
                                        hover:-translate-y-6
                                        hover:scale-[1.03]
                                    "
                                >

                                    {/* Glow */}

                                    <div
                                        className={`
                                            absolute
                                            top-8
                                            left-1/2
                                            -translate-x-1/2

                                            w-20
                                            h-20

                                            rounded-full
                                            blur-2xl

                                            opacity-0

                                            transition-all
                                            duration-500

                                            group-hover:opacity-30

                                            ${step.color}
                                        `}
                                    />

                                    {/* Number Badge */}

                                    <div
                                        className={`
                                            absolute
                                            left-1/2
                                            -translate-x-1/2
                                            -top-4
                                            z-30

                                            text-white
                                            text-xs
                                            font-bold

                                            w-8
                                            h-8

                                            rounded-full

                                            flex
                                            items-center
                                            justify-center

                                            shadow-md

                                            transition-all
                                            duration-500

                                            group-hover:scale-125
                                            group-hover:shadow-xl

                                            ${step.color}
                                        `}
                                    >
                                        {step.number}
                                    </div>

                                    {/* Icon Circle */}

                                    <div
                                        className="
                                            relative
                                            z-10

                                            w-24
                                            h-24
                                            mx-auto

                                            rounded-full
                                            border
                                            border-slate-200

                                            bg-white

                                            flex
                                            items-center
                                            justify-center

                                            shadow-sm

                                            transition-all
                                            duration-500

                                            group-hover:scale-110
                                            group-hover:shadow-xl
                                        "
                                    >
                                        <Icon
                                            className="
                                                w-10
                                                h-10
                                                text-slate-700

                                                transition-all
                                                duration-300

                                                group-hover:text-orange-500
                                            "
                                        />
                                    </div>

                                    {/* Title */}

                                    <h3
                                        className="
                                            mt-6
                                            text-xl
                                            font-bold
                                            text-slate-900

                                            transition-all
                                            duration-300

                                            group-hover:text-orange-500
                                        "
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Description */}

                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            text-slate-600
                                            leading-relaxed
                                        "
                                    >
                                        {step.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}