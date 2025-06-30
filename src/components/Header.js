import styled from 'styled-components';
import { colors } from '../theme';

const HeaderContainer = styled.header`
  background-color: ${colors.dark};
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  height: 80px; /* Increased size */
  width: auto;
  margin-bottom: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: ${colors.white};
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/logo.png" alt="Spark Laserworks Co. logo" />
      <Title>Spark Laserworks Co.</Title>
    </HeaderContainer>
  );
}