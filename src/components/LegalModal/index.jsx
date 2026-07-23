import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { FiFileText, FiShield, FiX } from "react-icons/fi";

import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  ModalIcon,
  ModalLabel,
  ModalTitle,
  ModalDescription,
  ModalContent,
  ContentSection,
  ContentTitle,
  ContentText,
  Notice,
  FooterButton,
} from "./styles";

const legalContent = {
  privacy: {
    label: "Privacidade",
    title: "Política de Privacidade",
    description:
      "Entenda como os dados preenchidos neste projeto demonstrativo são tratados.",
    icon: FiShield,
    sections: [
      {
        title: "Finalidade do projeto",
        paragraphs: [
          "Este site foi desenvolvido para fins educacionais e para demonstração de habilidades em desenvolvimento web.",
          "Ele não representa uma plataforma comercial oficial e não realiza vendas reais de cursos ou serviços.",
        ],
      },
      {
        title: "Dados preenchidos no formulário",
        paragraphs: [
          "Os dados inseridos no formulário de interesse são armazenados apenas no localStorage do navegador utilizado pelo visitante.",
          "Esses dados não são enviados para servidores externos, bancos de dados ou serviços de terceiros.",
        ],
      },
      {
        title: "Compartilhamento de informações",
        paragraphs: [
          "Nenhuma informação é comercializada, compartilhada ou utilizada para fins publicitários.",
          "O armazenamento local existe apenas para demonstrar o funcionamento da interface.",
        ],
      },
    ],
  },

  terms: {
    label: "Termos",
    title: "Termos de Uso",
    description:
      "Confira as condições de uso e a finalidade demonstrativa deste projeto.",
    icon: FiFileText,
    sections: [
      {
        title: "Uso demonstrativo",
        paragraphs: [
          "Este site possui finalidade exclusivamente educacional e integra um projeto de portfólio.",
          "O conteúdo apresentado não constitui oferta comercial, promessa de contratação ou venda de formação.",
        ],
      },
      {
        title: "Conteúdo da interface",
        paragraphs: [
          "As formações, avaliações, números, empresas e demais informações exibidas foram utilizadas para composição visual e demonstração de experiência do usuário.",
          "Alguns elementos podem ser fictícios ou representativos.",
        ],
      },
      {
        title: "Marcas e referências",
        paragraphs: [
          "O projeto foi inspirado em plataformas de ensino de programação, mas não possui vínculo oficial com o DevClub, Rodolfo Mori ou com as empresas mencionadas.",
          "Os nomes de marcas são utilizados apenas como referência visual e de mercado.",
        ],
      },
    ],
  },
};

export function LegalModal({ isOpen, type, onClose }) {
  const content = legalContent[type] || legalContent.privacy;
  const Icon = content.icon;

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          data-lenis-prevent
          data-lenis-prevent-wheel
          data-lenis-prevent-touch
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContainer
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
            onClick={(event) => event.stopPropagation()}
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              scale: 0.97,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CloseButton
              type="button"
              onClick={onClose}
              aria-label="Fechar modal"
            >
              <FiX />
            </CloseButton>

            <ModalHeader>
              <ModalIcon>
                <Icon />
              </ModalIcon>

              <ModalLabel>{content.label}</ModalLabel>

              <ModalTitle id="legal-modal-title">
                {content.title}
              </ModalTitle>

              <ModalDescription>
                {content.description}
              </ModalDescription>
            </ModalHeader>

            <ModalContent>
              {content.sections.map((section) => (
                <ContentSection key={section.title}>
                  <ContentTitle>{section.title}</ContentTitle>

                  {section.paragraphs.map((paragraph) => (
                    <ContentText key={paragraph}>
                      {paragraph}
                    </ContentText>
                  ))}
                </ContentSection>
              ))}

              <Notice>
                Este projeto foi criado para fins de estudo, demonstração técnica
                e composição de portfólio.
              </Notice>

              <FooterButton type="button" onClick={onClose}>
                Fechar
              </FooterButton>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}