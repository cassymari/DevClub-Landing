import { FiArrowRight, FiPlay } from "react-icons/fi";
import { ParticleNetwork } from "./ParticleNetwork";
import { useState } from "react";
import {EnrollmentModal} from "../../ui/EnrollmentModal"

import {
   HeroSection,
   HeroContainer,
   HeroContent,
   Eyebrow,
   Title,
   Highlight,
   Description,
   Actions,
   PrimaryButton,
   SecondaryButton,
   HeroVisual,
   CodeWindow,
   WindowHeader,
   WindowDots,
   CodeContent,
   TechBadge,
   LiveStatus,
   VisualGlow,
} from "./styles";

const contentAnimation = {
   hidden: {},
   visible: {
      transition: {
         staggerChildren: 0.16,
         delayChildren: 0.2,
      },
   },
};

const itemAnimation = {
   hidden: {
      opacity: 0,
      y: 32,
   },

   visible: {
      opacity: 1,
      y: 0,

      transition: {
         duration: 0.7,
         ease: [0.22, 1, 0.36, 1],
      },
   },
};

const visualAnimation = {
   hidden: {
      opacity: 0,
      x: 70,
      scale: 0.94,
   },

   visible: {
      opacity: 1,
      x: 0,
      scale: 1,

      transition: {
         duration: 0.9,
         delay: 0.35,
         ease: [0.22, 1, 0.36, 1],
      },
   },
};

export function Hero() {

   const [isModalOpen, setIsModalOpen] = useState(false);


   return (
      <HeroSection id="hero">
           <ParticleNetwork />


         <HeroContainer>
            <HeroContent
               variants={contentAnimation}
               initial="hidden"
               animate="visible"
            >
               <Eyebrow variants={itemAnimation}>
                  <span />
                  Formação completa em programação
               </Eyebrow>

               <Title variants={itemAnimation}>
                  O futuro começa
                  <Highlight> aqui.</Highlight>
               </Title>

               <Description variants={itemAnimation}>
                  Aprenda programação construindo projetos reais, dominando
                  tecnologias modernas e desenvolvendo as habilidades que o mercado
                  procura.
               </Description>

               <Actions variants={itemAnimation}>
                  <PrimaryButton type="button"
                  onClick={() => setIsModalOpen(true)}
                  >
                     Começar agora
                     <FiArrowRight />
                  </PrimaryButton>

                  <EnrollmentModal isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)} />

                  <SecondaryButton href="#about">
                     <FiPlay />
                     Conhecer o DevClub
                  </SecondaryButton>
               </Actions>
            </HeroContent>

            <HeroVisual aria-label="Exemplo de ambiente de desenvolvimento"
               variants={visualAnimation}
               initial="hidden"
               animate="visible"
            >

               <VisualGlow aria-hidden="true" />
               <TechBadge
                  className="react"
                  animate={{
                     y: [0, -12, 0],
                  }}
                  transition={{
                     duration: 3.8,
                     repeat: Infinity,
                     ease: "easeInOut",
                  }}
               >
                  React
               </TechBadge>
               <TechBadge
                  className="node"
                  animate={{
                     y: [0, 10, 0],
                  }}
                  transition={{
                     duration: 4.2,
                     repeat: Infinity,
                     ease: "easeInOut",
                     delay: 0.4,
                  }}
               >
                  Node.js
               </TechBadge>

               <TechBadge
   className="javascript"
   animate={{
      x: [0, 10, 0],
      y: [0, -5, 0],
   }}
   transition={{
      duration: 4.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.7,
   }}
>
   JavaScript
</TechBadge>

<TechBadge
   className="ai"
   animate={{
      x: [0, -9, 0],
      y: [0, 8, 0],
   }}
   transition={{
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.2,
   }}
>
   IA
</TechBadge>

               <CodeWindow
                  initial={{
                     opacity: 0,
                     rotateY: -7,
                     rotateX: 3,
                     y: 20,
                  }}
                  animate={{
                     opacity: 1,
                     rotateY: -7,
                     rotateX: 3,
                     y: [0, -6, 0],
                  }}
                  whileHover={{
                     rotateY: -2,
                     rotateX: 1,
                     scale: 1.015,
                  }}
                  transition={{
                     opacity: {
                        duration: 0.8,
                        delay: 0.5,
                     },
                     rotateY: {
                        duration: 0.45,
                     },
                     rotateX: {
                        duration: 0.45,
                     },
                     scale: {
                        duration: 0.35,
                     },
                     y: {
                        duration: 5.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                     },
                  }}
               >
                  <WindowHeader>
                     <WindowDots>
                        <span />
                        <span />
                        <span />
                     </WindowDots>

                     <p>future.js</p>

                     <LiveStatus>
                        <span />
                        LIVE
                     </LiveStatus>
                  </WindowHeader>

                  <CodeContent>
                     <p>
                        <span className="purple">const</span>{" "}
                        <span className="blue">developer</span> = {"{"}
                     </p>

                     <p className="indent">
                        name: <span className="green">"Você"</span>,
                     </p>

                     <p className="indent">
                        level: <span className="green">"Profissional"</span>,
                     </p>

                     <p className="indent">
                        future: <span className="green">"Sem limites"</span>
                     </p>

                     <p>{"}"}</p>

                     <p className="terminal">
                        <span>&gt;</span> npm run future
                     </p>

                     <p className="success">✓ Build concluído com sucesso</p>
                  </CodeContent>
               </CodeWindow>
            </HeroVisual>
         </HeroContainer>
      </HeroSection>
   );
}