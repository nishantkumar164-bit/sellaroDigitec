import { useState } from "react";
import {
    motion,
    AnimatePresence,
} from "framer-motion";
import { ChevronDown } from "lucide-react";

const portfolioItems = [
    { id: "amazon", label: "Amazon" },
    { id: "google", label: "Google Ads" },
    { id: "meta", label: "Meta Ads" },
    { id: "shopify", label: "Shopify" },

    { id: "flipkart", label: "Flipkart" },
    { id: "meesho", label: "Meesho" },
    { id: "etsy", label: "Etsy" },
    { id: "walmart", label: "Walmart" },

    { id: "jiomart", label: "JioMart" },

    { id: "wordpress", label: "WordPress" },
    { id: "custom-design", label: "Custom Design" },

    { id: "a-plus", label: "A+ Images" },
    { id: "video-editing", label: "Video Editing" },
    { id: "photography", label: "Product Photography" },

    { id: "others", label: "Others" },
];

export default function PortfolioSidebar({
    activeCategory,
    moveToFront,
}) {
    const [showAll, setShowAll] =
        useState(false);

    const visibleItems = showAll
        ? portfolioItems
        : portfolioItems.slice(0, 8);

    return (
        <div
            className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                sticky
                top-24
                overflow-hidden
            "
        >
            {/* HEADER */}

            <div
                className="
                    p-6
                    border-b
                    border-slate-100
                "
            >
                <p
                    className="
                        text-[11px]
                        uppercase
                        tracking-[0.2em]
                        font-semibold
                        text-slate-400
                    "
                >
                    Portfolio Explorer
                </p>

                <div
                    className="
                        mt-3
                        flex
                        items-center
                        gap-2
                    "
                >
                    <div
                        className="
                            w-2
                            h-2
                            rounded-full
                            bg-orange-500
                        "
                    />

                    <span
                        className="
                            text-sm
                            text-slate-500
                        "
                    >
                        {portfolioItems.length} Projects
                    </span>
                </div>
            </div>

            {/* PROJECT LIST */}

            <motion.div layout>

                {visibleItems.map(
                    (item, index) => {

                        const isActive =
                            activeCategory ===
                            item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() =>
                                    moveToFront(
                                        item.id
                                    )
                                }
                                className="
                                    relative
                                    w-full
                                    text-left
                                    px-6
                                    py-4
                                    group
                                "
                            >
                                {/* ACTIVE BAR */}

                                {isActive && (
                                    <motion.div
                                        layoutId="activeProjectIndicator"
                                        className="
                                            absolute
                                            left-0
                                            top-2
                                            bottom-2
                                            w-[3px]
                                            rounded-full
                                            bg-orange-500
                                        "
                                        transition={{
                                            type: "spring",
                                            stiffness: 350,
                                            damping: 28,
                                        }}
                                    />
                                )}

                                <motion.div
                                    animate={{
                                        x:
                                            isActive
                                                ? 8
                                                : 0,

                                        scale:
                                            isActive
                                                ? 1.02
                                                : 1,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 250,
                                        damping: 20,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        gap-4
                                    "
                                >
                                    {/* NUMBER */}

                                    <span
                                        className={`
                                            text-xs
                                            font-semibold
                                            transition-all

                                            ${isActive
                                                ? "text-orange-500"
                                                : "text-slate-300 group-hover:text-slate-500"
                                            }
                                        `}
                                    >
                                        {String(
                                            index +
                                            1
                                        ).padStart(
                                            2,
                                            "0"
                                        )}
                                    </span>

                                    {/* LABEL */}

                                    <span
                                        className={`
                                            transition-all
                                            duration-300

                                            ${isActive
                                                ? `
                                                        text-slate-900
                                                        font-semibold
                                                    `
                                                : `
                                                        text-slate-500
                                                        group-hover:text-slate-900
                                                    `
                                            }
                                        `}
                                    >
                                        {item.label}
                                    </span>
                                </motion.div>
                            </button>
                        );
                    }
                )}

            </motion.div>

            {/* EXPAND BUTTON */}

            {portfolioItems.length > 8 && (
                <div
                    className="
                        border-t
                        border-slate-100
                        p-4
                    "
                >
                    <button
                        onClick={() =>
                            setShowAll(
                                !showAll
                            )
                        }
                        className="
                            w-full
                            flex
                            items-center
                            justify-center
                            gap-2

                            text-sm
                            font-medium
                            text-slate-500

                            hover:text-orange-500

                            transition-all
                            duration-300
                        "
                    >
                        <motion.div
                            animate={{
                                rotate:
                                    showAll
                                        ? 180
                                        : 0,
                            }}
                            transition={{
                                duration: 0.25,
                            }}
                        >
                            <ChevronDown
                                size={16}
                            />
                        </motion.div>

                        {showAll
                            ? "Show Less"
                            : `Explore ${portfolioItems.length -
                            8
                            } More Projects`}
                    </button>
                </div>
            )}
        </div>
    );
}