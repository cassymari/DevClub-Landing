import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  padding: 40px;
  background:
    radial-gradient(circle at top right, rgba(124, 58, 237, 0.2), transparent 30%),
    #080812;
  color: #ffffff;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export const Header = styled.header`
  max-width: 1200px;
  margin: 0 auto 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  font-size: clamp(28px, 4vw, 42px);
`;

export const Description = styled.p`
  color: #a1a1b5;
`;

export const LogoutButton = styled.button`
  padding: 12px 22px;
  border: 1px solid rgba(139, 92, 246, 0.45);
  border-radius: 12px;
  color: #ffffff;
  font-weight: 700;
  background: rgba(139, 92, 246, 0.14);
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
  }
`;

export const DashboardCard = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 22px;
  background: rgba(15, 15, 30, 0.96);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 760px;
`;

export const TableHead = styled.thead`
  background: rgba(124, 58, 237, 0.16);
`;

export const TableHeader = styled.th`
  padding: 18px 20px;
  color: #d8d8ea;
  font-size: 14px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TableRow = styled.tr`
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  &:hover {
    background: rgba(139, 92, 246, 0.07);
  }
`;

export const TableData = styled.td`
  padding: 18px 20px;
  color: #d3d3df;
`;

export const StatusMessage = styled.p`
  max-width: 1200px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 16px;
  color: #c4c4d4;
  background: rgba(15, 15, 30, 0.96);
`;

export const ErrorMessage = styled(StatusMessage)`
  color: #ff778e;
`;