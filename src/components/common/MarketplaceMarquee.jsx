// src/components/common/MarketplaceMarquee.jsx

import React from 'react';

const MarketplaceMarquee = ({ marketplaces = [] }) => {
    return (
        <section className="py-12 bg-white border-y border-slate-200">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-8">

                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Trusted Across Leading Marketplaces
                    </p>

                </div>

                <div className="relative overflow-hidden">

                    {/* Left Fade */}

                    <div
                        className="
                            absolute
                            left-0
                            top-0
                            w-26
                            h-full
                            bg-gradient-to-r
                            from-white
                            to-transparent
                            z-10
                            pointer-events-none
                        "
                    />

                    {/* Right Fade */}

                    <div
                        className="
                            absolute
                            right-0
                            top-0
                            w-28
                            h-full
                            bg-gradient-to-l
                            from-white
                            to-transparent
                            z-10
                            pointer-events-none
                        "
                    />

                    {/* Scrolling Container */}

                    <div
                        className="
                            flex
                            gap-10
                            whitespace-nowrap
                            animate-marquee
                            hover:[animation-play-state:paused]
                        "
                    >

                        {[...marketplaces, ...marketplaces].map((item, idx) => (

                            <div
                                key={idx}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    min-w-[150px]
                                    px-6
                                    py-3
                                    rounded-2xl
                                    bg-white
                                    border
                                    border-slate-200
                                    shadow-sm
                                    hover:shadow-md
                                    transition-all
                                    duration-300
                                "
                            >

                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="
                                        h-10
                                        object-contain
                                        grayscale
                                        opacity-70
                                        transition-all
                                        duration-300
                                        hover:grayscale-0
                                        hover:opacity-100
                                    "
                                />

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MarketplaceMarquee;