import {
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiCpu,
  FiGitBranch,
  FiGlobe,
  FiLayers,
  FiServer,
  FiUsers,
} from "react-icons/fi";

import { scrollTo } from "../../hooks/useLenis";

import {
  containerAnimation,
  fadeUpAnimation,
  panelAnimation,
  skillAnimation,
  skillHoverAnimation,
} from "./animations";

import {
  CompaniesSection,
  BackgroundNetwork,
  NetworkLine,
  NetworkNode,
  CompaniesContainer,
  SectionHeader,
  SectionLabel,
  Title,
  Description,
  LogoMarquee,
  LogoTrack,
  LogoItem,
  MainContent,
  CompanyPanel,
  PanelGlow,
  PanelTop,
  PanelIcon,
  PanelBadge,
  PanelTitle,
  PanelDescription,
  PanelBenefits,
  PanelBenefit,
  PanelFooter,
  PanelButton,
  SkillsArea,
  SkillsHeader,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillNumber,
  SkillTitle,
  SkillDescription,
  BottomCta,
  CtaContent,
  CtaButton,
} from "./styles";

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Nubank",
  "Mercado Livre",
  "iFood",
  "Stone",
  "PicPay",
];

const skills = [
  {
    id: "01",
    icon: FiCode,
    title: "Projetos reais",
    description:
      "Experiência prática construindo aplicações completas e preparadas para o mercado.",
  },
  {
    id: "02",
    icon: FiGitBranch,
    title: "Git & GitHub",
    description:
      "Versionamento, organização de código e colaboração em equipe.",
  },
  {
    id: "03",
    icon: FiLayers,
    title: "Front-end moderno",
    description:
      "Interfaces responsivas, acessíveis e criadas com tecnologias atuais.",
  },
  {
    id: "04",
    icon: FiServer,
    title: "Back-end completo",
    description:
      "APIs, bancos de dados, autenticação e regras de negócio.",
  },
  {
    id: "05",
    icon: FiCpu,
    title: "Inteligência artificial",
    description:
      "Uso estratégico de IA para desenvolver, automatizar e criar soluções.",
  },
  {
    id: "06",
    icon: FiUsers,
    title: "Visão profissional",
    description:
      "Comunicação, trabalho em equipe e preparação para desafios reais.",
  },
];

export function Companies() {
  const duplicatedCompanies = [...companies, ...companies];

  function handleGoToFormations(event) {
    event.preventDefault();

    scrollTo("#formations");
  }

  return (
    <CompaniesSection id="companies">
      <BackgroundNetwork aria-hidden="true">
        {Array.from({ length: 12 }).map((_, index) => (
          <NetworkNode
            key={`node-${index}`}
            $left={(index * 23 + 5) % 95}
            $top={(index * 31 + 9) % 88}
            $delay={index * 0.55}
            $size={5 + (index % 3) * 2}
          />
        ))}

        {Array.from({ length: 7 }).map((_, index) => (
          <NetworkLine
            key={`line-${index}`}
            $top={12 + index * 12}
            $left={(index * 13) % 38}
            $width={42 + (index % 3) * 13}
            $delay={index * 0.8}
          />
        ))}
      </BackgroundNetwork>

      <CompaniesContainer
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
            Empresas
            <span />
          </SectionLabel>

          <Title>
            Preparando talentos para as empresas que
            <span> movem a tecnologia.</span>
          </Title>

          <Description>
           Nossa metodologia foi pensada para preparar você para processos seletivos e desafios encontrados em empresas como estas.
          </Description>
        </SectionHeader>

        <LogoMarquee variants={fadeUpAnimation}>
          <LogoTrack>
            {duplicatedCompanies.map((company, index) => (
              <LogoItem key={`${company}-${index}`}>
                {company}
              </LogoItem>
            ))}
          </LogoTrack>
        </LogoMarquee>

        <MainContent>
          <CompanyPanel variants={panelAnimation}>
            <PanelGlow aria-hidden="true" />

            <PanelTop>
              <PanelIcon>
                <FiBriefcase />
              </PanelIcon>

              <PanelBadge>Para empresas</PanelBadge>
            </PanelTop>

            <PanelTitle>
              Profissionais preparados para construir soluções reais.
            </PanelTitle>

            <PanelDescription>
              O mercado procura desenvolvedores que dominem tecnologia, saibam
              resolver problemas e consigam transformar ideias em produtos.
            </PanelDescription>

            <PanelBenefits>
              <PanelBenefit>
                <FiCheck />
                Formação orientada à prática
              </PanelBenefit>

              <PanelBenefit>
                <FiCheck />
                Projetos completos para portfólio
              </PanelBenefit>

              <PanelBenefit>
                <FiCheck />
                Tecnologias atuais do mercado
              </PanelBenefit>

              <PanelBenefit>
                <FiCheck />
                Desenvolvimento técnico e profissional
              </PanelBenefit>
            </PanelBenefits>

            <PanelFooter>
              <div>
                <FiGlobe />

                <span>
                  Talentos preparados para oportunidades no Brasil e no mundo.
                </span>
              </div>

              <PanelButton
                href="#formations"
                onClick={handleGoToFormations}
              >
                Conhecer as formações
                <FiArrowRight />
              </PanelButton>
            </PanelFooter>
          </CompanyPanel>

          <SkillsArea>
            <SkillsHeader variants={fadeUpAnimation}>
              <span>O que o mercado procura</span>

              <h3>Habilidades que vão além do código.</h3>
            </SkillsHeader>

            <SkillsGrid>
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <SkillCard
                    key={skill.id}
                    variants={skillAnimation}
                    whileHover={skillHoverAnimation}
                  >
                    <div>
                      <SkillIcon>
                        <Icon />
                      </SkillIcon>

                      <SkillNumber>{skill.id}</SkillNumber>
                    </div>

                    <SkillTitle>{skill.title}</SkillTitle>

                    <SkillDescription>
                      {skill.description}
                    </SkillDescription>
                  </SkillCard>
                );
              })}
            </SkillsGrid>
          </SkillsArea>
        </MainContent>

        <BottomCta variants={fadeUpAnimation}>
          <CtaContent>
            <span>Seu próximo passo começa agora</span>

            <h3>
              Prepare-se para construir a carreira que você sempre imaginou.
            </h3>
          </CtaContent>

          <CtaButton
            href="#formations"
            onClick={handleGoToFormations}
          >
            Começar agora
            <FiArrowRight />
          </CtaButton>
        </BottomCta>
      </CompaniesContainer>
    </CompaniesSection>
  );
}