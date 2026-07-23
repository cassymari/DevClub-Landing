import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiCompass,
  FiMessageCircle,
  FiPlay,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

import rodolfoImage from "../../assets/rodolfoImage.png";

import {
  TutorsSection,
  BackgroundEffects,
  BackgroundGlow,
  FloatingCode,
  TutorsContainer,
  SectionHeader,
  SectionLabel,
  Title,
  Description,
  MentorContent,
  ImageArea,
  ImageFrame,
  ImageGlow,
  MentorImage,
  ImageOverlay,
  ExperienceBadge,
  ExperienceIcon,
  ExperienceText,
  FloatingTechnology,
  MentorInformation,
  MentorTag,
  MentorName,
  MentorRole,
  MentorDescription,
  TechnologyList,
  Technology,
  MentorButton,
  SupportArea,
  SupportHeader,
  SupportGrid,
  SupportCard,
  SupportIcon,
  SupportNumber,
  SupportTitle,
  SupportDescription,
  BottomMessage,
  BottomIcon,
  BottomContent,
} from "./styles";

const supportItems = [
  {
    id: "01",
    icon: FiMessageCircle,
    title: "Suporte próximo",
    description:
      "Conte com orientação durante sua evolução para superar dúvidas e continuar avançando.",
  },
  {
    id: "02",
    icon: FiUsers,
    title: "Comunidade ativa",
    description:
      "Aprenda ao lado de pessoas que compartilham o mesmo objetivo de entrar na tecnologia.",
  },
  {
    id: "03",
    icon: FiTarget,
    title: "Projetos práticos",
    description:
      "Transforme conhecimento em aplicações reais e construa um portfólio profissional.",
  },
  {
    id: "04",
    icon: FiCompass,
    title: "Direção profissional",
    description:
      "Desenvolva habilidades técnicas e comportamentais importantes para o mercado.",
  },
];

const containerAnimation = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUpAnimation = {
  hidden: {
    opacity: 0,
    y: 45,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageAnimation = {
  hidden: {
    opacity: 0,
    x: -55,
    scale: 0.95,
  },

  visible: {
    opacity: 1,
    x: 0,
    scale: 1,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const informationAnimation = {
  hidden: {
    opacity: 0,
    x: 55,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Mentoria() {
  return (
    <TutorsSection id="tutors">
      <BackgroundEffects aria-hidden="true">
        <BackgroundGlow />

        <FloatingCode $top="12%" $left="5%" $delay="0s">
          {"</>"}
        </FloatingCode>

        <FloatingCode $top="28%" $right="7%" $delay="1.5s">
          {"{ }"}
        </FloatingCode>

        <FloatingCode $bottom="16%" $left="9%" $delay="2.8s">
          {"01"}
        </FloatingCode>

        <FloatingCode $bottom="12%" $right="6%" $delay="4s">
          {"=>"}
        </FloatingCode>
      </BackgroundEffects>

      <TutorsContainer
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
      >
        <SectionHeader variants={fadeUpAnimation}>
          <SectionLabel>
            <span />
            Mentoria
            <span />
          </SectionLabel>

          <Title>
            Aprenda com quem conhece o caminho
            <span> até o mercado.</span>
          </Title>

          <Description>
            Mais do que assistir às aulas, você encontra direção, prática e uma
            comunidade preparada para acompanhar sua evolução.
          </Description>
        </SectionHeader>

        <MentorContent>
          <ImageArea variants={imageAnimation}>
            <ImageGlow aria-hidden="true" />

            <ImageFrame>
              <MentorImage
                src={rodolfoImage}
                alt="Rodolfo Mori, fundador do DevClub"
              />

              <ImageOverlay />
            </ImageFrame>

            <ExperienceBadge>
              <ExperienceIcon>
                <FiPlay />
              </ExperienceIcon>

              <ExperienceText>
                <span>Aprendizado</span>
                <strong>Direto ao ponto</strong>
              </ExperienceText>
            </ExperienceBadge>

            <FloatingTechnology $position="top">
              JavaScript
            </FloatingTechnology>

            <FloatingTechnology $position="bottom">
              Full Stack
            </FloatingTechnology>
          </ImageArea>

          <MentorInformation variants={informationAnimation}>
            <MentorTag>
              <FiCheck />
              Fundador do DevClub
            </MentorTag>

            <MentorName>Rodolfo Mori</MentorName>

            <MentorRole>
              Desenvolvedor, professor e mentor de tecnologia
            </MentorRole>

            <MentorDescription>
              Depois de transformar a própria trajetória através da programação,
              Rodolfo Mori criou o DevClub com o objetivo de ajudar outras pessoas
              a desenvolverem habilidades práticas e conquistarem oportunidades no
              mercado de tecnologia.
            </MentorDescription>

            <MentorDescription>
              A metodologia é baseada em aprendizado direto, construção de
              projetos e desenvolvimento das competências necessárias para atuar
              como desenvolvedor.
            </MentorDescription>

            <TechnologyList>
              <Technology>
                <FiCode />
                Desenvolvimento Web
              </Technology>

              <Technology>
                <FiTarget />
                Projetos reais
              </Technology>

              <Technology>
                <FiUsers />
                Comunidade
              </Technology>
            </TechnologyList>

            <MentorButton href="#formations">
              Conhecer as formações
              <FiArrowRight />
            </MentorButton>
          </MentorInformation>
        </MentorContent>

        <SupportArea>
          <SupportHeader variants={fadeUpAnimation}>
            <span>Uma jornada acompanhada</span>

            <h3>
              Tudo o que você precisa para continuar evoluindo.
            </h3>
          </SupportHeader>

          <SupportGrid>
            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <SupportCard
                  key={item.id}
                  variants={cardAnimation}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.28,
                    },
                  }}
                >
                  <div>
                    <SupportIcon>
                      <Icon />
                    </SupportIcon>

                    <SupportNumber>{item.id}</SupportNumber>
                  </div>

                  <SupportTitle>{item.title}</SupportTitle>

                  <SupportDescription>
                    {item.description}
                  </SupportDescription>
                </SupportCard>
              );
            })}
          </SupportGrid>
        </SupportArea>

        <BottomMessage variants={fadeUpAnimation}>
          <BottomIcon>
            <FiCode />
          </BottomIcon>

          <BottomContent>
            <span>Não é apenas sobre aprender código.</span>

            <strong>
              É sobre desenvolver confiança para construir sua nova carreira.
            </strong>
          </BottomContent>
        </BottomMessage>
      </TutorsContainer>
    </TutorsSection>
  );
}