import styled from "styled-components";

export const FooterSection = styled.footer`
  position: relative;
  overflow: hidden;

  padding: 80px 24px 28px;

  border-top: 1px solid rgba(255, 255, 255, 0.07);

  background:
    radial-gradient(
      circle at 12% 15%,
      rgba(16, 185, 129, 0.07),
      transparent 26%
    ),
    radial-gradient(
      circle at 88% 80%,
      rgba(124, 58, 237, 0.08),
      transparent 28%
    ),
    #04050f;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

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

    background-size: 65px 65px;

    mask-image: linear-gradient(
      to bottom,
      black,
      transparent 75%
    );

    -webkit-mask-image: linear-gradient(
      to bottom,
      black,
      transparent 75%
    );

    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 65px 20px 24px;
  }
`;

export const FooterContainer = styled.div`
  position: relative;
  z-index: 1;

  width: min(1180px, 100%);
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(320px, 0.85fr)
    minmax(250px, 0.7fr);

  gap: 70px;

  padding-bottom: 55px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 45px;
  }
`;

export const BrandArea = styled.div`
  max-width: 430px;
`;

export const BrandLogo = styled.a`
  width: fit-content;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 22px;

  color: #ffffff;

  font-size: 26px;
  font-weight: 800;
  letter-spacing: -1px;

  text-decoration: none;

  span {
    color: #6ee7b7;

    font-family: monospace;
    font-size: 21px;
  }
`;

export const BrandDescription = styled.p`
  max-width: 390px;
  margin-bottom: 27px;

  color: #929caf;

  font-size: 14px;
  line-height: 1.8;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

export const SocialLink = styled.a`
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 13px;

  color: #aab3c2;
  background: rgba(255, 255, 255, 0.035);

  text-decoration: none;

  transition:
    transform 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;

  svg {
    font-size: 17px;
  }

  &:hover {
    transform: translateY(-4px);

    color: #6ee7b7;
    border-color: rgba(52, 211, 153, 0.28);
    background: rgba(16, 185, 129, 0.07);
  }
`;

export const NavigationArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 35px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

export const NavigationColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 13px;
`;

export const NavigationTitle = styled.h3`
  margin-bottom: 5px;

  color: #ffffff;

  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.8px;
`;

export const NavigationLink = styled.a`
  display: block;
  width: fit-content;
  padding: 0;

  border: none;

  color: #9ca3af;
  background: transparent;

  font-family: inherit;
  font-size: 14px;
  text-decoration: none;

  cursor: pointer;

  transition: color 0.25s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const ContactArea = styled.div`
  min-width: 0;
`;

export const ContactTitle = styled.h3`
  margin-bottom: 14px;

  color: #ffffff;

  font-size: 17px;
`;

export const ContactText = styled.p`
  margin-bottom: 22px;

  color: #929caf;

  font-size: 13px;
  line-height: 1.7;
`;

export const ContactLink = styled.a`
  min-width: 0;

  display: inline-flex;
  align-items: center;
  gap: 10px;

  color: #6ee7b7;

  font-size: 13px;
  font-weight: 600;

  text-decoration: none;

  transition:
    color 0.3s ease,
    transform 0.3s ease;

  svg {
    flex-shrink: 0;
    font-size: 17px;
  }

  &:hover {
    color: #a78bfa;
    transform: translateX(4px);
  }
`;

export const FooterBottom = styled.div`
  min-height: 70px;
  padding-top: 25px;

  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 25px;

  border-top: 1px solid rgba(255, 255, 255, 0.07);

  @media (max-width: 700px) {
    grid-template-columns: 1fr auto;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;

    text-align: center;
  }
`;

export const Copyright = styled.p`
  color: #70798a;

  font-size: 11px;
`;

export const BottomLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const BottomLink = styled.a`
  color: #70798a;

  font-size: 11px;
  text-decoration: none;
  cursor: pointer;

  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

export const BackToTop = styled.button`
  width: 42px;
  height: 42px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(52, 211, 153, 0.22);
  border-radius: 13px;

  color: #6ee7b7;
  background: rgba(16, 185, 129, 0.07);

  cursor: pointer;

  transition:
    transform 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;

  svg {
    font-size: 17px;
  }

  &:hover {
    transform: translateY(-4px);

    color: #07120e;
    border-color: transparent;
    background: #6ee7b7;
  }

  @media (max-width: 520px) {
    margin: 0 auto;
  }
`;