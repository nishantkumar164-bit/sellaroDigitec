import {
    CheckCircle2,
    Quote,
    TrendingUp,
    Target,
    Rocket,
} from "lucide-react";

export default function CaseStudy({ project }) {
    return (
        <div className="space-y-8">

            {/* HERO */}

            <div
                className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-gradient-to-br
                    from-orange-50
                    via-white
                    to-white
                    p-6
                    lg:p-10
                "
            >
                <div className="relative z-10">

                    <div className="flex flex-wrap items-center gap-3">

                        <img
                            src={project.logo}
                            alt={project.platform}
                            className="h-8 object-contain"
                        />

                        <span
                            className="
                                px-3
                                py-1
                                rounded-full
                                bg-orange-100
                                text-orange-600
                                text-xs
                                font-semibold
                            "
                        >
                            CASE STUDY
                        </span>

                    </div>

                    <h2
                        className="
                            mt-5
                            text-2xl
                            lg:text-4xl
                            font-bold
                            text-slate-900
                            leading-tight
                        "
                    >
                        {project.title}
                    </h2>

                    <p
                        className="
                            mt-4
                            max-w-3xl
                            text-slate-600
                            leading-7
                        "
                    >
                        {project.description}
                    </p>

                    {/* KPI STRIP */}

                    <div
                        className="
                            mt-8
                            grid
                            grid-cols-2
                            lg:grid-cols-4
                            gap-4
                        "
                    >
                        {project.results?.map((item) => (
                            <div
                                key={item.label}
                                className="
                                    rounded-2xl
                                    bg-white
                                    border
                                    border-orange-100
                                    p-4
                                    shadow-sm

                                    transition-all
                                    duration-300

                                    hover:-translate-y-1
                                    hover:shadow-xl
                                "
                            >
                                <div
                                    className="
                                        text-2xl
                                        font-bold
                                        text-orange-600
                                    "
                                >
                                    {item.value}
                                </div>

                                <div
                                    className="
                                        mt-2
                                        text-sm
                                        text-slate-600
                                    "
                                >
                                    {item.label}
                                </div>

                                <div
                                    className="
                                        mt-2
                                        text-[11px]
                                        uppercase
                                        tracking-wide
                                        text-slate-400
                                    "
                                >
                                    Performance Lift
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <img
                    src={project.logo}
                    alt=""
                    className="
                        hidden
                        lg:block
                        absolute
                        right-8
                        top-8
                        h-32
                        opacity-[0.05]
                    "
                />
            </div>

            {/* CHALLENGE + STRATEGY */}

            <div className="grid lg:grid-cols-2 gap-6">

                {/* CHALLENGE */}

                <div
                    className="
                        rounded-[28px]
                        border
                        border-slate-200
                        bg-white
                        p-6
                        lg:p-8
                    "
                >
                    <div className="flex items-center gap-3">

                        <div
                            className="
                                w-12
                                h-12
                                rounded-xl
                                bg-red-50
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <Target className="w-5 h-5 text-red-500" />
                        </div>

                        <h3
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                            "
                        >
                            Challenge
                        </h3>

                    </div>

                    <p
                        className="
                            mt-5
                            text-slate-600
                            leading-8
                        "
                    >
                        {project.challenge}
                    </p>

                </div>

                {/* STRATEGY */}

                <div
                    className="
                        rounded-[28px]
                        border
                        border-slate-200
                        bg-white
                        p-6
                        lg:p-8
                    "
                >
                    <div className="flex items-center gap-3">

                        <div
                            className="
                                w-12
                                h-12
                                rounded-xl
                                bg-green-50
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <Rocket className="w-5 h-5 text-green-500" />
                        </div>

                        <h3
                            className="
                                text-xl
                                font-bold
                                text-slate-900
                            "
                        >
                            Strategy & Execution
                        </h3>

                    </div>

                    <div className="mt-5 space-y-4">

                        {project.solution?.map((item) => (
                            <div
                                key={item}
                                className="
                                    flex
                                    items-start
                                    gap-3
                                "
                            >
                                <CheckCircle2
                                    className="
                                        w-5
                                        h-5
                                        text-green-500
                                        mt-1
                                        shrink-0
                                    "
                                />

                                <span
                                    className="
                                        text-slate-600
                                        leading-7
                                    "
                                >
                                    {item}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

            {/* RESULTS DASHBOARD */}

            <div
                className="
                    rounded-[32px]
                    border
                    border-slate-200
                    bg-white
                    p-6
                    lg:p-8
                "
            >
                <div className="flex items-center gap-3">

                    <TrendingUp className="text-orange-500" />

                    <h3
                        className="
                            text-xl
                            font-bold
                            text-slate-900
                        "
                    >
                        Results Dashboard
                    </h3>

                </div>

                <div
                    className="
                        mt-8
                        grid
                        grid-cols-2
                        lg:grid-cols-4
                        gap-4
                    "
                >
                    {project.results?.map((result) => (
                        <div
                            key={result.label}
                            className="
                                rounded-2xl
                                bg-slate-50
                                border
                                border-slate-200
                                p-5
                                text-center

                                transition-all
                                duration-300

                                hover:-translate-y-1
                            "
                        >
                            <div
                                className="
                                    text-3xl
                                    font-bold
                                    text-slate-900
                                "
                            >
                                {result.value}
                            </div>

                            <div
                                className="
                                    mt-2
                                    text-sm
                                    text-slate-500
                                "
                            >
                                {result.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* TESTIMONIAL */}

            {project.testimonial && (
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        bg-slate-900
                        p-6
                        lg:p-10
                        text-white
                    "
                >
                    <img
                        src={project.logo}
                        alt=""
                        className="
                            absolute
                            right-8
                            bottom-8
                            h-24
                            opacity-10
                        "
                    />

                    <Quote
                        className="
                            absolute
                            top-8
                            right-8
                            w-16
                            h-16
                            text-white/10
                        "
                    />

                    <div className="relative z-10">

                        <h3
                            className="
                                text-lg
                                font-semibold
                                text-orange-400
                            "
                        >
                            Client Feedback
                        </h3>

                        <p
                            className="
                                mt-5
                                text-lg
                                lg:text-2xl
                                leading-9
                                italic
                            "
                        >
                            "{project.testimonial.quote}"
                        </p>

                        <div className="mt-8">

                            <div className="font-semibold">
                                {project.testimonial.name}
                            </div>

                            <div
                                className="
                                    text-sm
                                    text-slate-400
                                "
                            >
                                {project.testimonial.designation}
                            </div>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}