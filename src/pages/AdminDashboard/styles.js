import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  padding: 40px;
  color: #ffffff;

  background:
    radial-gradient(
      circle at top right,
      rgba(124, 58, 237, 0.22),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(168, 85, 247, 0.12),
      transparent 28%
    ),
    #070711;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: clamp(30px, 4vw, 46px);
`;

export const Description = styled.p`
  margin: 0;
  color: #a7a7bb;
  line-height: 1.6;
`;

export const LogoutButton = styled.button`
  padding: 12px 22px;
  border: 1px solid rgba(139, 92, 246, 0.5);
  border-radius: 12px;
  color: #ffffff;
  font-weight: 700;
  background: rgba(139, 92, 246, 0.14);
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: #7c3aed;
    transform: translateY(-2px);
  }
`;

export const StatsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 28px;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.article`
  padding: 24px;
  border: 1px solid rgba(139, 92, 246, 0.28);
  border-radius: 20px;
  background: rgba(15, 15, 30, 0.94);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
`;

export const StatLabel = styled.p`
  margin: 0 0 12px;
  color: #a7a7bb;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const StatValue = styled.strong`
  display: block;
  font-size: 34px;
  color: #ffffff;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;

  @media (max-width: 640px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 420px;
  padding: 14px 16px;
  border: 1px solid #303046;
  border-radius: 12px;
  outline: none;
  color: #ffffff;
  background: #11111f;

  &::placeholder {
    color: #74748b;
  }

  &:focus {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.12);
  }

  @media (max-width: 640px) {
    max-width: none;
  }
`;

export const ResultsText = styled.p`
  margin: 0;
  color: #a7a7bb;
  font-size: 14px;
`;

export const DashboardCard = styled.section`
  overflow: hidden;
  border: 1px solid rgba(139, 92, 246, 0.28);
  border-radius: 22px;
  background: rgba(15, 15, 30, 0.96);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.36);
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 780px;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background: rgba(124, 58, 237, 0.16);
`;

export const TableHeader = styled.th`
  padding: 18px 20px;
  color: #d8d8ea;
  font-size: 13px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.07em;
`;

export const TableRow = styled.tr`
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  transition: 0.2s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.07);
  }
`;

export const TableData = styled.td`
  padding: 18px 20px;
  color: #d3d3df;
`;

export const PrimaryText = styled.span`
  display: block;
  color: #ffffff;
  font-weight: 600;
`;

export const SecondaryText = styled.span`
  display: block;
  margin-top: 4px;
  color: #8f8fa5;
  font-size: 13px;
`;

export const StatusMessage = styled.p`
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