import { motion } from "framer-motion";

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

export default function PortfolioMobileTabs({
    activeCategory,
    moveToFront,
}) {
    return (
        <div className="lg:hidden mb-6">

            <div
                className="
                    flex
                    gap-3
                    overflow-x-auto
                    pb-2
                    scrollbar-hide
                "
            >
                {portfolioItems.map((item) => {

                    const isActive =
                        activeCategory === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() =>
                                moveToFront(item.id)
                            }
                            className="flex-shrink-0"
                        >
                            <motion.div
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className={`
                                    px-4
                                    py-2.5
                                    rounded-full
                                    text-sm
                                    whitespace-nowrap
                                    transition-all

                                    ${isActive
                                        ? `
                                                bg-orange-500
                                                text-white
                                                shadow-lg
                                            `
                                        : `
                                                bg-white
                                                border
                                                border-slate-200
                                                text-slate-600
                                            `
                                    }
                                `}
                            >
                                {item.label}
                            </motion.div>
                        </button>
                    );
                })}
            </div>

        </div>
    );
}