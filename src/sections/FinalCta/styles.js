import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const glowAnimation = keyframes`
  0%,100%{
    transform:translate(-50%,-50%) scale(1);
    opacity:.45;
  }

  50%{
    transform:translate(-50%,-50%) scale(1.15);
    opacity:.75;
  }
`;

const float = keyframes`
  0%,100%{
    transform:translateY(0);
  }

  50%{
    transform:translateY(-10px);
  }
`;

export const Section = styled.section`
  position: relative;
  overflow: hidden;

  padding: 140px 24px;

  background:
    radial-gradient(circle at top,#111a34 0%,transparent 35%),
    linear-gradient(180deg,#050713 0%,#04050f 100%);
`;

export const BackgroundGlow = styled.div`
  position:absolute;
  left:50%;
  top:50%;

  width:700px;
  height:700px;

  transform:translate(-50%,-50%);
  border-radius:50%;

  background:
    radial-gradient(circle,
      rgba(16,185,129,.14),
      rgba(139,92,246,.10),
      transparent 70%);

  filter:blur(70px);

  animation:${glowAnimation} 8s ease-in-out infinite;
`;

export const GlowCircle = styled.div`
  position:absolute;

  right:-120px;
  bottom:-120px;

  width:300px;
  height:300px;

  border-radius:50%;

  background:rgba(16,185,129,.08);

  filter:blur(70px);
`;

export const Container = styled.div`
  width:min(1180px,100%);
  margin:auto;
`;

export const Content = styled(motion.div)`
  position:relative;
  z-index:2;

  padding:70px;

  border-radius:40px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.06),
      rgba(255,255,255,.02)
    );

  border:1px solid rgba(255,255,255,.08);

  backdrop-filter:blur(18px);

  box-shadow:
    0 40px 80px rgba(0,0,0,.35),
    inset 0 1px rgba(255,255,255,.06);

  text-align:center;

  @media(max-width:768px){
    padding:45px 25px;
  }
`;

export const Badge = styled.div`
  width:fit-content;

  margin:0 auto 24px;

  display:flex;
  align-items:center;
  gap:10px;

  padding:10px 18px;

  border-radius:999px;

  background:rgba(16,185,129,.12);

  color:#6ee7b7;

  border:1px solid rgba(16,185,129,.2);

  font-size:13px;
  font-weight:700;

  svg{
    font-size:17px;
  }
`;

export const Title = styled.h2`
  color:white;

  font-size:clamp(40px,5vw,70px);

  line-height:1.08;

  letter-spacing:-3px;

  max-width:900px;

  margin:0 auto;
`;

export const GradientText = styled.span`
  background: linear-gradient(
    90deg,
    #6ee7b7,
    #34d399,
    #8b5cf6
  );

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
`;

export const Description = styled.p`
  margin:28px auto 45px;

  max-width:720px;

  color:#a3acbd;

  line-height:1.8;

  font-size:17px;
`;

export const Buttons = styled.div`
  display:flex;
  justify-content:center;
  gap:18px;

  flex-wrap:wrap;

  margin-bottom:70px;
`;

export const PrimaryButton = styled.a`
  height:58px;

  padding:0 32px;
  cursor: pointer;

  display:flex;
  align-items:center;
  gap:12px;

  border-radius:999px;

  background:
    linear-gradient(
      135deg,
      #6ee7b7,
      #10b981
    );

  color:#05110d;

  text-decoration:none;

  font-weight:700;

  transition:.35s;

  box-shadow:
    0 20px 40px rgba(16,185,129,.28);

  svg{
    transition:.35s;
  }

  &:hover{
    transform:translateY(-4px);

    svg{
      transform:translateX(5px);
    }
  }
`;

export const SecondaryButton = styled.a`
  height:58px;

  padding:0 30px;

  display:flex;
  align-items:center;

  border-radius:999px;

  text-decoration:none;

  color:white;

  border:1px solid rgba(255,255,255,.1);

  background:rgba(255,255,255,.03);

  transition:.35s;

  &:hover{
    background:rgba(255,255,255,.07);

    transform:translateY(-4px);
  }
`;

export const Stats = styled.div`
  display:grid;
  grid-template-columns:repeat(3,1fr);

  gap:20px;

  @media(max-width:900px){
    grid-template-columns:1fr;
  }
`;

export const StatCard = styled.div`
  padding:30px;

  border-radius:24px;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.05),
      rgba(255,255,255,.02)
    );

  border:1px solid rgba(255,255,255,.07);

  transition:.35s;

  &:hover{
    transform:translateY(-8px);

    border-color:rgba(16,185,129,.2);

    box-shadow:
      0 20px 40px rgba(0,0,0,.25);
  }
`;

export const StatIcon = styled.div`
  width:60px;
  height:60px;

  margin:auto auto 18px;

  display:grid;
  place-items:center;

  border-radius:18px;

  background:
    linear-gradient(
      135deg,
      rgba(16,185,129,.18),
      rgba(139,92,246,.12)
    );

  color:#6ee7b7;

  animation:${float} 4s ease-in-out infinite;

  svg{
    font-size:24px;
  }
`;

export const StatNumber = styled.h3`
  color:white;

  font-size:34px;

  margin-bottom:10px;
`;

export const StatLabel = styled.p`
  color:#97a1b3;

  font-size:14px;

  line-height:1.7;
`;