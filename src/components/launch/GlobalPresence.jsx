import { CheckCircle2 } from "lucide-react";

export default function GlobalPresence() {
    return (
        <div
            className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-6
                shadow-sm
                h-full
            "
        >
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center h-full">

                {/* LEFT CONTENT */}

                <div>

                    <p className="text-sm font-semibold text-slate-700">
                        We Serve Globally
                    </p>

                    <h2
                        className="
                            mt-2
                            text-2xl
                            font-bold
                            text-slate-900
                            leading-tight
                        "
                    >
                        Global Presence, Local Support
                    </h2>

                    <div className="mt-6 space-y-5">

                        <div className="flex gap-3">
                            <CheckCircle2
                                className="
                                    w-5
                                    h-5
                                    mt-1
                                    text-orange-500
                                    shrink-0
                                "
                            />

                            <p className="text-sm text-slate-600">
                                Serving sellers in India, USA,
                                UK, UAE, Canada & Australia.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <CheckCircle2
                                className="
                                    w-5
                                    h-5
                                    mt-1
                                    text-orange-500
                                    shrink-0
                                "
                            />

                            <p className="text-sm text-slate-600">
                                Local experts who understand your
                                market and compliance.
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <CheckCircle2
                                className="
                                    w-5
                                    h-5
                                    mt-1
                                    text-orange-500
                                    shrink-0
                                "
                            />

                            <p className="text-sm text-slate-600">
                                End-to-end support before,
                                during & after launch.
                            </p>
                        </div>

                    </div>

                </div>

                {/* RIGHT IMAGE */}

                <div className="relative flex justify-center mt-6">

                    {/* Glow */}

                    <div
                        className="
            absolute
            w-64
            h-64
            bg-orange-100
            rounded-full
            blur-3xl
            opacity-60
        "
                    />

                    <img
                        src="/image/illustrations/global-presence-map.webp"
                        alt="Global Presence"
                        className="
            
            w-full
            max-w-[650px]
            object-contain
        "
                    />

                </div>

            </div>
        </div>
    );
}