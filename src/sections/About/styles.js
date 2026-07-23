import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled.section`
  position: relative;
  isolation: isolate;

  padding: 120px 24px 140px;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 14% 24%,
      rgba(124, 58, 237, 0.13),
      transparent 32%
    ),
    radial-gradient(
      circle at 88% 72%,
      rgba(56, 189, 248, 0.08),
      transparent 30%
    ),
    #070a18;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;

    background-image:
      linear-gradient(
        rgba(255, 255, 255, 0.018) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.018) 1px,
        transparent 1px
      );

    background-size: 70px 70px;

    mask-image: linear-gradient(
      to bottom,
      transparent,
      black 20%,
      black 80%,
      transparent
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent,
      black 20%,
      black 80%,
      transparent
    );

    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 90px 20px 100px;
  }
`;

export const BackgroundGlow = styled.div`
  position: absolute;
  z-index: -1;

  top: 120px;
  right: -160px;

  width: 560px;
  height: 560px;

  border-radius: 50%;

  background: rgba(124, 58, 237, 0.15);
  filter: blur(130px);

  animation: glowMove 7s ease-in-out infinite alternate;

  pointer-events: none;

  @keyframes glowMove {
    from {
      transform: translate3d(-20px, -15px, 0) scale(0.94);
      opacity: 0.65;
    }

    to {
      transform: translate3d(35px, 25px, 0) scale(1.08);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const AboutContainer = styled(motion.div)`
  position: relative;

  width: min(1200px, 100%);
  margin: 0 auto;

  display: grid;
  grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  align-items: center;
  gap: 90px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
    gap: 75px;
  }
`;

export const AboutContent = styled(motion.div)`
  min-width: 0;
`;

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 22px;

  color: #c4b5fd;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  span {
    width: 24px;
    height: 1px;

    background: linear-gradient(90deg, #8b5cf6, #38bdf8);
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
  }
`;

export const Title = styled.h2`
  max-width: 650px;
  margin-bottom: 28px;

  color: #ffffff;

  font-size: clamp(42px, 5vw, 66px);
  line-height: 1.03;
  letter-spacing: -3px;

  overflow-wrap: break-word;

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
    letter-spacing: -2px;
  }
`;

export const Description = styled.p`
  max-width: 600px;
  margin-bottom: 44px;

  color: #a7afc0;

  font-size: 17px;
  line-height: 1.85;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  position: relative;

  min-width: 0;
  padding: 20px;

  display: flex;
  align-items: center;
  gap: 14px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 16px 40px rgba(0, 0, 0, 0.15);

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;

  &:hover {
    transform: translateY(-6px);

    border-color: rgba(139, 92, 246, 0.4);
    background: rgba(124, 58, 237, 0.08);
  }

  strong {
    display: block;
    margin-bottom: 4px;

    color: #ffffff;

    font-size: 24px;
    line-height: 1;
  }

  span {
    display: block;

    color: #8f98aa;

    font-size: 12px;
    line-height: 1.45;
  }
`;

export const StatIcon = styled.div`
  flex: 0 0 auto;

  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(139, 92, 246, 0.24);
  border-radius: 13px;

  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.1);

  box-shadow: 0 0 24px rgba(124, 58, 237, 0.12);

  svg {
    font-size: 19px;
  }
`;

export const AboutVisual = styled.div`
  position: relative;

  min-width: 0;

  display: grid;
  gap: 20px;

  padding-left: 36px;

  @media (max-width: 600px) {
    padding-left: 20px;
  }
`;

export const JourneyLine = styled.div`
  position: absolute;

  top: 35px;
  bottom: 35px;
  left: 10px;

  width: 1px;

  background: linear-gradient(
    to bottom,
    transparent,
    rgba(139, 92, 246, 0.85),
    rgba(56, 189, 248, 0.7),
    transparent
  );

  box-shadow: 0 0 14px rgba(139, 92, 246, 0.5);

  &::after {
    content: "";

    position: absolute;
    left: 50%;

    width: 7px;
    height: 70px;

    border-radius: 999px;

    background: linear-gradient(
      to bottom,
      transparent,
      #c4b5fd,
      transparent
    );

    filter: blur(1px);

    animation: lineMove 4s linear infinite;
  }

  @keyframes lineMove {
    from {
      top: -50px;
      transform: translateX(-50%);
    }

    to {
      top: 100%;
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

export const VisualCard = styled(motion.article)`
  position: relative;

  padding: 28px;

  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 24px;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.055),
      rgba(255, 255, 255, 0.02)
    );

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 26px 60px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease,
    background 0.35s ease;

  

  &:hover {
    transform: translateY(-8px) scale(1.015);

    border-color: rgba(139, 92, 246, 0.46);

    background:
      linear-gradient(
        135deg,
        rgba(124, 58, 237, 0.12),
        rgba(56, 189, 248, 0.04)
      );

    box-shadow:
      0 32px 75px rgba(0, 0, 0, 0.3),
      0 0 45px rgba(124, 58, 237, 0.12);
  }

  h3 {
    margin-bottom: 10px;

    color: #ffffff;

    font-size: 22px;
  }

  p {
    max-width: 500px;
    margin-bottom: 20px;

    color: #9ca5b7;

    line-height: 1.7;
  }

  @media (max-width: 600px) {
    padding: 23px;

    &:nth-of-type(3) {
      margin-left: 0;
    }
  }
`;

export const VisualCardHeader = styled.div`
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VisualIcon = styled.div`
  width: 48px;
  height: 48px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(139, 92, 246, 0.28);
  border-radius: 15px;

  color: #c4b5fd;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.18),
      rgba(56, 189, 248, 0.06)
    );

  box-shadow:
    0 12px 26px rgba(0, 0, 0, 0.18),
    0 0 25px rgba(124, 58, 237, 0.1);

  svg {
    font-size: 21px;
  }
`;

export const CardNumber = styled.span`
  color: rgba(196, 181, 253, 0.62);

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.4px;
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  padding: 7px 11px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;

  color: #bbc3d3;
  background: rgba(255, 255, 255, 0.035);

  font-size: 11px;
  font-weight: 600;
`;