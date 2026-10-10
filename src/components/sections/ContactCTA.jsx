import React from 'react';
import { CalendarDays } from 'lucide-react';

const ContactCTA = ({
    badge = 'Ready To Scale?',
    title = "Let's Build Your Brand's",
    highlightedText = 'Next Growth Chapter',
    description = 'Join 500+ brands that trust Sellaro Digitec for marketplace growth and expansion.',
    buttonText = 'Book Free Strategy Call',
    onButtonClick,
}) => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div
                    className="
            relative
            overflow-hidden
            rounded-[32px]
            bg-[#030B1F]
            border
            border-slate-800
          "
                >

                    {/* Orange Glow */}
                    <div
                        className="
              absolute
              top-0
              left-0
              w-72
              h-72
              bg-orange-500/20
              blur-3xl
              rounded-full
            "
                    />

                    {/* Blue Glow */}
                    <div
                        className="
              absolute
              bottom-0
              right-0
              w-72
              h-72
              bg-blue-500/10
              blur-3xl
              rounded-full
            "
                    />

                    {/* Dot Pattern */}
                    <div
                        className="
              absolute
              right-0
              top-0
              bottom-0
              w-1/2
              opacity-20
              bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)]
              bg-[size:16px_16px]
            "
                    />

                    <div
                        className="
              relative
              z-10
              px-8
              py-12
              md:px-14
              md:py-14
            "
                    >

                        <div
                            className="
                flex
                flex-col
                lg:flex-row
                lg:items-center
                lg:justify-between
                gap-10
              "
                        >

                            {/* Left Content */}
                            <div className="max-w-2xl">

                                <span
                                    className="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    rounded-full
                    border
                    border-orange-500/30
                    bg-orange-500/10
                    text-orange-400
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.25em]
                  "
                                >
                                    {badge}
                                </span>

                                <h2
                                    className="
                    mt-5
                    text-3xl
                    md:text-5xl
                    font-extrabold
                    leading-tight
                    text-white
                  "
                                >
                                    {title}
                                    <span className="text-orange-500">
                                        {' '}
                                        {highlightedText}
                                    </span>
                                </h2>

                            </div>

                            {/* Right Content */}
                            <div className="flex flex-col gap-5">

                                <p
                                    className="
                    text-slate-300
                    text-lg
                    max-w-md
                  "
                                >
                                    {description}
                                </p>

                                <button
                                    onClick={onButtonClick}
                                    className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-8
                    py-4
                    rounded-xl
                    bg-gradient-to-r
                    from-orange-500
                    to-orange-600
                    text-white
                    font-semibold
                    shadow-lg
                    shadow-orange-500/30
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                                >
                                    <CalendarDays size={18} />
                                    {buttonText}
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default ContactCTA;