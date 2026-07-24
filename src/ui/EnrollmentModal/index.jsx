import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiMail,
  FiPhone,
  FiUser,
  FiX,
} from "react-icons/fi";

import { createEnrollment } from "../../services/api.js";

import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ModalHeader,
  IconContainer,
  ModalTitle,
  ModalDescription,
  Form,
  InputGroup,
  InputLabel,
  InputWrapper,
  InputIcon,
  Input,
  Select,
  ErrorMessage,
  SubmitButton,
  PrivacyText,
  SuccessContainer,
  SuccessIcon,
  SuccessTitle,
  SuccessDescription,
  SuccessButton,
  LoadingSpinner,
} from "./styles";

const initialFormData = {
  name: "",
  email: "",
  whatsapp: "",
  formation: "",
};

export function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
  if (!isOpen) return;

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  document.addEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "hidden";

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "";
  };
}, [isOpen, onClose]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSubmitError("");
  }

  function handleWhatsappChange(event) {
    const onlyNumbers = event.target.value.replace(/\D/g, "").slice(0, 11);

    let formattedValue = onlyNumbers;

    if (onlyNumbers.length > 2) {
      formattedValue = `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2)}`;
    }

    if (onlyNumbers.length > 7) {
      formattedValue = `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(
        2,
        7
      )}-${onlyNumbers.slice(7)}`;
    }

    setFormData((previousData) => ({
      ...previousData,
      whatsapp: formattedValue,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      whatsapp: "",
    }));

    setSubmitError("");
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Digite seu nome.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Digite um nome válido.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Digite seu e-mail.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Digite um e-mail válido.";
    }

    const whatsappNumbers = formData.whatsapp.replace(/\D/g, "");

    if (!whatsappNumbers) {
      newErrors.whatsapp = "Digite seu WhatsApp.";
    } else if (whatsappNumbers.length < 10) {
      newErrors.whatsapp = "Digite um WhatsApp válido.";
    }

    if (!formData.formation) {
      newErrors.formation = "Escolha uma formação.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) return;

    setIsSending(true);
    setSubmitError("");

    try {
      await createEnrollment({
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.whatsapp.replace(/\D/g, ""),
      });

      setIsSuccess(true);
    } catch (error) {
      setSubmitError(
        error.message ||
          "Não foi possível realizar sua inscrição. Tente novamente."
      );
    } finally {
      setIsSending(false);
    }
  }

  function handleClose() {
    onClose();

    setTimeout(() => {
      setFormData(initialFormData);
      setErrors({});
      setSubmitError("");
      setIsSending(false);
      setIsSuccess(false);
    }, 300);
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          data-lenis-prevent
          onClick={handleOverlayClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContainer
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enrollment-modal-title"
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.96,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <CloseButton
              type="button"
              onClick={handleClose}
              aria-label="Fechar modal"
            >
              <FiX />
            </CloseButton>

            {!isSuccess ? (
              <>
                <ModalHeader>
                  <IconContainer>
                    <FiCode />
                  </IconContainer>

                  <ModalTitle id="enrollment-modal-title">
                    Comece sua jornada
                  </ModalTitle>

                  <ModalDescription>
                    Preencha seus dados e descubra como dar o próximo passo na
                    sua carreira como desenvolvedor.
                  </ModalDescription>
                </ModalHeader>

                <Form onSubmit={handleSubmit} noValidate>
                  <InputGroup>
                    <InputLabel htmlFor="name">Nome completo</InputLabel>

                    <InputWrapper $hasError={Boolean(errors.name)}>
                      <InputIcon>
                        <FiUser />
                      </InputIcon>

                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Digite seu nome"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        disabled={isSending}
                      />
                    </InputWrapper>

                    {errors.name && (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    )}
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="email">E-mail</InputLabel>

                    <InputWrapper $hasError={Boolean(errors.email)}>
                      <InputIcon>
                        <FiMail />
                      </InputIcon>

                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="voce@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        disabled={isSending}
                      />
                    </InputWrapper>

                    {errors.email && (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="whatsapp">WhatsApp</InputLabel>

                    <InputWrapper $hasError={Boolean(errors.whatsapp)}>
                      <InputIcon>
                        <FiPhone />
                      </InputIcon>

                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        placeholder="(27) 99999-9999"
                        value={formData.whatsapp}
                        onChange={handleWhatsappChange}
                        autoComplete="tel"
                        disabled={isSending}
                      />
                    </InputWrapper>

                    {errors.whatsapp && (
                      <ErrorMessage>{errors.whatsapp}</ErrorMessage>
                    )}
                  </InputGroup>

                  <InputGroup>
                    <InputLabel htmlFor="formation">
                      Formação de interesse
                    </InputLabel>

                    <InputWrapper $hasError={Boolean(errors.formation)}>
                      <InputIcon>
                        <FiCode />
                      </InputIcon>

                      <Select
                        id="formation"
                        name="formation"
                        value={formData.formation}
                        onChange={handleChange}
                        disabled={isSending}
                      >
                        <option value="">Escolha uma formação</option>

                        <option value="full-stack">
                          Desenvolvimento Full Stack
                        </option>

                        <option value="front-end">
                          Desenvolvimento Front-end
                        </option>

                        <option value="back-end">
                          Desenvolvimento Back-end
                        </option>

                        <option value="ia">
                          Inteligência Artificial
                        </option>
                      </Select>
                    </InputWrapper>

                    {errors.formation && (
                      <ErrorMessage>{errors.formation}</ErrorMessage>
                    )}
                  </InputGroup>

                  {submitError && (
                    <ErrorMessage role="alert">{submitError}</ErrorMessage>
                  )}

                  <SubmitButton type="submit" disabled={isSending}>
                    {isSending ? (
                      <>
                        <LoadingSpinner />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Quero receber mais informações
                        <FiArrowRight />
                      </>
                    )}
                  </SubmitButton>

                  <PrivacyText>
                    Seus dados estão seguros e não serão compartilhados.
                  </PrivacyText>
                </Form>
              </>
            ) : (
              <SuccessContainer
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                <SuccessIcon
                  initial={{
                    scale: 0,
                    rotate: -30,
                  }}
                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 15,
                    delay: 0.1,
                  }}
                >
                  <FiCheck />
                </SuccessIcon>

                <SuccessTitle>Dados recebidos!</SuccessTitle>

                <SuccessDescription>
                  Obrigado, {formData.name.trim().split(" ")[0]}. Em breve nossa
                  equipe entrará em contato com você.
                </SuccessDescription>

                <SuccessButton type="button" onClick={handleClose}>
                  Continuar explorando
                </SuccessButton>
              </SuccessContainer>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}