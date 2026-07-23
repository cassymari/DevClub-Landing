import { FiArrowRight, FiCode, FiStar, FiTrendingUp } from "react-icons/fi";
import { EnrollmentModal } from "../../ui/EnrollmentModal";
import{useState} from "react"

import {
  Section,
  BackgroundGlow,
  Container,
  Content,
  Badge,
  Title,
  GradientText,
  Description,
  Buttons,
  PrimaryButton,
  SecondaryButton,
  Stats,
  StatCard,
  StatIcon,
  StatNumber,
  StatLabel,
  GlowCircle,
} from "./styles";

export function FinalCta() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Section>
      <BackgroundGlow />
      <GlowCircle />

      <Container>
        <Content
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge>
            <FiCode />
            Comece hoje mesmo
          </Badge>

          <Title>
            Seu futuro como
            <GradientText> Desenvolvedor </GradientText>
            começa com a decisão de dar o primeiro passo.
          </Title>

          <Description>
            Aprenda na prática, desenvolva projetos reais e construa um
            portfólio que realmente impressiona recrutadores e empresas.
          </Description>

          <Buttons>
            <PrimaryButton  type="button"
  onClick={() => setIsModalOpen(true)}>
              Quero começar agora
              <FiArrowRight />
            </PrimaryButton>

            <EnrollmentModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>

            <SecondaryButton href="#about">
              Conhecer o DevClub
            </SecondaryButton>
          </Buttons>

          <Stats>
            <StatCard>
              <StatIcon>
                <FiTrendingUp />
              </StatIcon>

              <StatNumber>100%</StatNumber>

              <StatLabel>
                Aprendizado focado em prática
              </StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon>
                <FiCode />
              </StatIcon>

              <StatNumber>+20</StatNumber>

              <StatLabel>
                Projetos para o portfólio
              </StatLabel>
            </StatCard>

            <StatCard>
              <StatIcon>
                <FiStar />
              </StatIcon>

              <StatNumber>4.9★</StatNumber>

              <StatLabel>
                Avaliação dos alunos
              </StatLabel>
            </StatCard>
          </Stats>
        </Content>
      </Container>
    </Section>
  );
}