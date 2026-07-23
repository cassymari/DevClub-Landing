import { AnimatedCounter } from "./AnimatedCounter";

import {
  FiCode,
  FiBriefcase,
  FiTrendingUp,
  FiLayers,
  FiTarget,
  FiStar,
} from "react-icons/fi";

import {
  AboutSection,
  AboutContainer,
  AboutContent,
  SectionLabel,
  Title,
  Description,
  Stats,
  StatCard,
  StatIcon,
  AboutVisual,
  JourneyLine,
  VisualCard,
  VisualCardHeader,
  VisualIcon,
  CardNumber,
  CardTags,
  Tag,
  BackgroundGlow,
} from "./styles";

const containerAnimation = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const contentAnimation = {
  hidden: {
    opacity: 0,
    x: -45,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    x: 45,
    y: 25,
  },

  visible: {
    opacity: 1,
    x: 0,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function About() {
  return (
    <AboutSection id="about">
      <BackgroundGlow aria-hidden="true" />

      <AboutContainer
        variants={containerAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        <AboutContent variants={contentAnimation}>
          <SectionLabel>
            <span />
            Quem somos
          </SectionLabel>

          <Title>
            Mais do que ensinar código.
            <span>Nós transformamos carreiras.</span>
          </Title>

          <Description>
            O DevClub é uma comunidade criada para formar desenvolvedores
            preparados para os desafios reais do mercado. Aqui, teoria e prática
            caminham juntas desde o primeiro projeto.
          </Description>

          <Stats>
            <StatCard>
              <StatIcon>
                <FiLayers />
              </StatIcon>

              <div>
               <AnimatedCounter end={500} prefix="+" />
                <span>projetos desenvolvidos</span>
              </div>
            </StatCard>

            <StatCard>
              <StatIcon>
                <FiTarget />
              </StatIcon>

              <div>
               <AnimatedCounter end={100} suffix="%" />
                <span>foco em prática</span>
              </div>
            </StatCard>

            <StatCard>
              <StatIcon>
                <FiStar />
              </StatIcon>

              <div>
               <AnimatedCounter end={4.9} decimals={1} />
                <span>avaliação dos alunos</span>
              </div>
            </StatCard>
          </Stats>
        </AboutContent>

        <AboutVisual>
          <JourneyLine aria-hidden="true" />

          <VisualCard variants={cardAnimation}>
            <VisualCardHeader>
              <VisualIcon>
                <FiCode />
              </VisualIcon>

              <CardNumber>01</CardNumber>
            </VisualCardHeader>

            <h3>Aprenda fazendo</h3>

            <p>
              Projetos reais para transformar conhecimento em experiência desde
              o primeiro módulo.
            </p>

            <CardTags>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>JavaScript</Tag>
              <Tag>React</Tag>
            </CardTags>
          </VisualCard>

          <VisualCard variants={cardAnimation}>
            <VisualCardHeader>
              <VisualIcon>
                <FiBriefcase />
              </VisualIcon>

              <CardNumber>02</CardNumber>
            </VisualCardHeader>

            <h3>Construa seu portfólio</h3>

            <p>
              Cada etapa da formação gera projetos concretos para apresentar ao
              mercado.
            </p>

            <CardTags>
              <Tag>Node.js</Tag>
              <Tag>APIs</Tag>
              <Tag>GitHub</Tag>
              <Tag>Deploy</Tag>
            </CardTags>
          </VisualCard>

          <VisualCard variants={cardAnimation}>
            <VisualCardHeader>
              <VisualIcon>
                <FiTrendingUp />
              </VisualIcon>

              <CardNumber>03</CardNumber>
            </VisualCardHeader>

            <h3>Entre para o mercado</h3>

            <p>
              Desenvolva habilidades técnicas e profissionais para conquistar
              vagas, projetos e oportunidades.
            </p>

            <CardTags>
              <Tag>Carreira</Tag>
              <Tag>Freelas</Tag>
              <Tag>Entrevistas</Tag>
              <Tag>Networking</Tag>
            </CardTags>
          </VisualCard>
        </AboutVisual>
      </AboutContainer>
    </AboutSection>
  );
}