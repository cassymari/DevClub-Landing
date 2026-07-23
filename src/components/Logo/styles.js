import styled from "styled-components";

export const LogoContainer = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;

  color: inherit;
  text-decoration: none;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &:hover svg {
    transform: rotate(-6deg) scale(1.04);
  }
`;

export const LogoMark = styled.svg`
  width: 38px;
  height: 38px;

  overflow: visible;

  transition: transform 0.35s ease;

  path {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 4;
  }

  .symbol-left,
  .symbol-right {
    stroke: #ffffff;
  }

  .symbol-slash {
    stroke: #7c3aed;
  }
`;

export const LogoText = styled.div`
  display: flex;
  align-items: center;

  font-size: 23px;
  line-height: 1;
  letter-spacing: 1px;

  span {
    color: #ffffff;
    font-weight: 750;
  }

  strong {
    color: #7c3aed;
    font-weight: 850;
  }

  @media (max-width: 480px) {
    font-size: 19px;
  }
`;