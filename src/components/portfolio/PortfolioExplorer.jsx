import { useState, useEffect } from "react";

import PortfolioSidebar from "./PortfolioSidebar";
import PortfolioDeck from "./PortfolioDeck";
import CaseStudy from "./CaseStudy";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioMobileTabs from "./PortfolioMobileTabs";

import { portfolioProjects } from "./portfolioData";

export default function PortfolioExplorer() {
    const [deckProjects, setDeckProjects] =
        useState(portfolioProjects);

    const [showCaseStudy, setShowCaseStudy] =
        useState(false);

    const activeProject = deckProjects[0];

    const moveToFront = (category) => {

        const selected = deckProjects.find(
            (p) => p.category === category
        );

        if (!selected) return;

        const currentActive = deckProjects[0];

        if (
            currentActive.category === category
        ) {
            return;
        }

        setOutgoingCard(currentActive);

        const remaining = deckProjects.filter(
            (p) =>
                p.category !== category &&
                p.category !== currentActive.category
        );

        requestAnimationFrame(() => {

            setDeckProjects([
                selected,
                ...remaining,
                currentActive,
            ]);

        });
    };

    const [outgoingCard, setOutgoingCard] =
        useState(null);

    useEffect(() => {
        setShowCaseStudy(false);
    }, [activeProject?.category]);

    return (
        <section id="portfolio-explorer" className="pt-6 pb-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div
                    className="
                        grid
                        grid-cols-1
                        lg:grid-cols-[280px_1fr]
                        gap-8
                        items-start
                    "
                >

                    {/* SIDEBAR */}

                    <div className="hidden lg:block">

                        <PortfolioSidebar
                            activeCategory={
                                activeProject?.category
                            }
                            moveToFront={moveToFront}
                        />

                    </div>
                    <div className="lg:hidden col-span-full">

                        <PortfolioMobileTabs
                            activeCategory={
                                activeProject?.category
                            }
                            moveToFront={moveToFront}
                        />

                    </div>

                    {/* CONTENT */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-8
                            overflow-hidden
                        "
                    >

                        {activeProject ? (
                            <>
                                {/* HEADER */}

                                <div className="mb-2">

                                    <AnimatePresence mode="wait">

                                        <motion.span
                                            key={`label-${activeProject.category}`}
                                            initial={{
                                                opacity: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                            }}
                                            className="
                text-sm
                font-semibold
                text-orange-500
                uppercase
                block
            "
                                        >
                                            Active Project
                                        </motion.span>

                                    </AnimatePresence>

                                    <AnimatePresence mode="wait">

                                        <motion.h2
                                            key={activeProject.category}
                                            initial={{
                                                opacity: 0,
                                                y: 12,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -12,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className="
                mt-2
                text-[24px]
                lg:text-[28px]
                font-bold
                text-slate-900
                leading-tight
            "
                                        >
                                            {activeProject.title}
                                        </motion.h2>

                                    </AnimatePresence>

                                </div>

                                {/* CARD DECK */}

                                <div
                                    className="
        relative
        isolate
        mt-4
        min-h-[520px]
    "
                                >
                                    <PortfolioDeck
                                        projects={deckProjects}
                                        moveToFront={moveToFront}
                                        outgoingCard={outgoingCard}
                                        setOutgoingCard={setOutgoingCard}
                                        onOpenCaseStudy={() =>
                                            setShowCaseStudy(
                                                !showCaseStudy
                                            )
                                        }
                                        isCaseStudyOpen={showCaseStudy}
                                    />
                                </div>

                                {/* CASE STUDY */}

                                <AnimatePresence>

                                    {showCaseStudy && (

                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: -80,
                                                scale: 0.96,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -40,
                                                scale: 0.98,
                                            }}
                                            transition={{
                                                duration: 0.55,
                                                delay: 0.05,
                                                ease: [0.22, 1, 0.36, 1],
                                            }}
                                            className="mt-6"
                                        >
                                            <CaseStudy
                                                project={activeProject}
                                            />
                                        </motion.div>

                                    )}

                                </AnimatePresence>

                            </>
                        ) : (
                            <div
                                className="
                                    min-h-[600px]
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <div className="text-center">

                                    <div
                                        className="
                                            w-20
                                            h-20
                                            rounded-full
                                            bg-orange-100
                                            flex
                                            items-center
                                            justify-center
                                            mx-auto
                                        "
                                    >
                                        <span className="text-3xl">
                                            🚀
                                        </span>
                                    </div>

                                    <h3
                                        className="
                                            mt-6
                                            text-2xl
                                            font-bold
                                            text-slate-900
                                        "
                                    >
                                        Case Study Coming Soon
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            max-w-md
                                            text-slate-500
                                            mx-auto
                                            leading-7
                                        "
                                    >
                                        We're currently
                                        preparing detailed
                                        success stories for
                                        this service category.
                                        Check back soon to
                                        explore project
                                        highlights,
                                        strategies and
                                        results.
                                    </p>

                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </section>
    );
}