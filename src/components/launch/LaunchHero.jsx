import { motion } from "framer-motion";
import { CheckCircle, Globe, ShieldCheck, Users } from "lucide-react";
import Button from '../common/Button';

const notifications = [
    {
        title: "Amz Account Approved",
        country: "Seller from UAE",
    },
    {
        title: "Shopify Store Configured",
        country: "Seller from Canada",
    },
    {
        title: "Walmart Launch Completed",
        country: "Seller from India",
    },
];

const countries = [
    { name: "USA", top: "25%", left: "2%" },
    { name: "Canada", top: "18%", left: "3%" },
    { name: "UAE", top: "35%", left: "60%" },
    { name: "India", top: "38%", left: "72%" },
    { name: "Australia", top: "63%", left: "95%" },
];


export default function LaunchHero({ onOpenForm }) {
    return (
        <section className="relative overflow-hidden bg-white pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid lg:grid-cols-[42%_58%] gap-8 items-center">

                    {/* LEFT CONTENT */}
                    <div>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
                            100% FREE ACCOUNT SETUP
                        </div>

                        {/* Heading */}
                        <h1 className="mt-6 text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                            We Launch.
                            <br />
                            <span className="text-orange-500">
                                You Grow Globally.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            Launch your business on Amz, Shopify, Walmart,
                            Etsy, Flipkart and other global marketplaces with
                            expert onboarding, compliance guidance and
                            marketplace-ready setup support.
                        </p>

                        {/* Trust badges */}
                        <div className="mt-6 flex flex-wrap gap-3">

                            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 bg-white">
                                <ShieldCheck className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">
                                    Amz SPN Verified
                                </span>
                            </div>

                            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 bg-white">
                                <Globe className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">
                                    Global Marketplace Experts
                                </span>
                            </div>

                            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 bg-white">
                                <Users className="w-4 h-4 text-blue-500" />
                                <span className="text-sm font-medium">
                                    6 Countries Supported
                                </span>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="mt-6 flex flex-wrap gap-4">

                            <Button
                                onClick={onOpenForm}
                            >
                                Get Free Account Setup
                            </Button>

                            <Button
                                variant="secondary"
                                onClick={() =>
                                    document
                                        .getElementById('launch-process')
                                        ?.scrollIntoView({
                                            behavior: 'smooth'
                                        })
                                }
                            >
                                See LAunch Process
                            </Button>

                        </div>

                        <div className="mt-6 flex items-center gap-4">

                            <div className="flex -space-x-3">
                                <img src="https://i.pravatar.cc/40?img=11" alt="" aria-hidden="true" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://i.pravatar.cc/40?img=12" alt="" aria-hidden="true" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://i.pravatar.cc/40?img=13" alt="" aria-hidden="true" className="w-10 h-10 rounded-full border-2 border-white" />
                                <img src="https://i.pravatar.cc/40?img=14" alt="" aria-hidden="true" className="w-10 h-10 rounded-full border-2 border-white" />
                            </div>

                            <div>
                                <div className="font-bold text-orange-500">
                                    245+ Businesses Launched
                                </div>

                                <div className="text-sm text-slate-500">
                                    Across India, USA, UAE, Canada & Australia
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative h-[600px] hidden lg:block">

                        {/* Background World Map */}
                        <img
                            src="/image/illustrations/world-map.png"
                            alt="world map"
                            className="
absolute
    left-1/2
    top-[45%]
    -translate-x-1/2
    -translate-y-1/2
    w-[135%]
    max-w-none
    opacity-15
    pointer-events-none
    z-0
"
                        />
                        <svg
                            className="absolute inset-0 z-10 w-full h-full pointer-events-none"
                        >

                            <defs>

                                <filter id="neonGlow">
                                    <feGaussianBlur stdDeviation="6" result="blur" />

                                    <feMerge>
                                        <feMergeNode in="blur" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>

                            </defs>

                            {/* ========================= */}
                            {/* INDIA → AUSTRALIA */}
                            {/* ========================= */}

                            <path
                                d="M507 230 Q620 280 668 380"
                                stroke="#36EFFF"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.7"
                                filter="url(#neonGlow)"
                            />

                            {/* ========================= */}
                            {/* INDIA → UAE */}
                            {/* ========================= */}

                            <path
                                d="M507 230 Q470 190 430 220"
                                stroke="#36EFFF"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.7"
                                filter="url(#neonGlow)"
                            />

                            {/* ========================= */}
                            {/* INDIA → USA */}
                            {/* ========================= */}

                            <path
                                d="M507 230 Q300 90 24 150"
                                stroke="#36EFFF"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.7"
                                filter="url(#neonGlow)"
                            />

                            {/* ========================= */}
                            {/* INDIA → CANADA */}
                            {/* ========================= */}

                            <path
                                d="M507 230 Q300 90 28 109"
                                stroke="#36EFFF"
                                strokeWidth="2"
                                fill="none"
                                opacity="0.7"
                                filter="url(#neonGlow)"
                            />

                        </svg>
                        {countries.map((country) => (
                            <div
                                key={country.name}
                                className="absolute z-20"
                                style={{
                                    top: country.top,
                                    left: country.left
                                }}
                            >
                                <div className="relative flex items-center gap-2">

                                    <div className="relative flex items-center justify-center">

                                        <motion.div
                                            animate={{
                                                scale: [1, 3, 1],
                                                opacity: [0.5, 0, 0.5],
                                            }}
                                            transition={{
                                                duration: 2.5,
                                                repeat: Infinity,
                                            }}
                                            className="absolute w-6 h-6 rounded-full bg-orange-400"
                                        />

                                        <div className="relative w-3 h-3 rounded-full bg-orange-500" />

                                    </div>

                                    <span className="text-xs font-semibold text-slate-700">
                                        {country.name}
                                    </span>

                                </div>
                            </div>
                        ))}


                        {/* Floating Logos */}
                        {/* Amazon */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="absolute z-30 -top-4 right-44"
                        >
                            <div
                                className="
  w-24 h-24
  rounded-full
  bg-white
  shadow-[0_20px_40px_rgba(0,0,0,0.12)]
  flex
  items-center
  justify-center
"
                            >
                                <img
                                    src="/image/amazon_logo.png"
                                    alt="Amazon"
                                    className="w-12"
                                />
                            </div>
                        </motion.div>
                        {/* Walmart */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute top-40 -left-8 z-30"
                        >
                            <div
                                className="
  w-24 h-24
  rounded-full
  bg-white
  shadow-[0_20px_40px_rgba(0,0,0,0.12)]
  flex
  items-center
  justify-center
"
                            >
                                <img
                                    src="/image/walmart_logo.webp"
                                    alt="Walmart"
                                    className="w-12"
                                />
                            </div>
                        </motion.div>
                        {/* Shopify */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                            }}
                            className="absolute top-60 right-1 z-30"
                        >
                            <div
                                className="
  w-24 h-24
  rounded-full
  bg-white
  shadow-[0_20px_40px_rgba(0,0,0,0.12)]
  flex
  items-center
  justify-center
"
                            >
                                <img
                                    src="/image/shopify_logo.webp"
                                    alt="Shopify"
                                    className="w-12"
                                />
                            </div>
                        </motion.div>
                        {/* Etsy */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute bottom-36 right-56 z-30"
                        >
                            <div
                                className="
  w-24 h-24
  rounded-full
  bg-white
  shadow-[0_20px_40px_rgba(0,0,0,0.12)]
  flex
  items-center
  justify-center
"
                            >
                                <img
                                    src="/image/etsy_logo.png"
                                    alt="Etsy"
                                    className="w-12"
                                />
                            </div>
                        </motion.div>


                        {/* Center Launch Card */}
                        <div className="
absolute
z-40
left-[34%]
top-[56%]
-translate-x-1/2
-translate-y-1/2
">

                            <div className="absolute inset-0 bg-orange-500/10 blur-3xl scale-125" />

                            <div className="relative bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-2xl p-6 w-[290px]">

                                <h3 className="text-2xl font-bold text-slate-900">
                                    Your Business
                                </h3>

                                <h4 className="text-lg font-semibold text-slate-700 mt-1">
                                    Ready To Launch
                                </h4>

                                <div className="mt-5 space-y-2">

                                    {[
                                        "Account Approved",
                                        "Store Configured",
                                        "Documentation Verified",
                                        "Launch Support Included",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-sm text-slate-700">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>

                                <div className="mt-5 rounded-xl bg-green-50 text-green-700 text-center py-2.5 text-sm font-semibold">
                                    You're All Set 🚀
                                </div>

                            </div>

                        </div>

                        {/* Notifications */}
                        <div
                            className="
    absolute
top-[460px]
right-0
    z-50
    w-[280px]
    bg-white/95
    backdrop-blur-xl
    rounded-3xl
    border
    border-slate-200
    shadow-2xl
    p-3
  "
                        >
                            {notifications.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`
        flex items-start gap-2 py-2
        ${index !== notifications.length - 1 ? "border-b border-slate-100" : ""}
      `}
                                >
                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                        {index === 0 && (
                                            <img src="/image/amazon_logo.png" alt="Amazon" className="w-4" />
                                        )}

                                        {index === 1 && (
                                            <img src="/image/shopify_logo.webp" alt="Shopify" className="w-4" />
                                        )}

                                        {index === 2 && (
                                            <img src="/image/walmart_logo.webp" alt="Walmart" className="w-4" />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-slate-800">
                                            {item.title}
                                        </div>

                                        <div className="text-xs text-slate-500">
                                            {item.country}
                                        </div>
                                    </div>

                                    <div className="text-[11px] text-slate-600 whitespace-nowrap">
                                        {index === 0
                                            ? "Just now"
                                            : index === 1
                                                ? "2 min ago"
                                                : "5 min ago"}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-0 right-0">

                            <motion.div
                                animate={{
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                }}
                                className="relative w-40 h-40"
                            >

                                {/* Glow Layer 1 */}
                                <div className="absolute -inset-10 rounded-full bg-orange-200/20 blur-xl" />

                                {/* Glow Layer 2 */}
                                <div className="absolute -inset-6 rounded-full bg-orange-200/25 blur-lg" />

                                {/* Glow Layer 3 */}
                                <div className="absolute -inset-2 rounded-full bg-orange-100/30 blur-md" />

                                {/* White Outer Ring */}
                                <div
                                    className="
    absolute
    inset-2
    rounded-full
    border-2
    border-white/80
    bg-white/5
    backdrop-blur-sm
    shadow-[0_0_40px_rgba(255,255,255,0.15)]
    "
                                />

                                {/* Main Circle */}
                                <div className="
absolute
inset-4
rounded-full
bg-white
shadow-[0_0_40px_rgba(251,146,60,0.15)]
flex
items-center
justify-center
">

                                    {/* Dotted Ring */}
                                    <div className="absolute inset-4 rounded-full border border-dashed border-orange-400" />

                                    <div className="text-center relative z-10">
                                        <div className="text-sm font-semibold text-orange-500">
                                            100%
                                        </div>

                                        <div className="text-2xl font-bold text-orange-500 leading-none">
                                            FREE
                                        </div>

                                        <div className="text-lg font-semibold text-orange-500">
                                            SETUP
                                        </div>
                                    </div>

                                </div>

                            </motion.div>

                        </div>

                    </div>


                </div>

            </div>
        </section>
    );
}