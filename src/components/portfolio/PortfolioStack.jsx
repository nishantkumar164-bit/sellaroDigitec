import { motion } from "framer-motion";

export default function PortfolioStack({
    projects,
    activeProject,
}) {
    const stackProjects = projects
        .filter(
            (p) => p.category !== activeProject.category
        )
        .slice(0, 3);

    return (
        <div
            className="
                absolute
                inset-0
                pointer-events-none
            "
        >
            {stackProjects.map((project, index) => (
                <motion.div
                    key={project.id}
                    layout
                    transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                        absolute
                        bg-white
                        border
                        border-slate-200
                        rounded-[32px]
                        shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                        overflow-hidden
                    "
                    style={{
                        width: "88%",
                        height: "320px",

                        top: `${index * 12}px`,
                        left: `${index * 28}px`,

                        zIndex: index,

                        transform: `
                            translateY(${index * 6}px)
                            scale(${0.99 - index * 0.01})
                        `,
                    }}
                >
                    {/* IMAGE */}
                    <div
                        className="
                            h-[55%]
                            bg-gradient-to-br
                            from-orange-50
                            to-white
                            relative
                            overflow-hidden
                        "
                    >
                        <img
                            src={project.heroImage || project.image}
                            alt={project.title}
                            className="
                                absolute
                                right-4
                                top-3
                                w-[45%]
                                max-h-[120px]
                                object-contain
                                opacity-80
                            "
                        />

                        <div className="p-5">

                            <img
                                src={project.logo}
                                alt=""
                                className="h-6 object-contain"
                            />

                            <div
                                className="
                                    mt-4
                                    text-xs
                                    uppercase
                                    text-slate-500
                                    font-semibold
                                "
                            >
                                {project.client}
                            </div>

                            <h3
                                className="
                                    mt-2
                                    text-sm
                                    font-bold
                                    text-slate-900
                                    line-clamp-2
                                    max-w-[260px]
                                "
                            >
                                {project.title}
                            </h3>

                        </div>
                    </div>

                    {/* METRICS */}
                    <div className="p-4">

                        <div
                            className="
                                grid
                                grid-cols-3
                                gap-2
                            "
                        >
                            {project.cardMetrics
                                ?.slice(0, 3)
                                .map((metric) => (
                                    <div
                                        key={metric.label}
                                        className="
                                            bg-orange-50
                                            rounded-lg
                                            py-2
                                            text-center
                                        "
                                    >
                                        <div
                                            className="
                                                text-xs
                                                font-bold
                                                text-orange-600
                                            "
                                        >
                                            {metric.value}
                                        </div>

                                        <div
                                            className="
                                                text-[9px]
                                                text-slate-500
                                            "
                                        >
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                        </div>

                    </div>
                </motion.div>
            ))}
        </div>
    );
}