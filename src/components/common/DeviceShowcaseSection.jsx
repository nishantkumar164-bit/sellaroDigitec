import React, { useEffect, useState } from 'react';

const DeviceShowcaseSection = ({
    badge,
    title,
    subtitle,

    showcaseSlides = [],

    sectionTitle,
    sectionDescription,

    metrics = [],

    highlights = []
}) => {

    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {

        if (showcaseSlides.length <= 1) return;

        const interval = setInterval(() => {

            setActiveSlide(prev =>
                (prev + 1) % showcaseSlides.length
            );

        }, 8000);

        return () => clearInterval(interval);

    }, [showcaseSlides.length]);

    const currentSlide =
        showcaseSlides[activeSlide];

    return (

        <section className="py-1 bg-slate-50 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span
                        className="
                            inline-flex
                            px-4
                            py-2
                            rounded-full
                            bg-orange-50
                            border
                            border-orange-100
                            text-orange-500
                            text-xs
                            font-bold
                            uppercase
                            tracking-[0.25em]
                        "
                    >
                        {badge}
                    </span>

                    <h2 className="mt-4 text-4xl font-black text-slate-900">
                        {title}
                    </h2>

                    <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                        {subtitle}
                    </p>

                </div>

                {/* Showcase */}

                {/* Showcase Layout */}

                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* LEFT SIDE */}

                    <div className="lg:col-span-7">

                        <div className="relative">

                            {/* Glow */}

                            <div
                                className="
          absolute
          inset-0
          bg-orange-100/30
          blur-3xl
          rounded-full
        "
                            />

                            {/* iPad */}

                            <div
                                className="
          relative
          bg-slate-900
          rounded-[3rem]
          p-4
          border
          border-slate-700
          shadow-[0_40px_80px_rgba(0,0,0,0.18)]
        "
                            >

                                {/* Camera */}

                                <div
                                    className="
            absolute
            top-4
            left-1/2
            -translate-x-1/2
            w-3
            h-3
            rounded-full
            bg-slate-700
          "
                                />

                                {/* Screen */}

                                <div
                                    className="
            bg-white
            rounded-[2rem]
            overflow-hidden
          "
                                >

                                    {currentSlide?.video ? (
    <video
        src={currentSlide.video}
        autoPlay
        muted
        loop
        playsInline
        className="
            w-full
            aspect-[16/9]
            object-cover
        "
    />
) : (
    <img
        src={currentSlide?.image}
        alt={currentSlide?.title}
        className="
            w-full
            aspect-[16/9]
            object-cover
            transition-all
            duration-700
        "
    />
)}

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="lg:col-span-5 flex flex-col justify-center">

                        <h3
                            className="
        mt-5
        text-4xl
        font-black
        text-slate-900
      "
                        >
                            {sectionTitle}
                        </h3>

                        <p
                            className="
        mt-4
        text-slate-600
        leading-relaxed
      "
                        >
                            {sectionDescription}
                        </p>

                        {/* Metrics */}

                        <div className="grid grid-cols-2 gap-4 mt-8">

                            {metrics.map((item, idx) => (

                                <div
                                    key={idx}
                                    className="
      bg-white
      rounded-2xl
      border
      border-slate-200
      p-5
      hover:shadow-xl
      hover:border-orange-200
      transition-all
      duration-300
    "
                                >

                                    <div className="flex items-center justify-between">

                                        <img
                                            src={item.logo}
                                            alt={item.label}
                                            className="w-10 h-10 object-contain"
                                        />

                                        <h4
                                            className="
          text-3xl
          font-black
          text-orange-500
        "
                                        >
                                            {item.value}
                                        </h4>

                                    </div>

                                    <p
                                        className="
        mt-4
        text-sm
        text-slate-600
        font-medium
      "
                                    >
                                        {item.label}
                                    </p>

                                </div>

                            ))}

                        </div>

                        {/* Highlights */}

                        <div className="mt-8 space-y-4">

                            {highlights.map((item, idx) => (

                                <div
                                    key={idx}
                                    className="flex items-center gap-3"
                                >

                                    <div
                                        className="
              w-7
              h-7
              rounded-full
              bg-orange-50
              flex
              items-center
              justify-center
              text-orange-500
              font-bold
            "
                                    >
                                        ✓
                                    </div>

                                    <span className="text-slate-700">
                                        {item}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
                {/* Indicators */}

                <div className="flex justify-center mt-10 gap-3">

                    {showcaseSlides.map((_, idx) => (

                        <button
                            key={idx}
                            onClick={() =>
                                setActiveSlide(idx)
                            }
                            className={`
                                h-2 rounded-full transition-all duration-300
                                ${activeSlide === idx
                                    ? 'w-10 bg-orange-500'
                                    : 'w-2 bg-slate-300'}
                            `}
                        />

                    ))}

                </div>

            </div>

        </section>

    );
};

export default DeviceShowcaseSection;