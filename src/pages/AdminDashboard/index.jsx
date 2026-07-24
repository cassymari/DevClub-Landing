import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getEnrollments } from "../../services/enrollments";

import {
  Container,
  Header,
  HeaderContent,
  Title,
  Description,
  LogoutButton,
  DashboardCard,
  TableWrapper,
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableData,
  StatusMessage,
  ErrorMessage,
} from "./styles";

export function AdminDashboard() {
  const navigate = useNavigate();

  const [enrollments, setEnrollments] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadEnrollments() {
      try {
        const data = await getEnrollments();

        setEnrollments(data);
      } catch (error) {
        setError(error.message);

        if (
          error.message.toLowerCase().includes("token") ||
          error.message.toLowerCase().includes("autoriz")
        ) {
          localStorage.removeItem("adminToken");
          navigate("/admin");
        }
      } finally {
        setIsLoading(false);
      }
    }

    loadEnrollments();
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  }

  if (isLoading) {
    return (
      <Container>
        <StatusMessage>Carregando inscritos...</StatusMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Title>Painel administrativo</Title>

          <Description>
            Visualize e acompanhe as inscrições realizadas pelo site.
          </Description>
        </HeaderContent>

        <LogoutButton type="button" onClick={handleLogout}>
          Sair
        </LogoutButton>
      </Header>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      {!error && enrollments.length === 0 && (
        <StatusMessage>Nenhuma inscrição encontrada.</StatusMessage>
      )}

      {!error && enrollments.length > 0 && (
        <DashboardCard>
          <TableWrapper>
            <Table>
              <TableHead>
                <tr>
                  <TableHeader>Nome</TableHeader>
                  <TableHeader>E-mail</TableHeader>
                  <TableHeader>Telefone</TableHeader>
                  <TableHeader>Data</TableHeader>
                </tr>
              </TableHead>

              <tbody>
                {enrollments.map((enrollment) => (
                  <TableRow key={enrollment.id}>
                    <TableData>{enrollment.name}</TableData>
                    <TableData>{enrollment.email}</TableData>
                    <TableData>{enrollment.phone}</TableData>
                    <TableData>
                      {new Date(enrollment.created_at).toLocaleDateString(
                        "pt-BR"
                      )}
                    </TableData>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </DashboardCard>
      )}
    </Container>
  );
}