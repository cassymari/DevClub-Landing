import { useEffect, useState } from "react";
import {
    FiArrowLeft,
    FiArrowRight,
    FiPlay,
    FiX,
    FiStar,
    FiCheck
} from "react-icons/fi";

import { extraContents } from "./contents";

import {
    ExtraSection,
    ExtraContainer,
    SectionHeader,
    SectionLabel,
    Title,
    Description,
    Carousel,
    CarouselHeader,
    CarouselCounter,
    CarouselControls,
    ArrowButton,
    CardsViewport,
    CardsTrack,
    ContentCard,
    CardVisual,
    CardNumber,
    CardGlow,
    CardOverlay,
    CardCategory,
    CardTitle,
    CardInformation,
    CardDescription,
    CardFooter,
    CardDetail,
    PlayButton,
    Categories,
    CategoryButton,

    ModalBackdrop,
    ModalContent,
    ModalClose,
    ModalImage,
    ModalBody,
    ModalCategory,
    ModalMeta,
    ModalRating,
    ModalStudents,
    ModalFeatures,
    ModalDivider,
    ModalTitle,
    ModalDescription,
    SectionTitle,
    ModalList,
    ModalAction,
    Particle,
    BackgroundParticles
} from "./styles";

export function ExtraContents() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [selectedContent, setSelectedContent] = useState(null);

    const cardWidth = 250;
    const gap = 18;
    const cardStep = cardWidth + gap;

    const categories = [
        "Todos",
        ...new Set(
            extraContents.map((content) => content.category)
        ),
    ];

    const filteredContents =
        activeCategory === "Todos"
            ? extraContents
            : extraContents.filter(
                (content) => content.category === activeCategory
            );

    const maxIndex = Math.max(
        filteredContents.length - cardsPerView,
        0
    );

    const safeCurrentIndex = Math.min(
        currentIndex,
        maxIndex
    );
    useEffect(() => {
        function updateCardsPerView() {
            const width = window.innerWidth;

            if (width <= 600) {
                setCardsPerView(1);
            } else if (width <= 850) {
                setCardsPerView(2);
            } else if (width <= 1100) {
                setCardsPerView(3);
            } else {
                setCardsPerView(4);
            }
        }

        updateCardsPerView();

        window.addEventListener("resize", updateCardsPerView);

        return () => {
            window.removeEventListener(
                "resize",
                updateCardsPerView
            );
        };
    }, []);



    useEffect(() => {
        function handleEscape(event) {
            if (event.key === "Escape") {
                setSelectedContent(null);
            }
        }

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = selectedContent
            ? "hidden"
            : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedContent]);

    function handleNext() {
        setCurrentIndex(
            safeCurrentIndex >= maxIndex
                ? 0
                : safeCurrentIndex + 1
        );
    }

    function handlePrevious() {
        setCurrentIndex(
            safeCurrentIndex <= 0
                ? maxIndex
                : safeCurrentIndex - 1
        );
    }

    function handleCategoryChange(category) {
        setActiveCategory(category);
        setCurrentIndex(0);
    }

    return (
        <ExtraSection id="extra-contents">
            <BackgroundParticles aria-hidden="true">
                {Array.from({ length: 32 }).map((_, index) => (
                    <Particle
                        key={index}
                        $left={(index * 37) % 100}
                        $top={(index * 23) % 100}
                        $delay={-(index * 0.7)}
                        $duration={10 + (index % 6)}
                        $size={3 + (index % 4)}
                    />
                ))}
            </BackgroundParticles>

            <ExtraContainer >
                <SectionHeader

                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <SectionLabel>
                        Ecossistema DevClub
                    </SectionLabel>

                    <Title>
                        Muito além
                        <span>do código.</span>
                    </Title>

                    <Description>
                        Conteúdos exclusivos para desenvolver
                        sua carreira, conquistar oportunidades e
                        transformar conhecimento técnico em
                        resultados reais.
                    </Description>
                </SectionHeader>

                <Categories>
                    {categories.map((category) => (
                        <CategoryButton
                            key={category}
                            type="button"
                            $active={
                                activeCategory === category
                            }
                            onClick={() =>
                                handleCategoryChange(category)
                            }
                        >
                            {category}
                        </CategoryButton>
                    ))}
                </Categories>

                <Carousel>
                    <CarouselHeader>
                        <CarouselCounter>
                            <strong>
                                {filteredContents.length === 0
                                    ? "00"
                                    : String(
                                        safeCurrentIndex + 1
                                    ).padStart(2, "0")}
                            </strong>

                            <span />

                            <strong>
                                {String(
                                    filteredContents.length
                                ).padStart(2, "0")}
                            </strong>
                        </CarouselCounter>

                        <CarouselControls>
                            <ArrowButton
                                type="button"
                                onClick={handlePrevious}
                                aria-label="Conteúdo anterior"
                                disabled={
                                    filteredContents.length <=
                                    cardsPerView
                                }
                            >
                                <FiArrowLeft />
                            </ArrowButton>

                            <ArrowButton
                                type="button"
                                onClick={handleNext}
                                aria-label="Próximo conteúdo"
                                disabled={
                                    filteredContents.length <=
                                    cardsPerView
                                }
                            >
                                <FiArrowRight />
                            </ArrowButton>
                        </CarouselControls>
                    </CarouselHeader>

                    <CardsViewport>
                        <CardsTrack
                            animate={{
                                x: -(safeCurrentIndex * cardStep),
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 110,
                                damping: 22,
                                mass: 0.8,
                            }}
                        >
                            {filteredContents.map(
                                (content, index) => (
                                    <ContentCard
                                        key={content.id}
                                        $accent={content.accent}
                                        $image={content.image}
                                        initial={{
                                            opacity: 0,
                                            y: 35,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.06,
                                        }}
                                        onClick={() =>
                                            setSelectedContent(
                                                content
                                            )
                                        }
                                    >
                                        <CardVisual
                                            $accent={
                                                content.accent
                                            }
                                            $image={content.image}
                                        >
                                            <CardGlow
                                                $accent={
                                                    content.accent
                                                }
                                            />

                                            <CardNumber>
                                                {String(
                                                    index + 1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </CardNumber>

                                            <CardOverlay />

                                            <CardCategory>
                                                {
                                                    content.category
                                                }
                                            </CardCategory>

                                            <CardTitle>
                                                {content.title}
                                            </CardTitle>
                                        </CardVisual>

                                        <CardInformation>
                                            <CardDescription>
                                                {
                                                    content.description
                                                }
                                            </CardDescription>

                                            <CardFooter>
                                                <div>
                                                    <CardDetail>
                                                        {
                                                            content.duration
                                                        }
                                                    </CardDetail>

                                                    <CardDetail>
                                                        {
                                                            content.level
                                                        }
                                                    </CardDetail>
                                                </div>

                                                <PlayButton
                                                    type="button"
                                                    aria-label={`Explorar ${content.title}`}
                                                    onClick={(
                                                        event
                                                    ) => {
                                                        event.stopPropagation();
                                                        setSelectedContent(
                                                            content
                                                        );
                                                    }}
                                                >
                                                    <FiPlay />
                                                </PlayButton>
                                            </CardFooter>
                                        </CardInformation>
                                    </ContentCard>
                                )
                            )}
                        </CardsTrack>
                    </CardsViewport>
                </Carousel>
            </ExtraContainer>

            {selectedContent && (
                <ModalBackdrop
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() =>
                        setSelectedContent(null)
                    }
                >
                    <ModalContent
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >
                        <ModalClose
                            type="button"
                            onClick={() =>
                                setSelectedContent(null)
                            }
                            aria-label="Fechar modal"
                        >
                            <FiX />
                        </ModalClose>

                        <ModalImage
                            $image={selectedContent.image}
                        />

                        <ModalBody
                            data-lenis-prevent
                            data-lenis-prevent-wheel
                            data-lenis-prevent-touch
                        >
                            <ModalCategory>
                                {selectedContent.category}
                            </ModalCategory>

                            <ModalMeta>
                                <ModalRating>
                                    <div>
                                        {Array.from({
                                            length: 5,
                                        }).map((_, index) => (
                                            <FiStar
                                                key={index}
                                            />
                                        ))}
                                    </div>

                                    <strong>
                                        {
                                            selectedContent.rating
                                        }
                                    </strong>
                                </ModalRating>

                                <ModalStudents>
                                    {
                                        selectedContent.students
                                    }
                                </ModalStudents>
                            </ModalMeta>

                            <ModalFeatures>
                                <span>
                                    {
                                        selectedContent.duration
                                    }
                                </span>

                                <span>
                                    {
                                        selectedContent.projectType
                                    }
                                </span>

                                <span>
                                    {
                                        selectedContent.certificate
                                    }
                                </span>
                            </ModalFeatures>

                            <ModalDivider />

                            <ModalTitle>
                                {selectedContent.title}
                            </ModalTitle>

                            <ModalDescription>
                                {selectedContent.description}
                            </ModalDescription>

                            <ModalDivider />

                            <SectionTitle>
                                O que você vai aprender
                            </SectionTitle>

                            <ModalList>
                                {selectedContent.topics.map((topic, index) => (
                                    <li key={index}>
                                        <FiCheck />
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ModalList>

                            <SectionTitle>
                                Você irá construir
                            </SectionTitle>

                            <ModalList>
                                {selectedContent.build.map((project, index) => (
                                    <li key={index}>
                                        <FiPlay />
                                        <span>{project}</span>
                                    </li>
                                ))}
                            </ModalList>

                            <ModalAction>
                                <span>Começar curso</span>
                                <FiArrowRight />
                            </ModalAction>
                        </ModalBody>
                    </ModalContent>
                </ModalBackdrop>
            )}

        </ExtraSection>


    );
}