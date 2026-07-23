import styled from "styled-components";
import { motion } from "framer-motion";

export const CompaniesSection = styled.section`
  position: relative;
  isolation: isolate;

  padding: 130px 24px 145px;
  overflow: hidden;

  background:
    radial-gradient(
      circle at 12% 24%,
      rgba(56, 189, 248, 0.09),
      transparent 31%
    ),
    radial-gradient(
      circle at 88% 68%,
      rgba(124, 58, 237, 0.13),
      transparent 32%
    ),
    linear-gradient(180deg, #050816 0%, #070a18 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -3;

    background-image:
      linear-gradient(
        rgba(56, 189, 248, 0.018) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(139, 92, 246, 0.02) 1px,
        transparent 1px
      );

    background-size: 90px 90px;

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

export const BackgroundNetwork = styled.div`
  position: absolute;
  inset: 0;
  z-index: -2;

  overflow: hidden;
  pointer-events: none;
`;

export const NetworkNode = styled.span`
  position: absolute;

  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};

  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};

  border: 1px solid rgba(167, 139, 250, 0.7);
  border-radius: 50%;

  background: rgba(139, 92, 246, 0.25);

  box-shadow:
    0 0 10px rgba(139, 92, 246, 0.7),
    0 0 24px rgba(56, 189, 248, 0.28);

  animation: nodePulse 4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => `-${$delay}s`};

  @keyframes nodePulse {
    0%,
    100% {
      opacity: 0.22;
      transform: scale(0.75);
    }

    50% {
      opacity: 0.9;
      transform: scale(1.35);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const NetworkLine = styled.span`
  position: absolute;

  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};

  width: ${({ $width }) => `${$width}%`};
  height: 1px;

  opacity: 0.4;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(139, 92, 246, 0.15),
    rgba(56, 189, 248, 0.7),
    rgba(139, 92, 246, 0.15),
    transparent
  );

  box-shadow: 0 0 12px rgba(56, 189, 248, 0.25);

  transform: rotate(-8deg);

  animation: networkLineMove 7s ease-in-out infinite alternate;
  animation-delay: ${({ $delay }) => `-${$delay}s`};

  @keyframes networkLineMove {
    from {
      transform: translateX(-45px) rotate(-8deg);
      opacity: 0.08;
    }

    to {
      transform: translateX(65px) rotate(-8deg);
      opacity: 0.52;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const CompaniesContainer = styled(motion.div)`
  position: relative;
  z-index: 1;

  width: min(1200px, 100%);
  margin: 0 auto;
`;

export const SectionHeader = styled(motion.div)`
  max-width: 820px;
  margin: 0 auto 58px;

  text-align: center;
`;

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 11px;

  margin-bottom: 22px;

  color: #c4b5fd;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;

  span {
    width: 27px;
    height: 1px;

    background: linear-gradient(90deg, #8b5cf6, #38bdf8);

    box-shadow: 0 0 12px rgba(139, 92, 246, 0.65);
  }

  span:last-child {
    background: linear-gradient(90deg, #38bdf8, #8b5cf6);
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
  max-width: 700px;
  margin: 0 auto;

  color: #a3acbd;

  font-size: 17px;
  line-height: 1.8;
`;

export const LogoMarquee = styled(motion.div)`
  position: relative;

  margin-bottom: 72px;
  padding: 22px 0;

  overflow: hidden;

  border-top: 1px solid rgba(255, 255, 255, 0.07);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  background: rgba(255, 255, 255, 0.015);

  mask-image: linear-gradient(
    90deg,
    transparent,
    black 10%,
    black 90%,
    transparent
  );

  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
`;

export const LogoTrack = styled.div`
  width: max-content;

  display: flex;
  align-items: center;
  gap: 65px;

  animation: logoScroll 28s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes logoScroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const LogoItem = styled.span`
  flex: 0 0 auto;

  color: rgba(226, 232, 240, 0.56);

  font-size: clamp(18px, 2.2vw, 26px);
  font-weight: 800;
  letter-spacing: -0.8px;

  transition:
    color 0.3s ease,
    text-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: #ffffff;

    transform: translateY(-3px);

    text-shadow:
      0 0 18px rgba(139, 92, 246, 0.55),
      0 0 30px rgba(56, 189, 248, 0.25);
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  align-items: stretch;
  gap: 28px;

  margin-bottom: 30px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;

export const CompanyPanel = styled(motion.article)`
  position: relative;

  min-width: 0;
  padding: 38px;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  border: 1px solid rgba(139, 92, 246, 0.31);
  border-radius: 28px;

  background:
    radial-gradient(
      circle at 82% 16%,
      rgba(56, 189, 248, 0.1),
      transparent 30%
    ),
    linear-gradient(
      145deg,
      rgba(20, 23, 48, 0.94),
      rgba(10, 14, 31, 0.95)
    );

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  box-shadow:
    0 34px 90px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-7px);

    border-color: rgba(139, 92, 246, 0.55);

    box-shadow:
      0 42px 105px rgba(0, 0, 0, 0.43),
      0 0 65px rgba(124, 58, 237, 0.12),
      inset 0 1px 0 rgba(255, 255, 255, 0.07);
  }

  @media (max-width: 600px) {
    padding: 28px 23px;
  }
`;

export const PanelGlow = styled.div`
  position: absolute;

  top: -160px;
  right: -150px;

  width: 390px;
  height: 390px;

  border-radius: 50%;

  background: rgba(124, 58, 237, 0.15);
  filter: blur(95px);

  pointer-events: none;
`;

export const PanelTop = styled.div`
  position: relative;
  z-index: 1;

  margin-bottom: 28px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const PanelIcon = styled.div`
  width: 57px;
  height: 57px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(139, 92, 246, 0.32);
  border-radius: 18px;

  color: #c4b5fd;

  background:
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.2),
      rgba(56, 189, 248, 0.07)
    );

  box-shadow:
    0 15px 36px rgba(0, 0, 0, 0.23),
    0 0 30px rgba(124, 58, 237, 0.12);

  svg {
    font-size: 24px;
  }
`;

export const PanelBadge = styled.span`
  padding: 8px 13px;

  border: 1px solid rgba(139, 92, 246, 0.28);
  border-radius: 999px;

  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.09);

  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const PanelTitle = styled.h3`
  position: relative;
  z-index: 1;

  margin-bottom: 18px;

  color: #ffffff;

  font-size: clamp(29px, 3vw, 40px);
  line-height: 1.12;
  letter-spacing: -1.5px;
`;

export const PanelDescription = styled.p`
  position: relative;
  z-index: 1;

  margin-bottom: 28px;

  color: #a7b0c1;

  font-size: 15px;
  line-height: 1.8;
`;

export const PanelBenefits = styled.div`
  position: relative;
  z-index: 1;

  display: grid;
  gap: 13px;

  margin-bottom: 32px;
`;

export const PanelBenefit = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;

  color: #c3cbd8;

  font-size: 13px;

  svg {
    flex: 0 0 auto;

    width: 20px;
    height: 20px;

    padding: 4px;

    border-radius: 50%;

    color: #86efac;
    background: rgba(74, 222, 128, 0.09);
  }
`;

export const PanelFooter = styled.div`
  position: relative;
  z-index: 1;

  margin-top: auto;
  padding-top: 26px;

  display: grid;
  gap: 24px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  > div {
    display: flex;
    align-items: flex-start;
    gap: 11px;

    color: #8f99ab;

    font-size: 12px;
    line-height: 1.6;

    svg {
      flex: 0 0 auto;

      margin-top: 2px;

      color: #67e8f9;
      font-size: 18px;
    }
  }
`;

export const PanelButton = styled.a`
  min-height: 50px;
  padding: 0 21px;

  width: fit-content;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 999px;

  color: #ffffff;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);

  box-shadow: 0 14px 34px rgba(124, 58, 237, 0.29);

  text-decoration: none;
  font-size: 13px;
  font-weight: 700;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    font-size: 17px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-3px);

    box-shadow: 0 19px 44px rgba(124, 58, 237, 0.42);

    svg {
      transform: translateX(5px);
    }
  }
`;

export const SkillsArea = styled.div`
  min-width: 0;
`;

export const SkillsHeader = styled(motion.div)`
  margin-bottom: 22px;

  span {
    display: block;

    margin-bottom: 8px;

    color: #a78bfa;

    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
  }

  h3 {
    color: #ffffff;

    font-size: clamp(25px, 3vw, 34px);
    line-height: 1.18;
    letter-spacing: -1.2px;
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 15px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled(motion.article)`
  min-width: 0;
  padding: 21px;

  border: 1px solid rgba(255, 255, 255, 0.085);
  border-radius: 20px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.016)
    );

  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);

  box-shadow:
    0 20px 48px rgba(0, 0, 0, 0.21),
    inset 0 1px 0 rgba(255, 255, 255, 0.045);

  transition:
    border-color 0.32s ease,
    background 0.32s ease,
    box-shadow 0.32s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.43);

    background:
      linear-gradient(
        145deg,
        rgba(124, 58, 237, 0.11),
        rgba(56, 189, 248, 0.025)
      );

    box-shadow:
      0 27px 60px rgba(0, 0, 0, 0.3),
      0 0 38px rgba(124, 58, 237, 0.09);
  }

  > div {
    margin-bottom: 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SkillIcon = styled.div`
  width: 43px;
  height: 43px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(139, 92, 246, 0.24);
  border-radius: 13px;

  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.09);

  svg {
    font-size: 18px;
  }
`;

export const SkillNumber = styled.span`
  color: rgba(196, 181, 253, 0.5);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.3px;
`;

export const SkillTitle = styled.h4`
  margin-bottom: 8px;

  color: #ffffff;

  font-size: 17px;
`;

export const SkillDescription = styled.p`
  color: #929caf;

  font-size: 12px;
  line-height: 1.65;
`;

export const BottomCta = styled(motion.div)`
  position: relative;

  margin-top: 28px;
  padding: 38px 42px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;

  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 27px;

  background:
    radial-gradient(
      circle at 90% 50%,
      rgba(56, 189, 248, 0.11),
      transparent 28%
    ),
    linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.13),
      rgba(255, 255, 255, 0.025)
    );

  box-shadow:
    0 28px 72px rgba(0, 0, 0, 0.27),
    inset 0 1px 0 rgba(255, 255, 255, 0.055);

  &::before {
    content: "";
    position: absolute;

    top: 0;
    left: 10%;
    right: 10%;

    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      #8b5cf6,
      #38bdf8,
      transparent
    );
  }

  @media (max-width: 780px) {
    padding: 30px 24px;

    align-items: flex-start;
    flex-direction: column;
  }
`;

export const CtaContent = styled.div`
  position: relative;
  z-index: 1;

  max-width: 720px;

  span {
    display: block;

    margin-bottom: 9px;

    color: #a78bfa;

    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.3px;
    text-transform: uppercase;
  }

  h3 {
    color: #ffffff;

    font-size: clamp(25px, 3vw, 38px);
    line-height: 1.15;
    letter-spacing: -1.3px;
  }
`;

export const CtaButton = styled.a`
  position: relative;
  z-index: 1;

  flex: 0 0 auto;

  min-height: 54px;
  padding: 0 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 999px;

  color: #07101f;
  background: #ffffff;

  box-shadow: 0 16px 38px rgba(255, 255, 255, 0.1);

  text-decoration: none;
  font-size: 14px;
  font-weight: 800;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);

    box-shadow: 0 22px 48px rgba(255, 255, 255, 0.17);

    svg {
      transform: translateX(5px);
    }
  }
`;