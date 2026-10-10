import { CheckCircle } from "lucide-react";

const freeItems = [
    "Account Registration",
    "Basic Store Setup",
    "Marketplace Approval Guidance",
    "Initial Configuration",
    "Launch Consultation",
];

const premiumItems = [
    "Product Listings",
    "A+ Content Creation",
    "PPC Management",
    "SEO Optimization",
    "Full Account Management",
];

export default function LaunchReadiness() {
    return (
        <div
            className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
                shadow-sm
                h-full
            "
        >
            <h3
                className="
                    text-2xl
                    font-bold
                    text-center
                    text-slate-900
                    mb-6
                "
            >
                What's Included?
            </h3>

            <div className="grid md:grid-cols-2 gap-4">

                {/* FREE */}

                <div
                    className="
                        border
                        border-slate-200
                        rounded-2xl
                        p-5
                        hover:shadow-md
                        transition-all
                    "
                >
                    <h4
                        className="
                            text-green-600
                            font-bold
                            text-xl
                            text-center
                            mb-5
                        "
                    >
                        Included Free
                    </h4>

                    <div className="space-y-3">

                        {freeItems.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle
                                    className="
                                        w-5
                                        h-5
                                        text-green-500
                                        shrink-0
                                        mt-0.5
                                    "
                                />

                                <span className="text-slate-700 text-sm">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>

                    <div
                        className="
                            text-center
                            mt-6
                            font-bold
                            text-green-600
                            text-lg
                        "
                    >
                        100% FREE
                    </div>
                </div>

                {/* PREMIUM */}

                <div
                    className="
                        border
                        border-slate-200
                        rounded-2xl
                        p-5
                        hover:shadow-md
                        transition-all
                    "
                >
                    <h4
                        className="
                            text-orange-500
                            font-bold
                            text-xl
                            text-center
                            mb-5
                        "
                    >
                        Premium Services
                    </h4>

                    <div className="space-y-3">

                        {premiumItems.map((item) => (
                            <div
                                key={item}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle
                                    className="
                                        w-5
                                        h-5
                                        text-orange-500
                                        shrink-0
                                        mt-0.5
                                    "
                                />

                                <span className="text-slate-700 text-sm">
                                    {item}
                                </span>
                            </div>
                        ))}

                    </div>

                    <div
                        className="
                            text-center
                            mt-6
                            font-bold
                            text-orange-500
                            text-lg
                        "
                    >
                        Scale Your Revenue
                    </div>
                </div>

            </div>
        </div>
    );
}