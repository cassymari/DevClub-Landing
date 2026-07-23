import { useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { EnrollmentModal } from "../../ui/EnrollmentModal";

import { formations } from "./formations";
import { backgroundParticles } from "./backgroundParticles";

import {
  sectionHeaderAnimation,
  carouselTransition,
} from "./animations";

import {
  FormationsSection,
  FormationsContainer,
  FormationsBackground,
  BackgroundGlow,
  BackgroundGrid,
  BackgroundParticle,
  SectionHeader,
  SectionLabel,
  Title,
  Description,
  CardsViewport,
  CardsTrack,
  FormationCard,
  CardBackground,
  CardContent,
  CardCategory,
  CardTitle,
  CardDescription,
  CardDetails,
  Detail,
  Technologies,
  Technology,
  CardButton,
  CarouselCounter,
  ArrowButton,
} from "./styles";

const CARD_WIDTH = 380;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

export function Formations() {
  const viewportRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState("");

  const maxIndex = formations.length - 1;

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return undefined;

    function updateViewportWidth() {
      const width = viewport.getBoundingClientRect().width;

      setViewportWidth(width);
    }

    updateViewportWidth();

    window.addEventListener("resize", updateViewportWidth);

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  function handleNext() {
    setCurrentIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  }

  function handlePrevious() {
    setCurrentIndex((current) =>
      current <= 0 ? maxIndex : current - 1
    );
  }

  function handleExploreFormation(event, formation) {
    event.preventDefault();
    event.stopPropagation();

    setSelectedFormation(formation.value);
    setIsModalOpen(true);
  }

  const centeredPosition =
    viewportWidth > 0
      ? viewportWidth / 2 -
        CARD_WIDTH / 2 -
        currentIndex * CARD_STEP
      : 0;

  return (
    <>
      <FormationsSection id="formations">
        <FormationsBackground aria-hidden="true">
          <BackgroundGlow />
          <BackgroundGrid />

          {backgroundParticles.map((particle) => (
            <BackgroundParticle
              key={particle.id}
              $left={particle.left}
              $top={particle.top}
              $delay={particle.delay}
              $duration={particle.duration}
              $size={particle.size}
            />
          ))}
        </FormationsBackground>

        <FormationsContainer>
          <SectionHeader {...sectionHeaderAnimation}>
            <SectionLabel>Formações DevClub</SectionLabel>

            <Title>
              Uma plataforma.
              <span>Infinitas possibilidades.</span>
            </Title>

            <Description>
              Explore formações criadas para desenvolver habilidades técnicas,
              acelerar sua carreira e preparar você para as oportunidades do
              mercado de tecnologia.
            </Description>
          </SectionHeader>

          <CardsViewport ref={viewportRef}>
            <ArrowButton
              type="button"
              $side="left"
              onClick={handlePrevious}
              aria-label="Formação anterior"
            >
              <FiArrowLeft />
            </ArrowButton>

            <ArrowButton
              type="button"
              $side="right"
              onClick={handleNext}
              aria-label="Próxima formação"
            >
              <FiArrowRight />
            </ArrowButton>

            <CardsTrack
              animate={{
                x: centeredPosition,
              }}
              transition={carouselTransition}
            >
              {formations.map((formation, index) => {
                const isActive = currentIndex === index;

                return (
                  <FormationCard
                    key={formation.id}
                    $featured={formation.featured}
                    $active={isActive}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <CardBackground />

                    <CardContent>
                      <CardCategory>
                        {formation.category}
                      </CardCategory>

                      <CardTitle>{formation.title}</CardTitle>

                      <CardDescription>
                        {formation.description}
                      </CardDescription>

                      <CardDetails>
                        <Detail>{formation.duration}</Detail>
                        <Detail>{formation.level}</Detail>
                      </CardDetails>

                      <Technologies>
                        {formation.technologies.map((technology) => (
                          <Technology key={technology}>
                            {technology}
                          </Technology>
                        ))}
                      </Technologies>

                      <CardButton
                        type="button"
                        onClick={(event) =>
                          handleExploreFormation(event, formation)
                        }
                      >
                        Explorar formação
                        <span>↗</span>
                      </CardButton>
                    </CardContent>
                  </FormationCard>
                );
              })}
            </CardsTrack>

            <CarouselCounter>
              {String(currentIndex + 1).padStart(2, "0")}

              <span />

              {String(formations.length).padStart(2, "0")}
            </CarouselCounter>
          </CardsViewport>
        </FormationsContainer>
      </FormationsSection>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialFormation={selectedFormation}
      />
    </>
  );
}