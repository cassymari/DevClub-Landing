import { LogoContainer, LogoMark, LogoText } from "./styles";

export function Logo() {
  return (
    <LogoContainer href="#hero" aria-label="Voltar ao início">
      <LogoMark
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
      >
        <path
          d="M18 13L7 24L18 35"
          className="symbol-left"
        />

        <path
          d="M30 13L41 24L30 35"
          className="symbol-right"
        />

        <path
          d="M27 9L21 39"
          className="symbol-slash"
        />
      </LogoMark>

      <LogoText>
        <span>DEV</span>
        <strong>CLUB</strong>
      </LogoText>
    </LogoContainer>
  );
}