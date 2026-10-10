import {
    Rocket,
    Users,
    Award,
    Globe,
    ArrowRight,
    Sparkles
} from "lucide-react";

import { motion } from "framer-motion";

import Button from "../common/Button";

const stats = [
    {
        icon: <Rocket className="w-6 h-6 text-orange-500" />,
        value: "2,450+",
        label: "Projects Delivered",
    },
    {
        icon: <Users className="w-6 h-6 text-orange-500" />,
        value: "20K+",
        label: "Happy Clients",
    },
    {
        icon: <Award className="w-6 h-6 text-orange-500" />,
        value: "100%",
        label: "Client Satisfaction",
    },
    {
        icon: <Globe className="w-6 h-6 text-orange-500" />,
        value: "6+",
        label: "Countries Served",
    },
];

const cards = [
    {
        logo: "/image/amazon_logo.png",
        value: "+220%",
        label: "Sales Growth",
    },
    {
        logo: "/image/google-ads.png",
        value: "4.8X",
        label: "ROAS Achieved",
    },
    {
        logo: "/image/shopify_logo.webp",
        value: "3.1X",
        label: "Revenue Growth",
    },
    {
        logo: null,
        value: "500+",
        label: "Products Ranked",
        emoji: "🎯",
    },
    {
        logo: "/image/meta_logo.webp",
        value: "180%",
        label: "Increase in Orders",
    },
];

export default function PortfolioHero() {
    return (
        <section className="relative bg-[#fffdfb] overflow-hidden pb-10">

            {/* background glow */}
            <div
                className="
    absolute
    left-28
    top-20
    w-72
    h-56
    opacity-50
  "
                style={{
                    backgroundImage:
                        "radial-gradient(#FDBA74 1.5px, transparent 1.5px)",
                    backgroundSize: "18px 18px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

                {/* HERO */}
                <div className="grid lg:grid-cols-[42%_58%] gap-6 items-center">

                    {/* LEFT */}
                    <div>

                        <span className="
                            text-orange-500
                            font-bold
                            tracking-wide
                            uppercase
                        ">
                            Our Portfolio
                        </span>

                        <h1 className="
                            mt-4
                            text-[48px]
                            lg:text-[68px]
                            leading-[0.9]
                            font-extrabold
                            text-[#081847]
                        ">
                            Real Work.
                            <br />

                            <span className="text-orange-500">
                                Real Results.
                            </span>
                        </h1>

                        <p className="
                            mt-8
                            text-base
                            leading-8
                            lg:text-[18px]
                            max-w-[520px]
                        ">
                            See how we help brands launch,
                            grow and scale on leading marketplaces,
                            build powerful websites,
                            and run performance marketing
                            that drives measurable growth.
                        </p>

                        <div className="mt-8">

                            <Button onClick={() => {
                                document
                                    .getElementById(
                                        "portfolio-explorer"
                                    )
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                            }}>

                                <span className="flex items-center gap-2">
                                    View Success Stories
                                    <ArrowRight size={18} />
                                </span>
                            </Button>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="relative h-[430px] hidden lg:block">

                        {/* Orbit */}
                        <div className="
                            absolute
                            top-10
                            left-1/2
                            -translate-x-1/2
                            w-[700px]
                            h-[280px]
                            border
                            border-orange-200
                            rounded-full
                            opacity-70
                        " />

                        {/* dotted bg */}
                        <div
                            className="
    absolute
    left-28
    top-20
    w-[260px]
    h-[180px]
    opacity-50
    "
                            style={{
                                backgroundImage:
                                    "radial-gradient(#FDBA74 1.6px, transparent 1.6px)",
                                backgroundSize: "18px 18px",
                            }}
                        />
                        {/* Decorative Stars */}

                        <Sparkles
                            className="
    absolute
    top-8
    left-[260px]
    w-5
    h-5
    text-orange-300
    "
                        />

                        <Sparkles
                            className="
    absolute
    top-20
    right-28
    w-4
    h-4
    text-orange-300
    "
                        />

                        <Sparkles
                            className="
    absolute
    bottom-20
    left-[380px]
    w-4
    h-4
    text-orange-300
    "
                        />

                        <Sparkles
                            className="
    absolute
    bottom-12
    right-16
    w-5
    h-5
    text-orange-300
    "
                        />

                        <motion.div
                            className="
  absolute
  left-[180px]
  top-[150px]
  z-10
  "
                            animate={{
                                y: [0, -5, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <svg
                                width="260"
                                height="160"
                                viewBox="0 0 260 160"
                            >
                                <defs>
                                    <linearGradient
                                        id="growthGradient"
                                        x1="0%"
                                        y1="100%"
                                        x2="100%"
                                        y2="0%"
                                    >
                                        <stop offset="0%" stopColor="#22c55e" />
                                        <stop offset="100%" stopColor="#16a34a" />
                                    </linearGradient>
                                </defs>

                                <path
                                    d="M20 130
         L70 95
         L100 110
         L145 55
         L180 75
         L240 20"
                                    fill="none"
                                    stroke="url(#growthGradient)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <path
                                    d="M220 20
         L240 20
         L240 40"
                                    fill="none"
                                    stroke="#16a34a"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>



                            <div className="absolute right-0 top-0">
                                <div className="
      bg-white
      px-2 py-1.5
      rounded-xl
      shadow-lg
      border
      border-green-100
    ">
                                    <div className="
        text-green-600
        font-bold
        text-base
      ">
                                        +245%
                                    </div>

                                    <div className="
        text-xs
        text-slate-500
      ">
                                        Avg Growth
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* TOP ROW */}

                        <motion.div
                            className="absolute top-8 left-20"
                            animate={{
                                y: [0, -8, 0, 4, 0],
                                rotate: [0, 0.3, 0, -0.3, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <MetricCard card={cards[0]} />
                        </motion.div>

                        <motion.div
                            className="absolute top-6 right-4"
                            animate={{
                                y: [0, -8, 0, 4, 0],
                                rotate: [0, 0.3, 0, -0.3, 0]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                delay: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <MetricCard card={cards[1]} />
                        </motion.div>

                        {/* BOTTOM ROW */}

                        <Sparkles
                            className="
    absolute
    left-[385px]
    top-[115px]
    w-4
    h-4
    text-orange-400
  "
                        />
                        <Sparkles
                            className="
    absolute
    left-[385px]
    top-[115px]
    w-4
    h-4
    text-orange-400
  "
                        />

                        <motion.div
                            className="absolute left-0 bottom-20"
                            animate={{
                                y: [0, -8, 0, 4, 0],
                                rotate: [0, 0.3, 0, -0.3, 0]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                delay: 1.2,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <MetricCard card={cards[2]} />
                        </motion.div>
                        <motion.div
                            className="absolute left-[235px] bottom-0"
                            animate={{
                                y: [0, -8, 0, 4, 0],
                                rotate: [0, 0.3, 0, -0.3, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: 1.8,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <MetricCard card={cards[3]} />
                        </motion.div>

                        <motion.div
                            className="absolute right-0 bottom-12"
                            animate={{
                                y: [0, -8, 0, 4, 0],
                                rotate: [0, 0.3, 0, -0.3, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: 2.4,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <MetricCard card={cards[4]} />
                        </motion.div>

                    </div>

                </div>

                {/* STATS */}

                <div className="
                    mt-16
                    grid
                    md:grid-cols-2
                    lg:grid-cols-4
                    gap-5
                ">

                    {stats.map((item) => (

                        <div
                            key={item.label}
                            className="
                                bg-white
                                border
                                border-slate-200
                                rounded-2xl
                                px-6
                                py-5
                                flex
                                items-center
                                gap-4
                            "
                        >
                            <div>
                                {item.icon}
                            </div>

                            <div>

                                <div className="
                                    text-xl
                                    font-bold
                                    text-[#081847]
                                ">
                                    {item.value}
                                </div>

                                <div className="
                                    text-sm
                                    text-slate-500
                                ">
                                    {item.label}
                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

function MetricCard({ card }) {
    return (
        <div
            className="
                bg-white
                rounded-[20px]
                shadow-[0_25px_70px_rgba(0,0,0,0.08)]
                w-[180px]
                px-4
py-4
                border
                border-orange-50
            "
        >
            <div className="flex items-start gap-5">

                <div className="shrink-0">

                    {card.logo ? (
                        <img
                            src={card.logo}
                            alt=""
                            className="h-10 object-contain"
                        />
                    ) : (
                        <div className="text-4xl">
                            {card.emoji}
                        </div>
                    )}

                </div>

                <div>

                    <div className="
                        text-[20px]
                        font-bold
                        text-green-400
                        leading-none
                    ">
                        {card.value}
                    </div>

                    <div className="
                        mt-2
                        text-sm
                        font-medium
                        text-slate-700
                    ">
                        {card.label}
                    </div>

                </div>

            </div>
        </div>
    );
}