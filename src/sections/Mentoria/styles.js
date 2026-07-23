import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const glowMovement = keyframes`
  0%,
  100% {
    transform: translate3d(-5%, -3%, 0) scale(0.9);
    opacity: 0.35;
  }

  50% {
    transform: translate3d(8%, 7%, 0) scale(1.15);
    opacity: 0.75;
  }
`;

const codeFloat = keyframes`
  0%,
  100% {
    transform: translateY(0) rotate(-4deg);
  }

  50% {
    transform: translateY(-18px) rotate(4deg);
  }
`;

const technologyFloat = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-9px);
  }
`;

const borderGlow = keyframes`
  0% {
    opacity: 0.25;
    transform: translateX(-100%);
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 0.25;
    transform: translateX(100%);
  }
`;

export const TutorsSection = styled.section`
  position: relative;
  isolation: isolate;

  padding: 135px 24px 145px;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(16, 185, 129, 0.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 87% 75%,
      rgba(124, 58, 237, 0.12),
      transparent 32%
    ),
    linear-gradient(180deg, #070a18 0%, #050713 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -3;

    background-image:
      linear-gradient(
        120deg,
        rgba(255, 255, 255, 0.018) 1px,
        transparent 1px
      ),
      linear-gradient(
        30deg,
        rgba(255, 255, 255, 0.014) 1px,
        transparent 1px
      );

    background-size: 100px 100px;

    mask-image: linear-gradient(
      to bottom,
      transparent,
      black 15%,
      black 85%,
      transparent
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent,
      black 15%,
      black 85%,
      transparent
    );

    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 95px 20px 105px;
  }
`;

export const BackgroundEffects = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;

  overflow: hidden;
  pointer-events: none;
`;

export const BackgroundGlow = styled.div`
  position: absolute;

  top: 20%;
  left: 42%;

  width: 650px;
  height: 650px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(124, 58, 237, 0.16),
      rgba(16, 185, 129, 0.06) 42%,
      transparent 68%
    );

  filter: blur(35px);

  animation: ${glowMovement} 10s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const FloatingCode = styled.span`
  position: absolute;

  top: ${({ $top }) => $top || "auto"};
  right: ${({ $right }) => $right || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  left: ${({ $left }) => $left || "auto"};

  color: rgba(167, 139, 250, 0.18);

  font-family: monospace;
  font-size: clamp(30px, 4vw, 58px);
  font-weight: 800;

  text-shadow: 0 0 25px rgba(124, 58, 237, 0.25);

  animation: ${codeFloat} 6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};

  @media (max-width: 700px) {
    opacity: 0.45;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const TutorsContainer = styled(motion.div)`
  position: relative;
  z-index: 1;

  width: min(1200px, 100%);
  margin: 0 auto;
`;

export const SectionHeader = styled(motion.div)`
  max-width: 850px;
  margin: 0 auto 75px;

  text-align: center;
`;

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 11px;

  margin-bottom: 22px;

  color: #6ee7b7;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  span {
    width: 27px;
    height: 1px;

    background: linear-gradient(90deg, #10b981, #8b5cf6);

    box-shadow: 0 0 12px rgba(16, 185, 129, 0.55);
  }

  span:last-child {
    background: linear-gradient(90deg, #8b5cf6, #10b981);
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;

  color: #ffffff;

  font-size: clamp(42px, 5vw, 68px);
  line-height: 1.03;
  letter-spacing: -3px;

  span {
    color: transparent;

    background: linear-gradient(
      90deg,
      #6ee7b7,
      #34d399,
      #a78bfa
    );

    background-clip: text;
    -webkit-background-clip: text;
  }

  @media (max-width: 600px) {
    letter-spacing: -2px;
  }
`;

export const Description = styled.p`
  max-width: 700px;
  margin: 0 auto;

  color: #a3acbd;

  font-size: 17px;
  line-height: 1.8;
`;

export const MentorContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
  align-items: center;
  gap: clamp(50px, 7vw, 95px);

  margin-bottom: 110px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    gap: 65px;
  }
`;

export const ImageArea = styled(motion.div)`
  position: relative;

  width: min(480px, 100%);
  margin: 0 auto;
`;

export const ImageGlow = styled.div`
  position: absolute;
  z-index: -1;

  inset: 8% -8% -5% 5%;

  border-radius: 45%;

  background:
    radial-gradient(
      circle at 45% 40%,
      rgba(16, 185, 129, 0.22),
      rgba(124, 58, 237, 0.2) 48%,
      transparent 72%
    );

  filter: blur(60px);

  animation: ${glowMovement} 8s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const ImageFrame = styled.div`
  position: relative;

  aspect-ratio: 0.83;
  padding: 1px;

  overflow: hidden;

  border-radius: 38px;

  background:
    linear-gradient(
      145deg,
      rgba(110, 231, 183, 0.78),
      rgba(139, 92, 246, 0.52),
      rgba(255, 255, 255, 0.08)
    );

  box-shadow:
    0 45px 100px rgba(0, 0, 0, 0.48),
    0 0 70px rgba(16, 185, 129, 0.08);

  &::before {
    content: "";
    position: absolute;
    z-index: 3;

    top: 0;
    left: 0;

    width: 45%;
    height: 2px;

    background: linear-gradient(
      90deg,
      transparent,
      #6ee7b7,
      transparent
    );

    animation: ${borderGlow} 5s linear infinite;
  }

  @media (max-width: 520px) {
    border-radius: 28px;
  }
`;

export const MentorImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  border-radius: inherit;

  object-fit: cover;
  object-position: center top;

  filter: saturate(0.9) contrast(1.03);

  transition:
    transform 0.75s ease,
    filter 0.6s ease;

  ${ImageFrame}:hover & {
    transform: scale(1.045);
    filter: saturate(1.05) contrast(1.05);
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  inset: 1px;

  border-radius: inherit;

  background:
    linear-gradient(
      to top,
      rgba(4, 7, 18, 0.92) 0%,
      rgba(4, 7, 18, 0.25) 38%,
      transparent 66%
    ),
    linear-gradient(
      120deg,
      rgba(16, 185, 129, 0.08),
      transparent 42%,
      rgba(124, 58, 237, 0.08)
    );

  pointer-events: none;
`;

export const ExperienceBadge = styled.div`
  position: absolute;
  z-index: 5;

  right: -26px;
  bottom: 38px;

  padding: 15px 19px;

  display: flex;
  align-items: center;
  gap: 12px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;

  background: rgba(9, 13, 29, 0.82);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 20px 45px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.07);

  @media (max-width: 560px) {
    right: 12px;
    bottom: 18px;
  }
`;

export const ExperienceIcon = styled.div`
  width: 43px;
  height: 43px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  color: #06120e;
  background: linear-gradient(135deg, #6ee7b7, #34d399);

  box-shadow: 0 0 25px rgba(52, 211, 153, 0.25);

  svg {
    margin-left: 2px;
    font-size: 17px;
  }
`;

export const ExperienceText = styled.div`
  display: grid;
  gap: 3px;

  span {
    color: #8e98aa;

    font-size: 10px;
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }

  strong {
    color: #ffffff;

    font-size: 13px;
  }
`;

export const FloatingTechnology = styled.span`
  position: absolute;
  z-index: 5;

  ${({ $position }) =>
    $position === "top"
      ? `
        top: 55px;
        left: -25px;
      `
      : `
        right: 45px;
        bottom: -18px;
      `}

  padding: 10px 15px;

  border: 1px solid
    ${({ $position }) =>
      $position === "top"
        ? "rgba(110, 231, 183, 0.25)"
        : "rgba(167, 139, 250, 0.25)"};

  border-radius: 999px;

  color:
    ${({ $position }) =>
      $position === "top" ? "#6ee7b7" : "#c4b5fd"};

  background: rgba(8, 12, 27, 0.82);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  box-shadow: 0 16px 38px rgba(0, 0, 0, 0.3);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;

  animation: ${technologyFloat} 4s ease-in-out infinite;

  @media (max-width: 560px) {
    ${({ $position }) =>
      $position === "top"
        ? `
          top: 20px;
          left: 12px;
        `
        : `
          right: 14px;
          bottom: -15px;
        `}
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const MentorInformation = styled(motion.div)`
  min-width: 0;
`;

export const MentorTag = styled.span`
  width: fit-content;
  margin-bottom: 21px;
  padding: 8px 13px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  border: 1px solid rgba(52, 211, 153, 0.23);
  border-radius: 999px;

  color: #6ee7b7;
  background: rgba(16, 185, 129, 0.07);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;

  svg {
    font-size: 14px;
  }
`;

export const MentorName = styled.h3`
  margin-bottom: 8px;

  color: #ffffff;

  font-size: clamp(43px, 5vw, 67px);
  line-height: 1;
  letter-spacing: -3px;
`;

export const MentorRole = styled.p`
  margin-bottom: 28px;

  color: #a78bfa;

  font-size: 15px;
  font-weight: 600;
`;

export const MentorDescription = styled.p`
  margin-bottom: 17px;

  color: #a6afbf;

  font-size: 15px;
  line-height: 1.85;
`;

export const TechnologyList = styled.div`
  margin: 30px 0 34px;

  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Technology = styled.span`
  padding: 10px 13px;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  color: #c9d0dc;
  background: rgba(255, 255, 255, 0.035);

  font-size: 11px;
  font-weight: 600;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;

  svg {
    color: #6ee7b7;
    font-size: 15px;
  }

  &:hover {
    transform: translateY(-3px);

    border-color: rgba(52, 211, 153, 0.25);
    background: rgba(16, 185, 129, 0.07);
  }
`;

export const MentorButton = styled.a`
  min-height: 53px;
  padding: 0 23px;

  width: fit-content;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 999px;

  color: #06130f;
  background: linear-gradient(135deg, #6ee7b7, #34d399);

  box-shadow:
    0 16px 38px rgba(16, 185, 129, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);

  text-decoration: none;
  font-size: 13px;
  font-weight: 800;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    font-size: 17px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 22px 45px rgba(16, 185, 129, 0.34);

    svg {
      transform: translateX(5px);
    }
  }
`;

export const SupportArea = styled.div`
  margin-bottom: 32px;
`;

export const SupportHeader = styled(motion.div)`
  max-width: 650px;
  margin-bottom: 34px;

  span {
    display: block;

    margin-bottom: 9px;

    color: #6ee7b7;

    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.3px;
    text-transform: uppercase;
  }

  h3 {
    color: #ffffff;

    font-size: clamp(28px, 3.5vw, 43px);
    line-height: 1.12;
    letter-spacing: -1.6px;
  }
`;

export const SupportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SupportCard = styled(motion.article)`
  position: relative;

  min-width: 0;
  padding: 24px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.085);
  border-radius: 21px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.015)
    );

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  box-shadow:
    0 22px 50px rgba(0, 0, 0, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  transition:
    border-color 0.32s ease,
    background 0.32s ease,
    box-shadow 0.32s ease;

  &::after {
    content: "";
    position: absolute;

    right: -45px;
    bottom: -55px;

    width: 120px;
    height: 120px;

    border-radius: 50%;

    background: rgba(16, 185, 129, 0.06);
    filter: blur(20px);

    transition: transform 0.4s ease;
  }

  &:hover {
    border-color: rgba(52, 211, 153, 0.32);

    background:
      linear-gradient(
        145deg,
        rgba(16, 185, 129, 0.09),
        rgba(124, 58, 237, 0.025)
      );

    box-shadow:
      0 30px 65px rgba(0, 0, 0, 0.3),
      0 0 38px rgba(16, 185, 129, 0.07);

    &::after {
      transform: scale(1.4);
    }
  }

  > div {
    position: relative;
    z-index: 1;

    margin-bottom: 22px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SupportIcon = styled.div`
  width: 46px;
  height: 46px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(52, 211, 153, 0.22);
  border-radius: 14px;

  color: #6ee7b7;
  background: rgba(16, 185, 129, 0.075);

  svg {
    font-size: 19px;
  }
`;

export const SupportNumber = styled.span`
  color: rgba(110, 231, 183, 0.42);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.3px;
`;

export const SupportTitle = styled.h4`
  position: relative;
  z-index: 1;

  margin-bottom: 10px;

  color: #ffffff;

  font-size: 18px;
`;

export const SupportDescription = styled.p`
  position: relative;
  z-index: 1;

  color: #929caf;

  font-size: 12px;
  line-height: 1.7;
`;

export const BottomMessage = styled(motion.div)`
  position: relative;

  padding: 34px 38px;

  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 22px;

  border: 1px solid rgba(139, 92, 246, 0.21);
  border-radius: 25px;

  background:
    radial-gradient(
      circle at 85% 50%,
      rgba(16, 185, 129, 0.1),
      transparent 28%
    ),
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.12),
      rgba(255, 255, 255, 0.022)
    );

  box-shadow:
    0 27px 70px rgba(0, 0, 0, 0.27),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  &::before {
    content: "";
    position: absolute;

    top: 0;
    left: 12%;
    right: 12%;

    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      #6ee7b7,
      #a78bfa,
      transparent
    );
  }

  @media (max-width: 650px) {
    padding: 28px 23px;

    align-items: flex-start;
    flex-direction: column;
  }
`;

export const BottomIcon = styled.div`
  flex: 0 0 auto;

  width: 55px;
  height: 55px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(52, 211, 153, 0.23);
  border-radius: 17px;

  color: #6ee7b7;

  background:
    linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.13),
      rgba(124, 58, 237, 0.08)
    );

  svg {
    font-size: 23px;
  }
`;

export const BottomContent = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  gap: 6px;

  span {
    color: #8f99ab;

    font-size: 12px;
  }

  strong {
    color: #ffffff;

    font-size: clamp(19px, 2.5vw, 27px);
    line-height: 1.3;
    letter-spacing: -0.7px;
  }
`;