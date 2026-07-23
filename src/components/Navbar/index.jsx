import { useEffect ,useState } from "react";
import { FiArrowRight } from "react-icons/fi";

import { Logo } from "../Logo";
import { EnrollmentModal } from "../../ui/EnrollmentModal";
import { scrollTo } from "../../hooks/useLenis";

import {
  Header,
  Container,
  NavLinks,
  StartButton,
} from "./styles";



export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  function handleScroll(selector) {
    return (event) => {
      event.preventDefault();
      scrollTo(selector);
    };
  }

  function handleOpenModal(event) {
    event.preventDefault();
    setIsModalOpen(true);
  }
useEffect(() => {
  const sections = [
    "hero",
    "about",
    "tutors",
    "formations",
    "companies",
    "extra-contents",
    "footer",
  ];

  function handleScroll() {
    const scrollPosition = window.scrollY + 120;

    for (const id of sections) {
      const section = document.getElementById(id);

      if (!section) continue;

      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        setActiveSection(id);
        break;
      }
    }
  }

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <Header>
        <Container>
          <Logo />

          <NavLinks>
            <a href="#about" onClick={handleScroll("#about")}
             className={activeSection === "about" ? "active" : ""}
            >
              Quem Somos
            </a>

            <a href="#tutors" onClick={handleScroll("#tutors")}
            className={activeSection === "tutors" ? "active" : ""}
            >
              Mentoria
            </a>

            <a href="#formations" onClick={handleScroll("#formations")}
            className={activeSection === "formations" ? "active" : ""}
            >
              Formações
            </a>

            <a href="#companies" onClick={handleScroll("#companies")}
            className={activeSection === "companies" ? "active" : ""}
            >
              Empresas
            </a>
          </NavLinks>

          <StartButton href="#inscricao" onClick={handleOpenModal}>
            Começar Agora
            <FiArrowRight />
          </StartButton>
        </Container>
      </Header>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}