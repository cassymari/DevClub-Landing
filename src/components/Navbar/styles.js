import styled from "styled-components"

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;

  background: rgba(5, 8, 22, 0.82);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`

export const Container = styled.nav`
   width: min(1200px, calc(100% - 48px));
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;

  a {
    position: relative;

    color: #cbd5e1;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;

    transition:
      color 0.25s ease,
      transform 0.25s ease;

    &::after {
      content: "";

      position: absolute;
      left: 0;
      bottom: -8px;

      width: 0;
      height: 2px;

      border-radius: 999px;

      background: linear-gradient(
        90deg,
        #7c3aed,
        #38bdf8
      );

      transition: width 0.3s ease;
    }

    &:hover {
      color: #ffffff;
      transform: translateY(-2px);
    }

    &:hover::after,
    &.active::after {
      width: 100%;
    }

    &.active {
      color: #ffffff;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`;


export const StartButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 12px 20px;

  border: 1px solid rgba(139, 92, 246, 0.45);
  border-radius: 12px;

  color: #ffffff;
  background: linear-gradient(135deg, #7c3aed, #9333ea);

  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  cursor: pointer;

  box-shadow: 0 10px 30px rgba(124, 58, 237, 0.25);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  svg {
    font-size: 18px;
    transition: transform 0.25s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(124, 58, 237, 0.38);

    svg {
      transform: translateX(4px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Button = styled.a`
display: inline-flex;
align-items: center;
justify-content: center;
gap: 10px;

padding: 14px 32px;
background: linear-gradient(
180deg,
#FFFFFF,
#F4F4F5
);
color: #111;

border:  1px solid rgba(255,255,255,.08);
border-radius: 999px;

font-size: 16px;
font-weight: 600;
letter-spacing: 0.3px;

cursor: pointer;

box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

transition: transform .25s ease;

&:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

&:active{
    transform: translateY(0);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
}

&:disabled{
    opacity: 0.6;
    cursor: not-allowed;
}

svg{
    transition: transform 0.25s ease;
}

&:hover svg{
    transform: translateX(6px);
}
`;
