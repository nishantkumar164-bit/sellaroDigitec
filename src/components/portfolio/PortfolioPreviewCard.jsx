export default function PortfolioPreviewCard({
    project,
    onClick,
}) {
    return (
        <div
            onClick={onClick}
            className="
                h-full
                bg-white
                rounded-[32px]
                border
                border-slate-200
                shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                overflow-hidden
                cursor-pointer

                hover:-translate-y-1
                transition-all
                duration-300
            "
        >
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
                    "
                >
                    {project.title}
                </h3>

                <div
                    className="
                        mt-5
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
        </div>
    );
}