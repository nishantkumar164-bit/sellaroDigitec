import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Package, Coins } from "lucide-react";

const orbitItems = [
    {
        logo: "/image/amazon_logo.png",

        angle: 0,
        radius: 210,
    },
    {
        logo: "/image/flipkart_logo.webp",

        angle: 60,
        radius: 210,
    },
    {
        logo: "/image/shopify_logo.webp",

        angle: 120,
        radius: 210,
    },
    {
        logo: "/image/meta_logo.webp",

        angle: 180,
        radius: 210,
    },
    {
        logo: "/image/google_ads.webp",

        angle: 240,
        radius: 210,
    },
    {
        logo: "/image/walmart_logo.webp",

        angle: 300,
        radius: 210,
    },
];

const MarketplaceOrbit = () => {

    const services = [
        "Marketplace Growth",
        "Performance Marketing",
        "Catalog Optimization",
        "Brand Expansion",
        "Global Selling"
    ];

    const [serviceIndex, setServiceIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setServiceIndex((prev) => (prev + 1) % services.length);
        }, 2500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-[480px] h-[480px] flex items-center justify-center mx-auto">

            {/* Background Glow */}
            <div className="absolute w-[450px] h-[450px] rounded-full bg-orange-500/10 blur-[140px]" />
            <div className="absolute w-[360px] h-[360px] rounded-full bg-blue-500/10 blur-[120px]" />

            {/* Orbit Rings */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-orange-200/30" />
            <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-200/30" />

            {/* Inner Rotating Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
                    absolute
                    w-[300px]
                    h-[300px]
                    rounded-full
                    border-2
                    border-dashed
                    border-orange-200/20
                    before:absolute
before:inset-3
before:rounded-full
before:border
before:border-orange-100
                "
            />

            {/* Orbit Logos */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-[440px] h-[440px]"
            >
                {orbitItems.map((item, index) => {
                    const x =
                        Math.cos((item.angle * Math.PI) / 180) *
                        item.radius;

                    const y =
                        Math.sin((item.angle * Math.PI) / 180) *
                        item.radius;

                    return (
                        <div
                            key={index}
                            className="absolute left-1/2 top-1/2"
                            style={{
                                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                            }}
                        >
                            <motion.div
                                animate={{
                                    rotate: -360,
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    rotate: {
                                        duration: 45,
                                        repeat: Infinity,
                                        ease: "linear",
                                    },
                                    y: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}
                                className="
                                    bg-white/90
                                    backdrop-blur-md
                                    rounded-2xl
                                    shadow-md
                                    border
                                    border-slate-100/80
                                    w-14
                                    h-14
                                    flex
                                    items-center
                                    justify-center
                                    p-2
                                    hover:scale-110
                                    transition-transform
                                    duration-300
                                "
                            >
                                <img
                                    src={item.logo}
                                    alt="logo"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>

            {/* KPI Card 1 */}
            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="
absolute
top-[-50px]
left-1/2
-translate-x-1/2
bg-white/85
backdrop-blur-xl
border
border-white/70
shadow-[0_20px_40px_rgba(15,23,42,0.12)]
rounded-3xl
px-5 py-3
flex
items-center
gap-3
z-[100]
hover:shadow-[0_25px_50px_rgba(16,185,129,0.20)]
transition-all
duration-300
cursor-default
"
            >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent leading-none">
                        +35%
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1 whitespace-nowrap">
                        Sales Growth
                    </div>
                </div>
            </motion.div>

            {/* KPI Card 2 */}
            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="
absolute
top-1/2
left-[-170px]
-translate-y-1/2
bg-white/85
backdrop-blur-xl
border
border-white/70
shadow-[0_20px_40px_rgba(15,23,42,0.12)]
rounded-3xl
px-5 py-3
flex
items-center
gap-3
z-[100]
hover:shadow-[0_25px_50px_rgba(249,115,22,0.20)]
transition-all
duration-300
cursor-default
"
            >
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                    <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-xl font-extrabold bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent leading-none">
                        -24%
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1 whitespace-nowrap">
                        ACOS Reduction
                    </div>
                </div>
            </motion.div>

            {/* KPI Card 3 */}
            <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="
absolute
bottom-[-50px]
left-1/2
-translate-x-1/2
bg-white/85
backdrop-blur-xl
border
border-white/70
shadow-[0_20px_40px_rgba(15,23,42,0.12)]
rounded-3xl
px-5 py-3
flex
items-center
gap-3
z-[100]
hover:shadow-[0_25px_50px_rgba(14,165,233,0.20)]
transition-all
duration-300
cursor-default
"            >
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 shrink-0">
                    <Package className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent leading-none">
                        500k+
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1 whitespace-nowrap">
                        Global SKUs
                    </div>
                </div>
            </motion.div>
            {/* KPI Card 4 */}
            <motion.div
                animate={{
                    y: [0, -8, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}

                whileHover={{ scale: 1.05, y: -5 }}
                className="
absolute
top-1/2
right-[-170px]
-translate-y-1/2
bg-white/85
backdrop-blur-xl
border
border-white/70
shadow-[0_20px_40px_rgba(15,23,42,0.12)]
rounded-3xl
px-5 py-3
flex
items-center
gap-3
z-[100]
hover:shadow-[0_25px_50px_rgba(99,102,241,0.20)]
transition-all
duration-300
cursor-default
">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Coins className="w-5 h-5" />
                </div>
                <div>
                    <div className="text-xl font-extrabold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent leading-none">
                        ₹120Cr+
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1 whitespace-nowrap">
                        Revenue Managed
                    </div>
                </div>
            </motion.div>

            {/* DATA PULSE 1 */}
            <motion.div
                className="absolute w-3 h-3 rounded-full bg-orange-500 z-10"
                animate={{
                    x: [-220, 0],
                    y: [-180, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* DATA PULSE 2 */}
            <motion.div
                className="absolute w-3 h-3 rounded-full bg-blue-500 z-10"
                animate={{
                    x: [220, 0],
                    y: [-100, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* DATA PULSE 3 */}
            <motion.div
                className="absolute w-3 h-3 rounded-full bg-green-500 z-10"
                animate={{
                    x: [0, 0],
                    y: [250, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* KPI CONNECTOR LINES */}
            <svg
                className="absolute inset-0 w-full h-full z-0 pointer-events-none"
                viewBox="0 0 650 650"
            >
                {/* TOP */}
                <line
                    x1="325"
                    y1="325"
                    x2="325"
                    y2="55"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    opacity="0.35"
                />

                {/* RIGHT */}
                <line
                    x1="325"
                    y1="325"
                    x2="595"
                    y2="325"
                    stroke="#6366f1"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    opacity="0.35"
                />

                {/* BOTTOM */}
                <line
                    x1="325"
                    y1="325"
                    x2="325"
                    y2="595"
                    stroke="#0ea5e9"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    opacity="0.35"
                />

                {/* LEFT */}
                <line
                    x1="325"
                    y1="325"
                    x2="55"
                    y2="325"
                    stroke="#f97316"
                    strokeWidth="2"
                    strokeDasharray="8 8"
                    opacity="0.35"
                />
            </svg>

            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
        absolute
        w-[300px]
        h-[300px]
        rounded-full
        border-[3px]
        border-dashed
        border-orange-400/50
        shadow-[0_0_40px_rgba(249,115,22,0.15)]
        z-10
    "
            />

            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
    absolute
    w-[360px]
    h-[360px]
    rounded-full
    border-[3px]
    border-dashed
    border-orange-400/50
    shadow-[0_0_40px_rgba(249,115,22,0.15)]
    z-10
  "
            />


            {/* CENTER ENGINE */}
            <motion.div
                animate={{
                    scale: [1, 1.02, 1],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                }}
                style={{ x: "-50%", y: "-50%" }}
                className="
                    absolute
                    left-1/2
                    top-1/2
                    w-[300px]
h-[300px]
                    rounded-full
                    
                    backdrop-blur-xl
                    border
                    border-white/50
                    bg-gradient-to-br
from-white
via-white
to-slate-50
shadow-[0_25px_80px_rgba(15,23,42,0.15)]
                    flex
                    flex-col
                    items-center
                    justify-center
                    z-20
                "
            >

                <img
                    src="/image/logo.webp"
                    alt="Sellaro"
                    className="h-16 w-auto object-contain"
                />


                <h3 className="text-xg font-bold text-slate-800 mt-1">
                    Growth Engine
                </h3>

                <motion.p
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm text-slate-500 mt-1 font-medium"
                >
                    {services[serviceIndex]}
                </motion.p>

                <div className="mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

                    <span className="text-xs font-medium text-slate-500">
                        Live Growth Processing
                    </span>
                </div>
            </motion.div>


        </div>
    );
};

export default MarketplaceOrbit;