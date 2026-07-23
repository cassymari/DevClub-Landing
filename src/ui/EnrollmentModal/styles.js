import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 9999;

  width: 100%;
  height: 100vh;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding: 105px 24px 40px;

  background: rgba(3, 3, 10, 0.78);
  backdrop-filter: blur(14px);
 pointer-events: auto;

  overflow-x: hidden;
  overflow-y: auto;

  overscroll-behavior: contain;

  @media (max-width: 600px) {
    padding: 90px 12px 24px;
  }
`;
export const ModalContainer = styled(motion.div)`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 560px;

  margin: 0 auto;
  padding: 42px;
  pointer-events: auto;

  border: 1px solid rgba(139, 92, 246, 0.24);
  border-radius: 28px;

  background:
    radial-gradient(
      circle at top left,
      rgba(139, 92, 246, 0.14),
      transparent 38%
    ),
    linear-gradient(
      145deg,
      rgba(18, 18, 32, 0.98),
      rgba(8, 8, 18, 0.98)
    );

  box-shadow:
    0 32px 90px rgba(0, 0, 0, 0.65),
    0 0 60px rgba(139, 92, 246, 0.13),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  overflow: hidden;

  @media (max-width: 600px) {
    padding: 32px 20px 26px;
    border-radius: 22px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 20;

  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  color: #ffffff;
  background: rgba(8, 8, 18, 0.88);

  font-size: 20px;
  cursor: pointer;

  transition:
    transform 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: rotate(90deg);
    background: #7c3aed;
  }
`;

export const ModalHeader = styled.div`
  position: relative;
  z-index: 1;
  pointer-events: auto;

  margin-bottom: 30px;
  padding-right: 25px;
`;

export const IconContainer = styled.div`
  width: 54px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border: 1px solid rgba(167, 139, 250, 0.25);
  border-radius: 16px;

  color: #c4b5fd;
  background: linear-gradient(
    145deg,
    rgba(139, 92, 246, 0.22),
    rgba(56, 189, 248, 0.08)
  );

  box-shadow: 0 0 30px rgba(139, 92, 246, 0.14);

  font-size: 25px;
`;

export const ModalTitle = styled.h2`
  margin: 0 0 10px;

  color: #ffffff;

  font-size: clamp(28px, 5vw, 38px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1.2px;
`;

export const ModalDescription = styled.p`
  max-width: 440px;
  margin: 0;

  color: #a8a8b8;

  font-size: 15px;
  line-height: 1.7;
`;

export const Form = styled.form`
  position: relative;
  z-index: 5;
pointer-events: auto;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: auto;
`;

export const InputLabel = styled.label`
  color: #d8d8e3;

  font-size: 13px;
  font-weight: 600;
   pointer-events: auto;
`;

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
   pointer-events: auto;

  border: 1px solid
    ${({ $hasError }) =>
      $hasError ? "rgba(248, 113, 113, 0.75)" : "rgba(255, 255, 255, 0.09)"};

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.035);

  transition:
    border-color 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;

  &:focus-within {
    border-color: ${({ $hasError }) =>
      $hasError ? "#f87171" : "rgba(139, 92, 246, 0.75)"};

    background: rgba(255, 255, 255, 0.05);

    box-shadow: ${({ $hasError }) =>
      $hasError
        ? "0 0 0 4px rgba(248, 113, 113, 0.08)"
        : "0 0 0 4px rgba(139, 92, 246, 0.09)"};
  }
`;

export const InputIcon = styled.span`
  position: absolute;
  left: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
   pointer-events: auto;

  color: #77778b;
  font-size: 17px;

  pointer-events: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;

  padding: 0 16px 0 46px;

  border: none;
  outline: none;

  color: #ffffff;
  background: transparent;
   pointer-events: auto;

  font-family: inherit;
  font-size: 14px;

  &::placeholder {
    color: #666679;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: #ffffff;
    -webkit-box-shadow: 0 0 0 1000px #11111d inset;
    transition: background-color 9999s ease-in-out 0s;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 52px;

  padding: 0 44px 0 46px;

  border: none;
  outline: none;

  color: ${({ value }) => (value ? "#ffffff" : "#77778b")};
  background: transparent;

  font-family: inherit;
  font-size: 14px;

  cursor: pointer;

  appearance: none;
  -webkit-appearance: none;

  background-image:
    linear-gradient(45deg, transparent 50%, #8b8b9e 50%),
    linear-gradient(135deg, #8b8b9e 50%, transparent 50%);

  background-position:
    calc(100% - 20px) 23px,
    calc(100% - 15px) 23px;

  background-size:
    5px 5px,
    5px 5px;

  background-repeat: no-repeat;

  option {
    color: #ffffff;
    background: #11111d;
  }
`;

export const ErrorMessage = styled.span`
  color: #f87171;

  font-size: 12px;
  font-weight: 500;
`;

export const SubmitButton = styled.button`
  width: 100%;
  min-height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 8px;
  padding: 14px 20px;

  border: none;
  border-radius: 15px;

  color: #ffffff;
  background: linear-gradient(135deg, #7c3aed, #9333ea, #6d28d9);

  box-shadow:
    0 14px 35px rgba(124, 58, 237, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);

  font-family: inherit;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    opacity 0.25s ease;

  svg {
    font-size: 18px;
    transition: transform 0.25s ease;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);

    box-shadow:
      0 18px 45px rgba(124, 58, 237, 0.38),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);

    svg {
      transform: translateX(4px);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const PrivacyText = styled.p`
  margin: -3px 0 0;

  color: #69697b;

  font-size: 11px;
  line-height: 1.5;
  text-align: center;
`;

export const LoadingSpinner = styled.span`
  width: 18px;
  height: 18px;

  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #ffffff;
  border-radius: 50%;

  animation: ${spin} 0.7s linear infinite;
`;

export const SuccessContainer = styled(motion.div)`
  position: relative;
  z-index: 1;

  min-height: 430px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 30px 0;

  text-align: center;
`;

export const SuccessIcon = styled(motion.div)`
  width: 92px;
  height: 92px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 26px;

  border: 1px solid rgba(74, 222, 128, 0.35);
  border-radius: 50%;

  color: #4ade80;
  background: rgba(74, 222, 128, 0.1);

  box-shadow:
    0 0 0 12px rgba(74, 222, 128, 0.035),
    0 0 50px rgba(74, 222, 128, 0.18);

  font-size: 42px;
`;

export const SuccessTitle = styled.h2`
  margin: 0 0 12px;

  color: #ffffff;

  font-size: clamp(28px, 5vw, 36px);
  font-weight: 800;
  letter-spacing: -1px;
`;

export const SuccessDescription = styled.p`
  max-width: 390px;
  margin: 0 0 30px;

  color: #aaaabd;

  font-size: 15px;
  line-height: 1.7;
`;

export const SuccessButton = styled.button`
  min-height: 50px;

  padding: 0 26px;

  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: 13px;

  color: #ddd6fe;
  background: rgba(139, 92, 246, 0.11);

  font-family: inherit;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.65);
    background: rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
  }
`;