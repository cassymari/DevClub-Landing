import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const glowMove = keyframes`
  0%,
  100% {
    transform:
      translateX(-50%)
      translate3d(-5%, -3%, 0)
      scale(0.95);

    opacity: 0.65;
  }

  50% {
    transform:
      translateX(-50%)
      translate3d(5%, 4%, 0)
      scale(1.12);

    opacity: 1;
  }
`;
export const FormationsSection = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  padding: 120px 0 140px;

  background: linear-gradient(
    180deg,
    #060817 0%,
    #08091b 50%,
    #060715 100%
  );

  @media (max-width: 768px) {
    padding: 95px 0 110px;
  }
`;

export const FormationsContainer = styled.div`
  position: relative;
  z-index: 1;

  width: min(1200px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 600px) {
    width: min(100% - 32px, 1200px);
  }
`;

export const SectionHeader = styled(motion.div)`
  max-width: 780px;
  margin-bottom: 64px;
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
  line-height: 1;
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
  max-width: 680px;

  color: #9ca3af;
  font-size: 17px;
  line-height: 1.8;
`;

export const CarouselTop = styled.div`
   position: absolute;
  z-index: 20;
  top: 15px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  span {
    color: #c4b5fd;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const ArrowButton = styled.button`
  position: absolute;
  z-index: 50;
  top: 50%;

  ${({ $side }) =>
    $side === "left"
      ? "left: 16px;"
      : "right: 16px;"}

  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  border: 1px solid rgba(167, 139, 250, 0.5);
  border-radius: 50%;
  background: rgba(5, 8, 22, 0.88);
  backdrop-filter: blur(14px);

  font-size: 22px;
  cursor: pointer;

  transform: translateY(-50%);

  box-shadow:
    0 14px 35px rgba(0, 0, 0, 0.45),
    0 0 30px rgba(124, 58, 237, 0.18);

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    scale 0.25s ease;

  &:hover {
    scale: 1.08;
    background: rgba(124, 58, 237, 0.8);
    border-color: #c4b5fd;
  }

  &:active {
    scale: 0.94;
  }

  @media (max-width: 600px) {
    width: 46px;
    height: 46px;

    ${({ $side }) =>
      $side === "left"
        ? "left: 4px;"
        : "right: 4px;"}
  }
`;

export const CardsViewport = styled.div`
  position: relative;

  width: 100%;
  min-height: 650px;

 

  overflow: hidden;

  padding: 60px 0 90px;
`;

export const CardsTrack = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 24px;

  width: max-content;

  perspective: 1600px;
  will-change: transform;
`;
export const FormationCard = styled.article`
  position: relative;

  width: 380px;
  flex: 0 0 380px;
  min-height: 520px;
  gap: 24px;

  opacity: ${({ $active }) => ($active ? 1 : 0.4)};

  transform: ${({ $active }) =>
    $active
      ? "translateY(-16px) scale(1)"
      : "translateY(14px) scale(0.88)"};

  transition:
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.45s ease,
    filter 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease;
`;

export const CardBackground = styled.div`
  position: absolute;
  inset: 0;

  background:
radial-gradient(
circle at 75% 10%,
rgba(139,92,246,.45),
transparent 35%
),

radial-gradient(
circle at 15% 85%,
rgba(56,189,248,.15),
transparent 30%
),

linear-gradient(
160deg,
rgba(255,255,255,.08),
transparent 60%
);

  pointer-events: none;
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 1;

  min-height: 520px;
  padding: 36px;

  display: flex;
  flex-direction: column;
`;

export const CardCategory = styled.span`
  margin-bottom: 24px;

  color: #a78bfa;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
`;

export const CardTitle = styled.h3`
  max-width: 290px;
  margin-bottom: 20px;

  color: #ffffff;
  font-size: 38px;
  line-height: 1.05;
  letter-spacing: -1.5px;
`;

export const CardDescription = styled.p`
  margin-bottom: 26px;

  color: #a8b0c0;
  font-size: 15px;
  line-height: 1.7;
`;

export const CardDetails = styled.div`
  margin-bottom: 26px;

  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

export const Detail = styled.span`
  padding: 8px 11px;

  color: #d8d3ff;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.09);

  font-size: 12px;
  font-weight: 600;
`;

export const Technologies = styled.div`
  margin-bottom: 32px;

  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Technology = styled.span`
  padding: 7px 10px;

  color: #b4bdce;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.035);

  font-size: 11px;
`;

export const CardButton = styled.button`
  margin-top: auto;

  min-height: 50px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  font-family: inherit;
  cursor: pointer;

  color: #ffffff;
  border: 1px solid rgba(139, 92, 246, 0.28);
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.12);

  text-decoration: none;
  font-size: 14px;
  font-weight: 650;

  transition:
    background 0.3s ease,
    border-color 0.3s ease;

  span {
    font-size: 20px;
    transition: transform 0.25s ease;
  }

  &:hover {
    background: rgba(124, 58, 237, 0.22);
    border-color: rgba(139, 92, 246, 0.5);
  }

  &:hover span {
    transform: translate(4px, -4px);
  }
`;

export const CarouselCounter = styled.div`
  position: absolute;
  z-index: 40;
  bottom: 24px;
  left: 50%;

  display: flex;
  align-items: center;
  gap: 12px;

  color: #c4b5fd;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;

  transform: translateX(-50%);

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

export const FormationsBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  overflow: hidden;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;

    top: -180px;
    left: -180px;

    width: 520px;
    height: 520px;

    border-radius: 50%;

    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.18),
      transparent 68%
    );

    filter: blur(45px);
  }

  &::after {
    content: "";
    position: absolute;

    right: -180px;
    bottom: -180px;

    width: 520px;
    height: 520px;

    border-radius: 50%;

    background: radial-gradient(
      circle,
      rgba(56, 189, 248, 0.14),
      transparent 68%
    );

    filter: blur(45px);
  }
`;
export const BackgroundGlow = styled.div`
  position: absolute;

  top: 90px;
  left: 50%;

  width: min(1050px, 110vw);
  height: 720px;

  border-radius: 50%;

  background: radial-gradient(
    ellipse at center,
    rgba(139, 92, 246, 0.34) 0%,
    rgba(99, 102, 241, 0.2) 28%,
    rgba(56, 189, 248, 0.1) 48%,
    transparent 72%
  );

  filter: blur(55px);

  animation: ${glowMove} 10s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    transform: translateX(-50%);
    animation: none;
  }
`;
export const BackgroundGrid = styled.div`
  position: absolute;
  inset: 0;

  opacity: 1;

  background-image:
    linear-gradient(
      rgba(167, 139, 250, 0.075) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(167, 139, 250, 0.075) 1px,
      transparent 1px
    );

  background-size: 65px 65px;

  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );

  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 8%,
    black 92%,
    transparent 100%
  );

  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      115deg,
      transparent 20%,
      rgba(139, 92, 246, 0.055) 45%,
      transparent 70%
    );
  }
`;

const particleFloat = keyframes`
  0%,
  100%{
    transform:translateY(0) scale(1);
    opacity:.25;
  }

  50%{
    transform:translateY(-24px) scale(1.8);
    opacity:.9;
  }
`;

export const BackgroundParticle = styled.span`
  position: absolute;

  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};

  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};

  border-radius: 50%;

  background: #a78bfa;

  box-shadow:
    0 0 10px rgba(167,139,250,.9),
    0 0 22px rgba(139,92,246,.7),
    0 0 40px rgba(56,189,248,.3);

  animation:
    ${particleFloat}
    ${({ $duration }) => $duration}
    ease-in-out
    infinite;

  animation-delay:${({ $delay }) => $delay};

  pointer-events:none;
`;