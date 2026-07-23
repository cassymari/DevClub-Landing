import styled from "styled-components";
import { motion } from "framer-motion";

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 10000;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 105px 24px 40px;

  overflow-x: hidden;
  overflow-y: auto;

  background: rgba(2, 4, 12, 0.84);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  overscroll-behavior: contain;
  touch-action: pan-y;

  @media (max-width: 600px) {
    padding: 90px 12px 24px;
  }
`;

export const ModalContainer = styled(motion.div)`
  position: relative;
  flex-shrink: 0;

  width: 100%;
  max-width: 720px;

  margin: 0 auto;
  padding: 44px;

  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 28px;

  background:
    radial-gradient(
      circle at top left,
      rgba(139, 92, 246, 0.16),
      transparent 35%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(56, 189, 248, 0.08),
      transparent 30%
    ),
    linear-gradient(
      145deg,
      rgba(18, 18, 32, 0.99),
      rgba(7, 8, 18, 0.99)
    );

  box-shadow:
    0 35px 100px rgba(0, 0, 0, 0.68),
    0 0 60px rgba(124, 58, 237, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  overflow: hidden;

  &::before {
    content: "";

    position: absolute;
    top: -150px;
    right: -150px;

    width: 320px;
    height: 320px;

    border-radius: 50%;

    background: rgba(124, 58, 237, 0.15);
    filter: blur(70px);

    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 34px 20px 26px;
    border-radius: 22px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 10;

  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  color: #ffffff;
  background: rgba(7, 8, 18, 0.82);
  backdrop-filter: blur(10px);

  font-size: 20px;
  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;

  &:hover {
    transform: rotate(90deg);
    background: #7c3aed;
    border-color: rgba(196, 181, 253, 0.75);
  }
`;

export const ModalHeader = styled.div`
  position: relative;
  z-index: 1;

  padding-right: 48px;
  margin-bottom: 34px;
`;

export const ModalIcon = styled.div`
  width: 56px;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border: 1px solid rgba(167, 139, 250, 0.3);
  border-radius: 17px;

  color: #c4b5fd;
  background: linear-gradient(
    145deg,
    rgba(139, 92, 246, 0.22),
    rgba(56, 189, 248, 0.08)
  );

  box-shadow: 0 0 30px rgba(124, 58, 237, 0.16);

  font-size: 25px;
`;

export const ModalLabel = styled.span`
  display: inline-block;
  margin-bottom: 10px;

  color: #a78bfa;

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;

export const ModalTitle = styled.h2`
  margin: 0 0 12px;

  color: #ffffff;

  font-size: clamp(30px, 5vw, 42px);
  line-height: 1.05;
  letter-spacing: -1.4px;
`;

export const ModalDescription = styled.p`
  max-width: 560px;
  margin: 0;

  color: #a5adbd;

  font-size: 15px;
  line-height: 1.75;
`;

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const ContentSection = styled.section`
  padding-bottom: 25px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

export const ContentTitle = styled.h3`
  margin: 0 0 14px;

  color: #ffffff;

  font-size: 19px;
  font-weight: 700;
  letter-spacing: -0.4px;
`;

export const ContentText = styled.p`
  margin: 0 0 12px;

  color: #aeb6c6;

  font-size: 14px;
  line-height: 1.8;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Notice = styled.div`
  padding: 18px 20px;

  border: 1px solid rgba(167, 139, 250, 0.22);
  border-radius: 16px;

  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.09);

  font-size: 13px;
  line-height: 1.7;
`;

export const FooterButton = styled.button`
  width: 100%;
  min-height: 52px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 14px;

  color: #ffffff;
  background: linear-gradient(
    135deg,
    #7c3aed,
    #9333ea
  );

  box-shadow: 0 14px 35px rgba(124, 58, 237, 0.24);

  font-family: inherit;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 45px rgba(124, 58, 237, 0.34);
  }

  &:active {
    transform: translateY(0);
  }
`;