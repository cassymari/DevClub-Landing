import styled from "styled-components";
import { motion } from "framer-motion";

export const ExtraSection = styled.section`
  position: relative;
  
  

  padding: 130px 0 150px;
  overflow: hidden;

  &::before {
    content: "";

    position: absolute;
    inset: -30%;

    background-image:
        linear-gradient(
            rgba(255,255,255,.025) 1px,
            transparent 1px
        ),
        linear-gradient(
            90deg,
            rgba(255,255,255,.025) 1px,
            transparent 1px
        );

    background-size: 70px 70px;

    animation: gridMove 25s linear infinite;

    opacity: .35;

    pointer-events:none;
}

&::after{
    content:"";

    position:absolute;
    inset:0;

    background:
        radial-gradient(
            circle at 15% 25%,
            rgba(139,92,246,.18),
            transparent 30%
        ),
        radial-gradient(
            circle at 85% 70%,
            rgba(34,197,94,.12),
            transparent 35%
        ),
        radial-gradient(
            circle at 60% 15%,
            rgba(56,189,248,.10),
            transparent 28%
        );

    animation:floatingLights 12s ease-in-out infinite alternate;

    pointer-events:none;
}

  padding: 130px 0 150px;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(34, 197, 94, 0.08),
      transparent 28%
    ),
    radial-gradient(
      circle at 10% 75%,
      rgba(139, 92, 246, 0.14),
      transparent 32%
    ),
    #030611;

    @keyframes gridMove{

    from{
        transform:translate3d(0,0,0);
    }

    to{
        transform:translate3d(70px,70px,0);
    }

}

@keyframes floatingLights{

    from{
        transform:translateY(0) scale(1);
    }

    to{
        transform:translateY(-30px) scale(1.12);
    }

}

&::after {
  content: "";

  position: absolute;
  z-index: 0;
  top: 5%;
  left: -15%;

  width: 480px;
  height: 480px;

  border-radius: 50%;

  background: rgba(124, 58, 237, 0.2);
  filter: blur(110px);

  animation: sectionGlowMove 9s ease-in-out infinite alternate;

  pointer-events: none;
}

@keyframes sectionGlowMove {
  from {
    transform: translate3d(0, 0, 0) scale(1);
  }

  to {
    transform: translate3d(70vw, 100px, 0) scale(1.3);
  }
}
`;

export const ExtraContainer = styled.div`
  position: relative;
  z-index: 2000;

  width: min(1200px, 100%);
  margin: 0 auto;
  padding: 0 24px;
`;

export const SectionHeader = styled(motion.div)`
  max-width: 790px;
  margin-bottom: 65px;
`;

export const SectionLabel = styled.span`
  display: inline-block;
  margin-bottom: 18px;

  color: #a78bfa;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  color: #ffffff;

  font-size: clamp(42px, 6vw, 76px);
  line-height: 0.98;
  letter-spacing: -3px;

  span {
    display: block;

    color: transparent;

    background: linear-gradient(
      90deg,
      #a78bfa,
      #8b5cf6,
      #38bdf8
    );

    background-clip: text;
    -webkit-background-clip: text;
  }

  @media (max-width: 600px) {
    letter-spacing: -1.8px;
  }
`;

export const Description = styled.p`
  max-width: 670px;

  color: #9ca3af;

  font-size: 17px;
  line-height: 1.8;
`;

export const Categories = styled.div`
  margin-bottom: 38px;

  display: flex;
  align-items: center;
  gap: 10px;

  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 600px) {
    margin-right: -24px;
    padding-right: 24px;
  }
`;

export const CategoryButton = styled.button`
  min-height: 43px;
  padding: 0 18px;
  flex: 0 0 auto;

  color: ${({ $active }) =>
    $active ? "#ffffff" : "#8f98aa"};

  border: 1px solid
    ${({ $active }) =>
    $active
      ? "rgba(167, 139, 250, 0.65)"
      : "rgba(255, 255, 255, 0.08)"};

  border-radius: 999px;

  background: ${({ $active }) =>
    $active
      ? "rgba(124, 58, 237, 0.22)"
      : "rgba(255, 255, 255, 0.025)"};

  box-shadow: ${({ $active }) =>
    $active
      ? "0 0 30px rgba(124, 58, 237, 0.16)"
      : "none"};

  font-size: 12px;
  font-weight: 650;
  cursor: pointer;

  transition:
    color 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);
    border-color: rgba(167, 139, 250, 0.45);
    background: rgba(124, 58, 237, 0.12);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const Carousel = styled.div`
  position: relative;
`;

export const CarouselHeader = styled.div`
  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const CarouselCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  strong {
    color: #c4b5fd;

    font-size: 12px;
    letter-spacing: 1px;
  }

  span {
    width: 70px;
    height: 2px;

    border-radius: 999px;

    background: linear-gradient(
      90deg,
      #8b5cf6,
      #38bdf8
    );
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ArrowButton = styled.button`
  width: 50px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  border: 1px solid rgba(167, 139, 250, 0.35);
  border-radius: 50%;

  background: rgba(11, 16, 32, 0.85);
  backdrop-filter: blur(14px);

  font-size: 20px;
  cursor: pointer;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    transform: translateY(-3px);

    background: rgba(124, 58, 237, 0.7);
    border-color: #c4b5fd;
  }

  &:active {
    transform: scale(0.94);
  }
`;

export const CardsViewport = styled.div`
  width: 100%;
  overflow: hidden;

  padding: 25px 0 55px;
`;

export const CardsTrack = styled(motion.div)`
  width: max-content;

  display: flex;
  align-items: stretch;
  gap: 18px;

  will-change: transform;
`;
export const ContentCard = styled(motion.article)`
  position: relative;

  width: 250px;
  flex: 0 0 250px;
  min-height: 460px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  overflow: hidden;
  cursor: pointer;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 25px;

  background-image:
    linear-gradient(
      to top,
      rgba(3, 6, 17, 0.99) 0%,
      rgba(3, 6, 17, 0.9) 30%,
      rgba(3, 6, 17, 0.28) 68%,
      rgba(3, 6, 17, 0.04) 100%
    ),
    linear-gradient(
      145deg,
      ${({ $accent }) => `${$accent}28`},
      transparent 48%
    ),
    url(${({ $image }) => $image});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: 0 22px 50px rgba(0, 0, 0, 0.3);

  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background-size 0.65s cubic-bezier(0.22, 1, 0.36, 1);

  &:hover {
    z-index: 10;

    transform: translateY(-14px) scale(1.055);

    background-size: 112%;

    border-color: ${({ $accent }) => `${$accent}99`};

    box-shadow:
      0 35px 80px rgba(0, 0, 0, 0.5),
      0 0 45px ${({ $accent }) => `${$accent}30`};
  }

  @media (max-width: 600px) {
    width: calc(100vw - 75px);
    flex-basis: calc(100vw - 75px);
  }
`;
export const CardVisual = styled.div`
  position: relative;

  min-height: 305px;
  padding: 26px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  overflow: hidden;

  background: transparent;
`;

export const CardGlow = styled.div`
  position: absolute;
  top: -70px;
  right: -70px;

  width: 210px;
  height: 210px;

  border-radius: 50%;

  background: ${({ $accent }) => $accent};
  filter: blur(75px);
  opacity: 0.4;

  pointer-events: none;

  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  ${ContentCard}:hover & {
    transform: scale(1.25);
    opacity: 0.65;
  }
`;
export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to top,
      rgba(3, 6, 17, 0.95),
      transparent 68%
    ),
    linear-gradient(
      130deg,
      rgba(255, 255, 255, 0.08),
      transparent 38%
    );

  pointer-events: none;
`;

export const CardNumber = styled.span`
  position: absolute;
  z-index: 2;
  top: 22px;
  right: 22px;

  color: rgba(255, 255, 255, 0.18);

  font-size: 48px;
  font-weight: 800;
  letter-spacing: -3px;
`;

export const CardCategory = styled.span`
  position: relative;
  z-index: 2;

  width: fit-content;
  margin-bottom: 10px;
  padding: 7px 10px;

  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  background: rgba(5, 8, 22, 0.58);
  backdrop-filter: blur(10px);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const CardTitle = styled.h3`
  position: relative;
  z-index: 2;

  max-width: 190px;

  color: #ffffff;

  font-size: 28px;
  line-height: 1.03;
  letter-spacing: -1px;

  text-shadow:
    0 3px 12px rgba(0, 0, 0, 0.85),
    0 1px 3px rgba(0, 0, 0, 0.9);

  transform: translateY(0);

  transition: transform 0.4s ease;

  ${ContentCard}:hover & {
    transform: translateY(-5px);
  }
`;

export const CardInformation = styled.div`
  position: relative;
  z-index: 3;

  min-height: 155px;
  padding: 0 22px 22px;

  display: flex;
  flex-direction: column;

  background: transparent;
`;

export const CardDescription = styled.p`
  margin-bottom: 19px;

  color: #949cad;

  font-size: 13px;
  line-height: 1.55;
`;

export const CardFooter = styled.div`
  margin-top: auto;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
`;

export const CardDetail = styled.span`
  padding: 6px 8px;

  color: #c2c9d5;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.035);

  font-size: 9px;
  font-weight: 600;
`;

export const PlayButton = styled.button`
  width: 40px;
  height: 40px;
  flex: 0 0 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  border: 1px solid rgba(167, 139, 250, 0.35);
  border-radius: 50%;

  background: rgba(124, 58, 237, 0.15);

  font-size: 15px;
  cursor: pointer;

  opacity: 0;
  transform: translateY(10px);

  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    background 0.3s ease;

  ${ContentCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background: #7c3aed;
  }
`;

export const ModalBody = styled.div`
  position: relative;
  z-index: 1;

  min-width: 0;
  height: 100%;
  padding: 65px 48px 38px;

  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;

   overscroll-behavior: contain;
  touch-action: pan-y;

  scrollbar-width: thin;
  scrollbar-color: rgba(139, 92, 246, 0.65)
    rgba(255, 255, 255, 0.04);

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.035);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: linear-gradient(
      #8b5cf6,
      #38bdf8
    );
  }

  @media (max-width: 800px) {
    height: auto;
    overflow: visible;
  }

  @media (max-width: 600px) {
    padding: 38px 24px 28px;
  }
`;

export const ModalBackdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(2, 4, 12, 0.82);
  backdrop-filter: blur(16px);

  overflow-y: auto;

  @media (max-width: 600px) {
    padding: 12px;
    align-items: flex-start;
  }
`;
export const ModalContent = styled(motion.div)`
  position: relative;
  isolation: isolate;

  width: min(980px, 100%);
  height: min(590px, calc(100vh - 48px));

  display: grid;
  grid-template-columns: minmax(320px, 0.9fr) minmax(0, 1.1fr);

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;

  background:
    radial-gradient(
      circle at 80% 10%,
      rgba(139, 92, 246, 0.16),
      transparent 30%
    ),
    #070b17;

  box-shadow:
    0 40px 120px rgba(0, 0, 0, 0.65),
    0 0 50px rgba(124, 58, 237, 0.12);

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    max-height: calc(100vh - 24px);

    grid-template-columns: 1fr;

    overflow-y: auto;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  z-index: 5;
  top: 20px;
  right: 20px;

  width: 44px;
  height: 44px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;

  background: rgba(3, 6, 17, 0.72);
  backdrop-filter: blur(12px);

  font-size: 20px;
  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: rotate(90deg);
    background: rgba(124, 58, 237, 0.8);
    border-color: rgba(196, 181, 253, 0.8);
  }
`;
export const ModalImage = styled.div`
  position: relative;
  z-index: 1;

  min-width: 0;
  height: 100%;

  background-image:
    linear-gradient(
      to top,
      rgba(3, 6, 17, 0.94),
      rgba(3, 6, 17, 0.08) 55%
    ),
    url(${({ $image }) => $image});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    height: 330px;
    min-height: 330px;
  }

  @media (max-width: 600px) {
    height: 260px;
    min-height: 260px;
  }
`;

export const ModalCategory = styled.span`
  width: fit-content;
  margin-bottom: 18px;
  padding: 8px 12px;

  color: #ddd6fe;

  border: 1px solid rgba(167, 139, 250, 0.25);
  border-radius: 999px;

  background: rgba(124, 58, 237, 0.12);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const ModalMeta = styled.div`
  margin-bottom: 18px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ModalRating = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    color: #fbbf24;
  }

  svg {
    fill: currentColor;
    stroke-width: 1.5;
  }

  strong {
    color: #ffffff;
    font-size: 13px;
  }
`;

export const ModalStudents = styled.span`
  color: #9ca3af;

  font-size: 12px;
  font-weight: 600;
`;

export const ModalFeatures = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  span {
    padding: 7px 10px;

    color: #cbd5e1;

    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;

    background: rgba(255, 255, 255, 0.035);

    font-size: 10px;
    font-weight: 600;
  }
`;

export const ModalDivider = styled.div`
  width: 100%;
  height: 1px;
  margin: 28px 0;

  background: linear-gradient(
    90deg,
    rgba(139, 92, 246, 0.65),
    rgba(56, 189, 248, 0.25),
    transparent
  );
`;

export const ModalTitle = styled.h3`
  margin-bottom: 18px;

  color: #ffffff;

  font-size: clamp(32px, 4vw, 48px);
  line-height: 1;
  letter-spacing: -1.8px;
`;

export const ModalDescription = styled.p`
  color: #aab2c2;

  font-size: 15px;
  line-height: 1.75;
`;
export const SectionTitle = styled.h4`
    margin: 26px 0 18px;

    color: #ffffff;

    font-size: 17px;
    font-weight: 700;
`;
export const ModalList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 14px;

    margin-bottom: 28px;

    li {
        display: flex;
        align-items: center;
        gap: 12px;

        color: #cbd5e1;

        font-size: 14px;
        line-height: 1.6;
    }

    svg {
        flex-shrink: 0;

        color: #8b5cf6;
        font-size: 18px;
    }

    span {
        flex: 1;
    }
`;
export const ModalAction = styled.button`
  width: 100%;
  min-height: 58px;
  margin-top: 12px;
  margin-bottom: 4px;
  padding: 0 22px;
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  color: #ffffff;

  border: 1px solid rgba(196, 181, 253, 0.45);
  border-radius: 17px;

  background: linear-gradient(
    110deg,
    #7c3aed,
    #4f46e5,
    #0ea5e9
  );

  box-shadow:
    0 18px 45px rgba(124, 58, 237, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);

  font-size: 14px;
  font-weight: 750;
  cursor: pointer;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);

    box-shadow:
      0 25px 55px rgba(124, 58, 237, 0.38),
      inset 0 1px 0 rgba(255, 255, 255, 0.24);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const BackgroundParticles = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;

  overflow: hidden;
  pointer-events: none;
`;
export const Particle = styled.div`
  position: absolute;

  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};

  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  border-radius: 50%;

  background: #c4b5fd;

  box-shadow:
    0 0 8px #8b5cf6,
    0 0 20px rgba(139, 92, 246, 0.9);

  animation:
    floatParticle
    ${({ $duration }) => `${$duration}s`}
    ease-in-out infinite;

  animation-delay: ${({ $delay }) => `${$delay}s`};

  @keyframes floatParticle {
    0% {
      transform: translate3d(0, 35px, 0) scale(0.7);
      opacity: 0.15;
    }

    25% {
      transform: translate3d(16px, 0, 0) scale(1);
      opacity: 0.85;
    }

    50% {
      transform: translate3d(-12px, -35px, 0) scale(1.2);
      opacity: 1;
    }

    75% {
      transform: translate3d(18px, -70px, 0) scale(0.9);
      opacity: 0.65;
    }

    100% {
      transform: translate3d(0, -105px, 0) scale(0.7);
      opacity: 0.15;
    }
  }
`;

