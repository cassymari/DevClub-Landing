import styled from "styled-components";
import { motion } from 'framer-motion'


export const HeroSection = styled.section`
  position: relative;
  isolation: isolate;

  min-height: 100vh;
  overflow: hidden;
  padding: 150px 24px 80px;

  background:
    radial-gradient(
      circle at 18% 22%,
      rgba(124, 58, 237, 0.2),
      transparent 34%
    ),
    radial-gradient(
      circle at 82% 28%,
      rgba(56, 189, 248, 0.13),
      transparent 30%
    ),
    #050816;

  canvas {
    z-index: 1;
  }

  &::before,
  &::after {
    z-index: 0;
  }
`;
export const HeroContainer = styled.div`
  position: relative;
  z-index: 2;

  pointer-events: none;

  width: min(1200px, 100%);
  min-height: calc(100vh - 230px);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 72px;

  a,
  button {
    pointer-events: auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 64px;
  }
`;

export const HeroContent = styled(motion.div)`
  max-width: 650px;
`;

export const Eyebrow = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  margin-bottom: 24px;
  padding: 8px 14px;

  color: #c4b5fd;
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.08);

  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.4px;

  span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #8b5cf6;
    box-shadow: 0 0 14px #8b5cf6;
  }
`;

export const Title = styled(motion.h1)`
  max-width: 700px;
  margin-bottom: 24px;

  color: #ffffff;
  font-size: clamp(52px, 7vw, 88px);
  line-height: 0.98;
  letter-spacing: -4px;
  font-weight: 800;

  @media (max-width: 600px) {
    letter-spacing: -2px;
  }
`;

export const Highlight = styled.span`
  display: block;
  padding-bottom: 8px;

  color: transparent;
  background: linear-gradient(90deg, #a78bfa, #7c3aed, #38bdf8);
  background-clip: text;
  -webkit-background-clip: text;
`;

export const Description = styled(motion.p)`
  max-width: 590px;
  margin-bottom: 34px;

  color: #a8b0c0;
  font-size: 18px;
  line-height: 1.75;
`;

export const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

export const ButtonBase = styled.a`
  min-height: 54px;
  padding: 0 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 999px;
  text-decoration: none;
  font-size: 15px;
  font-weight: 650;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }

  svg {
    font-size: 18px;
    transition: transform 0.25s ease;
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  color: #ffffff;
  background: linear-gradient(135deg, #7c3aed, #4f46e5);
  box-shadow: 0 14px 35px rgba(124, 58, 237, 0.32);
  cursor: pointer;

  &:hover {
    box-shadow: 0 18px 44px rgba(124, 58, 237, 0.46);

    svg {
      transform: translateX(5px);
    }
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  color: #e2e8f0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.045);

  &:hover {
    background: rgba(255, 255, 255, 0.08);

    svg {
      transform: scale(1.12);
    }
  }
`;

export const HeroVisual = styled(motion.div)`
  position: relative;
  min-height: 450px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    min-height: 360px;
  }
`;
export const CodeWindow = styled(motion.div)`
  position: relative;
  z-index: 2;

  width: min(100%, 510px);
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;

  background: rgba(10, 14, 29, 0.72);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  box-shadow:
    0 35px 90px rgba(0, 0, 0, 0.5),
    0 0 80px rgba(124, 58, 237, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  transform-style: preserve-3d;
`;

export const WindowHeader = styled.div`
  height: 54px;
  padding: 0 18px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  color: #717b91;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.025);

  > p {
    font-size: 13px;
    justify-self: center;
  }


`;

export const WindowDots = styled.div`
  display: flex;
  gap: 7px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  span:nth-child(1) {
    color: #ff5f57;
    background: currentColor;
    box-shadow: 0 0 9px currentColor;
  }

  span:nth-child(2) {
    color: #febc2e;
    background: currentColor;
    box-shadow: 0 0 9px currentColor;
  }

  span:nth-child(3) {
    color: #28c840;
    background: currentColor;
    box-shadow: 0 0 9px currentColor;
  }
`;

export const CodeContent = styled.div`
  min-height: 300px;
  padding: 34px;

  color: #d8dee9;
  font-family: "Courier New", monospace;
  font-size: 15px;
  line-height: 2;

  p {
    white-space: nowrap;
  }

  .indent {
    padding-left: 28px;
  }

  .purple {
    color: #c084fc;
  }

  .blue {
    color: #60a5fa;
  }

  .green {
    color: #86efac;
  }

  .terminal {
    margin-top: 20px;
    color: #94a3b8;

    span {
      color: #a78bfa;
    }
  }

  .success {
    color: #4ade80;
  }

  @media (max-width: 480px) {
    padding: 24px 18px;
    font-size: 12px;
  }
`;

export const TechBadge = styled(motion.span)`
  position: absolute;
  z-index: 3;

  padding: 10px 16px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 14px;

  color: #ffffff;
  background: rgba(13, 18, 35, 0.78);
  backdrop-filter: blur(12px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);

  font-size: 13px;
  font-weight: 700;

  &.react {
    top: 105px;
    right: 14px;
    color: #67e8f9;
  }

  &.node {
    bottom: 34px;
    left: 14px;
    color: #86efac;
  }

  &.javascript {
  top: 35px;
  left: 40px;
  color: #fde047;
}

&.ai {
  right: 35px;
  bottom: 80px;
  color: #c4b5fd;
}

  @media (max-width: 480px) {
    display: none;
  }
`;

export const LiveStatus = styled.div`
    justify-self: end;

    display:flex;
    align-items:center;
    gap:7px;

    color:#86efac;

    font-size:11px;
    font-weight:700;
    letter-spacing:1px;

    span{
        width:7px;
        height:7px;
        border-radius:50%;

        background:#4ade80;

        box-shadow:0 0 12px rgba(74,222,128,.9);

        animation: pulse 1.8s infinite;
    }

    @keyframes pulse{
        0%,100%{
            opacity:1;
            transform:scale(1);
        }

        50%{
            opacity:.4;
            transform:scale(.7);
        }
    }
`;


export const VisualGlow = styled.div`
  position: absolute;
  z-index: 0;

  width: 430px;
  height: 430px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(124, 58, 237, 0.3),
      rgba(56, 189, 248, 0.12) 45%,
      transparent 70%
    );

  filter: blur(30px);

  animation: visualGlowMove 7s ease-in-out infinite alternate;

  pointer-events: none;

  @keyframes visualGlowMove {
    from {
      transform: translate3d(-35px, -20px, 0) scale(0.92);
      opacity: 0.65;
    }

    to {
      transform: translate3d(45px, 35px, 0) scale(1.14);
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    width: 320px;
    height: 320px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;