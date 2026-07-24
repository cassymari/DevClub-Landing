import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../../services/auth";

import {
  Container,
  LoginBox,
  Title,
  Description,
  Form,
  Label,
  Input,
  Button,
  ErrorMessage,
} from "./styles";

export function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setError("");
    setIsLoading(true);

    try {
      const response = await loginAdmin(email, password);

      localStorage.setItem("adminToken", response.token);

      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <LoginBox>
        <Title>Área administrativa</Title>

        <Description>
          Entre com suas credenciais para acessar os inscritos.
        </Description>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">E-mail</Label>

          <Input
            id="email"
            type="email"
            placeholder="admin@email.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <Label htmlFor="password">Senha</Label>

          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
        </Form>
      </LoginBox>
    </Container>
  );
}