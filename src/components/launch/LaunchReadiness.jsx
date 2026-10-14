
import { useState } from "react";

const marketplaces = [
    "/image/jio-mart-logo.png",
    "/image/shopify_logo.webp",
    "/image/walmart_logo.webp",
    "/image/etsy_logo.png",
    "/image/flipkart_logo.webp",
    "/image/meesho_logo.png",
];

export default function LaunchReadiness() {
    const [selectedMarketplace, setSelectedMarketplace] = useState(0);
    const [country, setCountry] = useState("India");
    const [products, setProducts] = useState("1 - 50");
    const [showPlan, setShowPlan] = useState(false);

    const getScore = () => {
        let score = 85;

        if (country === "India") score += 5;
        if (products === "1 - 50") score += 7;

        return Math.min(score, 99);
    };

    const score = getScore();

    const getLaunchTime = () => {
        if (products === "1 - 50") return "7 - 10 Days";
        if (products === "51 - 200") return "10 - 15 Days";
        return "15 - 20 Days";
    };

    const nextSteps = [
        "Complete account registration",
        "Prepare product images",
        "Upload catalog",
        "Configure shipping settings",
        "Launch first advertising campaign",
    ];

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
            {/* Title */}

            <h3 className="text-2xl font-bold text-slate-900">
                Launch Readiness Calculator
            </h3>

            {/* Marketplace Icons */}

            <div className="mt-6">

                <p className="text-sm text-slate-500 mb-3">
                    I want to sell on
                </p>

                <div className="grid grid-cols-6 gap-2">

                    {marketplaces.map((logo, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setSelectedMarketplace(index)}
                            aria-label={`Select marketplace ${logo.split('/').pop().replace('_logo.png', '').replace('.webp', '')}`}
                            className={`
    h-12
    rounded-xl
    border
    flex
    items-center
    justify-center
    transition-all
    ${selectedMarketplace === index
                                    ? "border-orange-500 bg-orange-50 shadow-md"
                                    : "border-slate-200 bg-white"
                                }
`}
                        >
                            <img
                                src={logo}
                                alt=""
                                aria-hidden="true"
                                className="h-7 object-contain"
                            />
                        </button>
                    ))}

                </div>

            </div>

            {/* Country */}

            <div className="mt-6">

                <label htmlFor="launch-country" className="text-sm text-slate-600">
                    Business Country
                </label>

                <select
                    id="launch-country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="
                        mt-2
                        w-full
                        h-11
                        rounded-xl
                        border
                        border-slate-200
                        px-3
                        text-sm
                    "
                >
                    <option>India</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                </select>

            </div>

            {/* Product Count */}

            <div className="mt-4">

                <label htmlFor="launch-products" className="text-sm text-slate-600">
                    Products Count
                </label>

                <select
                    id="launch-products"
                    value={products}
                    onChange={(e) => setProducts(e.target.value)}
                    className="
                        mt-2
                        w-full
                        h-11
                        rounded-xl
                        border
                        border-slate-200
                        px-3
                        text-sm
                    "
                >
                    <option>1 - 50</option>
                    <option>51 - 200</option>
                    <option>200+</option>
                </select>

            </div>

            {/* Readiness */}

            <div className="mt-6 flex items-center justify-between gap-4">

                <div>

                    <p className="text-sm text-slate-500">
                        Estimated Launch Time
                    </p>

                    <div
                        className="
                            mt-2
                            px-4
                            py-2
                            border
                            border-slate-200
                            rounded-xl
                            text-sm
                            font-medium
                            inline-block
                        "
                    >
                        {getLaunchTime()}
                    </div>

                </div>

                {/* Circular Score */}

                <div className="relative w-28 h-28">

                    <svg
                        className="w-28 h-28 -rotate-90"
                        viewBox="0 0 100 100"
                    >
                        <circle
                            cx="50"
                            cy="50"
                            r="42"
                            stroke="#e5e7eb"
                            strokeWidth="8"
                            fill="none"
                        />

                        <circle
                            cx="50"
                            cy="50"
                            r="42"
                            stroke="#f97316"
                            strokeWidth="8"
                            fill="none"
                            strokeDasharray="264"
                            strokeDashoffset="21"
                            strokeLinecap="round"
                        />
                    </svg>

                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            flex-col
                            items-center
                            justify-center
                        "
                    >
                        <span className="text-4xl font-bold text-slate-900">
                            {score}%
                        </span>

                        <span className="text-xs text-slate-500">
                            Launch Ready
                        </span>
                    </div>

                </div>

            </div>

            {/* CTA */}

            <button onClick={() => setShowPlan(true)}
                className="
                    mt-6
                    w-full
                    h-12
                    rounded-xl
                    bg-orange-500
                    text-white
                    font-semibold
                    hover:bg-orange-600
                    transition-all
                "
            >
                Generate Launch Plan
            </button>
            {showPlan && (
                <div
                    className="
            mt-6
            rounded-2xl
            border
            border-orange-200
            bg-orange-50
            p-5
        "
                >
                    <h4 className="font-bold text-slate-900">
                        Your Launch Plan
                    </h4>

                    <p className="mt-2 text-sm text-slate-600">
                        Based on your selections, your business is
                        <span className="font-semibold text-orange-600">
                            {" "} {score}% launch ready.
                        </span>
                    </p>

                    <div className="mt-4">
                        <p className="font-medium text-slate-800">
                            Recommended Next Steps
                        </p>

                        <ul className="mt-2 space-y-2">
                            {nextSteps.map((step, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 text-sm text-slate-600"
                                >
                                    ✓ {step}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4 text-sm text-slate-600">
                        Estimated marketplace launch:
                        <span className="font-semibold text-slate-900">
                            {" "} {getLaunchTime()}
                        </span>
                    </div>
                </div>
            )}

        </div>
    );
}