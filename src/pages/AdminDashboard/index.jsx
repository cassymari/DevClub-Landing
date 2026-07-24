import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getEnrollments } from "../../services/enrollments";

import {
  Container,
  Content,
  Header,
  HeaderContent,
  Title,
  Description,
  LogoutButton,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  Toolbar,
  SearchInput,
  ResultsText,
  DashboardCard,
  TableWrapper,
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableData,
  PrimaryText,
  SecondaryText,
  StatusMessage,
  ErrorMessage,
} from "./styles";

export function AdminDashboard() {
  const navigate = useNavigate();

  const [enrollments, setEnrollments] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadEnrollments() {
      try {
        const data = await getEnrollments();

        setEnrollments(data);
      } catch (error) {
        setError(error.message);

        const normalizedMessage = error.message.toLowerCase();

        if (
          normalizedMessage.includes("token") ||
          normalizedMessage.includes("autoriz")
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

  const todayEnrollments = useMemo(() => {
    const today = new Date().toDateString();

    return enrollments.filter((enrollment) => {
      return new Date(enrollment.created_at).toDateString() === today;
    }).length;
  }, [enrollments]);

  const recentEnrollments = useMemo(() => {
    const sevenDaysAgo = new Date();

    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    return enrollments.filter((enrollment) => {
      return new Date(enrollment.created_at) >= sevenDaysAgo;
    }).length;
  }, [enrollments]);

  const filteredEnrollments = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      return enrollments;
    }

    return enrollments.filter((enrollment) => {
      return (
        enrollment.name?.toLowerCase().includes(normalizedSearch) ||
        enrollment.email?.toLowerCase().includes(normalizedSearch) ||
        enrollment.phone?.includes(normalizedSearch)
      );
    });
  }, [enrollments, search]);

  function handleLogout() {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  }

  if (isLoading) {
    return (
      <Container>
        <Content>
          <StatusMessage>Carregando inscritos...</StatusMessage>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Content>
        <Header>
          <HeaderContent>
            <Title>Painel administrativo</Title>

            <Description>
              Visualize, pesquise e acompanhe as inscrições realizadas no site.
            </Description>
          </HeaderContent>

          <LogoutButton type="button" onClick={handleLogout}>
            Sair
          </LogoutButton>
        </Header>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!error && (
          <>
            <StatsGrid>
              <StatCard>
                <StatLabel>Total de inscritos</StatLabel>
                <StatValue>{enrollments.length}</StatValue>
              </StatCard>

              <StatCard>
                <StatLabel>Inscrições hoje</StatLabel>
                <StatValue>{todayEnrollments}</StatValue>
              </StatCard>

              <StatCard>
                <StatLabel>Últimos 7 dias</StatLabel>
                <StatValue>{recentEnrollments}</StatValue>
              </StatCard>
            </StatsGrid>

            <Toolbar>
              <SearchInput
                type="search"
                placeholder="Buscar por nome, e-mail ou telefone"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />

              <ResultsText>
                {filteredEnrollments.length} resultado(s)
              </ResultsText>
            </Toolbar>

            {enrollments.length === 0 ? (
              <StatusMessage>Nenhuma inscrição encontrada.</StatusMessage>
            ) : filteredEnrollments.length === 0 ? (
              <StatusMessage>
                Nenhum inscrito corresponde à sua pesquisa.
              </StatusMessage>
            ) : (
              <DashboardCard>
                <TableWrapper>
                  <Table>
                    <TableHead>
                      <tr>
                        <TableHeader>Inscrito</TableHeader>
                        <TableHeader>E-mail</TableHeader>
                        <TableHeader>Telefone</TableHeader>
                        <TableHeader>Data</TableHeader>
                      </tr>
                    </TableHead>

                    <tbody>
                      {filteredEnrollments.map((enrollment) => (
                        <TableRow key={enrollment.id}>
                          <TableData>
                            <PrimaryText>{enrollment.name}</PrimaryText>

                            <SecondaryText>
                              ID #{enrollment.id}
                            </SecondaryText>
                          </TableData>

                          <TableData>{enrollment.email}</TableData>

                          <TableData>{enrollment.phone}</TableData>

                          <TableData>
                            {new Date(
                              enrollment.created_at
                            ).toLocaleDateString("pt-BR")}
                          </TableData>
                        </TableRow>
                      ))}
                    </tbody>
                  </Table>
                </TableWrapper>
              </DashboardCard>
            )}
          </>
        )}
      </Content>
    </Container>
  );
}