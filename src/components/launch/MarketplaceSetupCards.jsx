import React, { useState } from "react";

const marketplaces = [
    {
        logo: "/image/amazon_logo.png",
        title: "Amz",
        subtitle: "Seller Account",
        color: "orange",
        features: [
            "Individual & Professional Accounts",
            "Brand Registry Assistance",
            "GST / VAT Guidance",
            "Catalog Setup",
        ],
    },
    {
        logo: "/image/shopify_logo.webp",
        title: "Shopify",
        subtitle: "Store Launch",
        color: "green",
        features: [
            "Store Creation",
            "Theme Setup",
            "Payment Gateway Integration",
            "Domain Configuration",
        ],
    },
    {
        logo: "/image/walmart_logo.webp",
        title: "Walmart",
        subtitle: "Marketplace",
        color: "blue",
        features: [
            "Seller Registration",
            "Marketplace Approval Guidance",
            "Product Upload Setup",
        ],
    },
    {
        logo: "/image/etsy_logo.png",
        title: "Etsy",
        subtitle: "Store Setup",
        color: "orange",
        features: [
            "Handmade & Custom Product Sellers",
            "Store Setup",
            "Listing Optimization",
        ],
    },
    {
        logo: "/image/flipkart_logo.webp",
        title: "Flipkart",
        subtitle: "Seller Account",
        color: "yellow",
        features: [
            "Seller Account Setup",
            "GST & Documentation Assistance",
            "Profile & Store Configuration",
        ],
    },
    {
        logo: "/image/meesho_logo.png",
        title: "Meesho",
        subtitle: "Onboarding",
        color: "purple",
        features: [
            "Reseller & Brand Onboarding",
            "Profile Setup",
            "Product Upload Assistance",
        ],
    },
];

const buttonColors = {
    orange: "bg-orange-50 text-orange-600",
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
    yellow: "bg-yellow-50 text-yellow-700",
    purple: "bg-purple-50 text-purple-600",
};

const hoverGlow = {
    orange: "from-orange-100/90 to-orange-50/20",
    green: "from-green-100/90 to-green-50/20",
    blue: "from-blue-100/90 to-blue-50/20",
    yellow: "from-yellow-100/90 to-yellow-50/20",
    purple: "from-purple-100/90 to-purple-50/20",
};

const shadowGlow = {
    orange: "hover:shadow-[0_20px_60px_rgba(249,115,22,0.18)]",
    green: "hover:shadow-[0_20px_60px_rgba(34,197,94,0.18)]",
    blue: "hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]",
    yellow: "hover:shadow-[0_20px_60px_rgba(234,179,8,0.18)]",
    purple: "hover:shadow-[0_20px_60px_rgba(168,85,247,0.18)]",
};

const bulletColors = {
    orange: "bg-orange-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
};
function MarketplaceCard({ item, onOpenForm }) {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });

    return (
        <div
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                setPosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }}
            className={`
                group
                relative
                overflow-hidden
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
                shadow-sm
                hover:-translate-y-2
                transition-all
                duration-500
                ${shadowGlow[item.color]}
            `}
        >

            {/* Mouse Spotlight */}

            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(
                        250px circle at ${position.x}px ${position.y}px,
                        rgba(255,255,255,0.8),
                        transparent 60%
                    )`,
                }}
            />

            {/* Color Layer */}

            <div
                className={`
                    absolute inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all duration-500
                    bg-gradient-to-br
                    ${hoverGlow[item.color]}
                `}
            />

            <div className="relative z-10">

                <div className="flex justify-center">
                    <img
                        src={item.logo}
                        alt={item.title}
                        className="h-16 object-contain"
                    />
                </div>

                <div className="text-center mt-4">

                    <h3 className="text-2xl font-bold text-slate-900">
                        {item.title}
                    </h3>

                    <p className="text-lg font-medium text-slate-700">
                        {item.subtitle}
                    </p>

                </div>

                <ul className="mt-6 space-y-3 min-h-[160px]">

                    {item.features.map((feature) => (
                        <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-slate-600"
                        >
                            <span
                                className={`
                                    mt-2 h-1.5 w-1.5 rounded-full shrink-0
                                    ${bulletColors[item.color]}
                                `}
                            />

                            {feature}
                        </li>
                    ))}

                </ul>

                <button
                    className={`
                        mt-6
                        w-full
                        py-3
                        rounded-xl
                        font-semibold
                        text-sm
                        transition-all
                        duration-300
                        ${buttonColors[item.color]}
                    `}
                    onClick={onOpenForm}
                >
                    FREE SETUP
                </button>

            </div>

        </div>
    );
}

export default function MarketplaceSetupCards({
    onOpenForm
}) {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-14">

                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        We Set You Up On
                    </p>

                    <h2 className="mt-2 text-4xl font-bold text-slate-900">
                        All Major Marketplaces –
                        <span className="text-orange-500">
                            {" "}100% Free Setup
                        </span>
                    </h2>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">

                    {marketplaces.map((item) => (
                        <MarketplaceCard
                            key={item.title}
                            item={item}
                            onOpenForm={onOpenForm}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}