import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background:
    radial-gradient(circle at top, rgba(124, 58, 237, 0.25), transparent 35%),
    #080812;
`;

export const LoginBox = styled.section`
  width: 100%;
  max-width: 430px;
  padding: 40px;
  border: 1px solid rgba(139, 92, 246, 0.35);
  border-radius: 24px;
  background: rgba(15, 15, 30, 0.95);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.45);
`;

export const Title = styled.h1`
  margin-bottom: 12px;
  color: #ffffff;
  font-size: 32px;
`;

export const Description = styled.p`
  margin-bottom: 32px;
  color: #a1a1b5;
  line-height: 1.6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  margin-top: 8px;
  color: #ffffff;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 16px;
  border: 1px solid #303046;
  border-radius: 12px;
  outline: none;
  color: #ffffff;
  background: #11111f;

  &:focus {
    border-color: #8b5cf6;
  }
`;

export const Button = styled.button`
  margin-top: 16px;
  padding: 15px;
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(135deg, #7c3aed, #9333ea);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

export const ErrorMessage = styled.p`
  margin-top: 8px;
  color: #ff6b81;
`;