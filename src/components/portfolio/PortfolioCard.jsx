import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
export default function PortfolioCard({
    project,
    onOpenCaseStudy,
    isCaseStudyOpen,
}) {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    return (
        <div className="relative lg:ml-[125px]">

            <div
                onMouseMove={(e) => {
                    const rect =
                        e.currentTarget.getBoundingClientRect();

                    setMousePosition({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top,
                    });
                }}
                className="
                    relative
                    z-20
                    w-full
                    lg:w-[97%]
                    bg-white
                    rounded-[32px]
                    border
                    border-slate-200
                    overflow-hidden
                    shadow-[0_30px_80px_rgba(249,115,22,0.12)]
                "
            >

                {/* CURSOR GLOW */}

                <div
                    className="
                        absolute
                        pointer-events-none
                        w-[300px]
                        h-[300px]
                        rounded-full
                        opacity-50
                        blur-[80px]
                    "
                    style={{
                        background:
                            "radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(249,115,22,0) 100%)",
                        left: mousePosition.x - 150,
                        top: mousePosition.y - 150,
                    }}
                />

                <div
                    className="
                        flex
                        flex-col
                        h-auto
                        lg:h-[400px]
                    "
                >

                    {/* HERO SECTION */}

                    <div
                        className="
                            relative
                            lg:h-[50%]
                            overflow-hidden
                            bg-gradient-to-br
                            from-orange-50
                            via-orange-50/30
                            to-white
                        "
                    >

                        {/* DESKTOP PRODUCT IMAGE */}

                        <img
                            src={project.heroImage || project.image}
                            alt={project.title}
                            className="
                                hidden
                                lg:block

                                absolute
                                right-6
                                top-4

                                w-[42%]
                                max-h-[180px]

                                object-contain

                                transition-all
                                duration-500

                                hover:scale-110
                                hover:-translate-y-2
                            "
                        />

                        {/* CONTENT */}

                        <div className="relative z-10 p-6">

                            <img
                                src={project.logo}
                                alt={project.platform}
                                className="h-8 object-contain"
                            />

                            <span
                                className="
                                    mt-4
                                    inline-flex
                                    px-3
                                    py-1.5
                                    rounded-full
                                    bg-white/80
                                    text-orange-600
                                    text-[13px]
                                    font-medium
                                "
                            >
                                {project.badge}
                            </span>

                            {/* MOBILE IMAGE */}

                            <div className="lg:hidden mt-4">
                                <img
                                    src={project.heroImage || project.image}
                                    alt={project.title}
                                    className="
                                        w-full
                                        max-h-[180px]
                                        object-contain
                                    "
                                />
                            </div>

                            <div
                                className="
                                    mt-3
                                    text-sm
                                    font-semibold
                                    text-slate-500
                                    uppercase
                                "
                            >
                                {project.client}
                            </div>

                            <h2
                                className="
                                    mt-4
                                    text-[18px]
                                    lg:text-[22px]
                                    font-bold
                                    text-slate-900
                                    leading-tight
                                    max-w-[520px]
                                "
                            >
                                {project.title}
                            </h2>

                        </div>

                    </div>

                    {/* BOTTOM SECTION */}

                    <div
                        className="
                            flex-1
                            px-6
                            py-5
                            flex
                            flex-col
                        "
                    >

                        <p
                            className="
                                text-[14px]
                                text-slate-500
                                leading-6
                                max-w-[700px]
                            "
                        >
                            {project.description}
                        </p>

                        {/* KPI STRIP */}

                        {project.cardMetrics && (
                            <div
                                className="
                                    mt-5
                                    grid
                                    grid-cols-3
                                    gap-2
                                    lg:gap-3
                                "
                            >

                                {project.cardMetrics.map((metric, index) => (

                                    <motion.div
                                        key={metric.label}
                                        initial={{
                                            opacity: 0,
                                            y: 12,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay: index * 0.08,
                                            duration: 0.3,
                                        }}
                                        className="
            group
            bg-orange-50
            border
            border-orange-100
            rounded-xl
            py-2
            px-3
            text-center

            transition-all
            duration-300

            hover:-translate-y-1
            hover:shadow-lg
        "
                                    >
                                        <div
                                            className="
                                                text-base
                                                lg:text-lg
                                                font-bold
                                                text-orange-600

                                                transition-transform
                                                duration-300

                                                group-hover:scale-110
                                            "
                                        >
                                            {metric.value}
                                        </div>

                                        <div
                                            className="
                                                text-[10px]
                                                uppercase
                                                tracking-wide
                                                text-slate-500
                                            "
                                        >
                                            {metric.label}
                                        </div>
                                    </motion.div>
                                ))}

                            </div>
                        )}

                        <button
                            onClick={onOpenCaseStudy}
                            className="
        mt-5
        inline-flex
        items-center
        justify-center
        gap-2

        w-full
        lg:w-fit

        px-7
        py-3

        rounded-xl
        bg-orange-500
        text-white
        font-semibold

        hover:bg-orange-600
        transition-all
    "
                        >
                            {isCaseStudyOpen
                                ? "Hide Case Study"
                                : "View Case Study"}

                            <ArrowRight
                                size={18}
                                className={`
            transition-transform
            duration-300
            ${isCaseStudyOpen ? "rotate-90" : ""}
        `}
                            />
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}