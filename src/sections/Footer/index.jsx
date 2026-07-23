import {
  FiArrowUp,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { useState } from "react";
import { LegalModal } from "../../components/LegalModal";

import {
  FooterSection,
  FooterContainer,
  FooterTop,
  BrandArea,
  BrandLogo,
  BrandDescription,
  SocialLinks,
  SocialLink,
  NavigationArea,
  NavigationColumn,
  NavigationTitle,
  NavigationLink,
  ContactArea,
  ContactTitle,
  ContactText,
  ContactLink,
  FooterBottom,
  Copyright,
  BottomLinks,
  BottomLink,
  BackToTop,
} from "./styles";

const navigationLinks = [
  {
    label: "Quem Somos",
    href: "#about",
  },
  {
    label: "Mentoria",
    href: "#tutors",
  },
  {
    label: "Formações",
    href: "#formations",
  },
  {
    label: "Empresas",
    href: "#companies",
  },
];

const supportLinks = [
  {
    label: "Conteúdos extras",
    href: "#extra-contents",
  },
  {
    label: "Começar agora",
    href: "#formations",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const [legalModalType, setLegalModalType] = useState(null);

  function openLegalModal(type) {
    setLegalModalType(type);
  }

  function closeLegalModal() {
    setLegalModalType(null);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterTop>
            <BrandArea>
              <BrandLogo href="#hero" aria-label="Voltar ao início">
                <span>{"<"}</span>
                DevClub
                <span>{"/>"}</span>
              </BrandLogo>

              <BrandDescription>
                Formação prática para quem quer aprender programação, construir
                projetos reais e conquistar espaço no mercado de tecnologia.
              </BrandDescription>

              <SocialLinks>
                <SocialLink
                  href="https://github.com/rodolfomori-devclub/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </SocialLink>

                <SocialLink
                  href="https://www.linkedin.com/company/devclubme/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </SocialLink>

                <SocialLink
                  href="https://www.instagram.com/devclubescola/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <FiInstagram />
                </SocialLink>
              </SocialLinks>
            </BrandArea>

            <NavigationArea>
              <NavigationColumn>
                <NavigationTitle>Navegação</NavigationTitle>

                {navigationLinks.map((link) => (
                  <NavigationLink key={link.label} href={link.href}>
                    {link.label}
                  </NavigationLink>
                ))}
              </NavigationColumn>

              <NavigationColumn>
                <NavigationTitle>Explore</NavigationTitle>

                {supportLinks.map((link) => (
                  <NavigationLink key={link.label} href={link.href}>
                    {link.label}
                  </NavigationLink>
                ))}

                <NavigationLink
                  as="button"
                  type="button"
                  onClick={() => openLegalModal("privacy")}
                >
                  Política de privacidade
                </NavigationLink>

                <NavigationLink
                  as="button"
                  type="button"
                  onClick={() => openLegalModal("terms")}
                >
                  Termos de uso
                </NavigationLink>
              </NavigationColumn>
            </NavigationArea>

            <ContactArea>
              <ContactTitle>Fale com a gente</ContactTitle>

              <ContactText>
                Ficou com alguma dúvida sobre as formações ou sobre a plataforma?
              </ContactText>

              <ContactLink href="mailto:contato@devclub.com.br">
                <FiMail />
                contato@devclub.com.br
              </ContactLink>
            </ContactArea>
          </FooterTop>

          <FooterBottom>
            <Copyright>
              © {currentYear} DevClub. Todos os direitos reservados.
            </Copyright>

            <BottomLinks>
              <BottomLink
                type="button"
                onClick={() => openLegalModal("privacy")}
              >
                Privacidade
              </BottomLink>

              <BottomLink
                type="button"
                onClick={() => openLegalModal("terms")}
              >
                Termos
              </BottomLink>
            </BottomLinks>

            <BackToTop
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
            >
              <FiArrowUp />
            </BackToTop>
          </FooterBottom>
        </FooterContainer>
      </FooterSection>

      <LegalModal
        isOpen={Boolean(legalModalType)}
        type={legalModalType}
        onClose={closeLegalModal}
      />
    </>
  );
}