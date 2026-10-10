import {
    LayoutGroup,
    motion,
    AnimatePresence,
} from "framer-motion";

import PortfolioCard from "./PortfolioCard";
import PortfolioPreviewCard from "./PortfolioPreviewCard";

export default function PortfolioDeck({
    projects,
    moveToFront,
    onOpenCaseStudy,
    isCaseStudyOpen,
    outgoingCard,
    setOutgoingCard,
}) {
    const activeProject = projects[0];

    const previewProjects = projects.slice(1, 4);

    return (
        <LayoutGroup>

            {/* MOBILE */}

            <div className="lg:hidden">
                <PortfolioCard
                    project={activeProject}
                    onOpenCaseStudy={onOpenCaseStudy}
                    isCaseStudyOpen={isCaseStudyOpen}
                />
            </div>

            {/* DESKTOP */}

            <div
                className="
                    hidden
                    lg:block
                    relative
                    min-h-[520px]
                "
            >

                {/* PREVIEW STACK */}

                {previewProjects
                    .slice()
                    .reverse()
                    .map((project, reverseIndex) => {

                        const index =
                            previewProjects.length -
                            1 -
                            reverseIndex;

                        return (
                            <motion.div
                                key={project.category}
                                layout
                                aanimate={{
                                    scale: 1 - (index * 0.015),
                                    opacity: 1 - (index * 0.15),
                                }}
                                transition={{
                                    layout: {
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 18,
                                    },

                                    scale: {
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 18,
                                    },

                                    rotate: {
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 18,
                                    },
                                }}
                                className="absolute"
                                style={{
                                    width: "88%",
                                    height: "320px",

                                    top: `${index * 12}px`,
                                    left: `${index * 28}px`,

                                    zIndex: index,
                                }}
                            >
                                <PortfolioPreviewCard
                                    project={project}
                                    onClick={() =>
                                        moveToFront(
                                            project.category
                                        )
                                    }
                                />
                            </motion.div>
                        );
                    })}

                {/* OUTGOING CARD */}

                <AnimatePresence>

                    {outgoingCard && (

                        <motion.div
                            key={`outgoing-${outgoingCard.category}`}
                            className="
                                absolute
                                inset-0
                                z-[200]
                                pt-[60px]
                                pointer-events-none
                            "
                            initial={{
                                x: 0,
                                y: 0,
                                opacity: 1,
                                rotate: 0,
                                scale: 1,
                            }}
                            animate={{
                                x: 380,
                                y: -60,
                                rotate: 12,
                                opacity: 0,
                                scale: 0.88,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            onAnimationComplete={() =>
                                setOutgoingCard(null)
                            }
                        >
                            <PortfolioCard
                                project={outgoingCard}
                                onOpenCaseStudy={() => { }}
                                isCaseStudyOpen={false}
                            />
                        </motion.div>

                    )}

                </AnimatePresence>

                {/* ACTIVE CARD */}

                <motion.div
                    layout
                    animate={{
                        scale: 1,
                    }}
                    transition={{
                        layout: {
                            type: "spring",
                            stiffness: 180,
                            damping: 20,
                        },
                    }}
                    className="
        relative
        z-10
        pt-[60px]
    "
                >
                    <PortfolioCard
                        project={activeProject}
                        onOpenCaseStudy={
                            onOpenCaseStudy
                        }
                        isCaseStudyOpen={
                            isCaseStudyOpen
                        }
                    />
                </motion.div>

            </div>

        </LayoutGroup>
    );
}