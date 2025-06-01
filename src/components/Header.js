// Header.js
import styled from 'styled-components';
import { colors } from '../theme';

const HeaderContainer = styled.header`
  background-color: ${colors.stone};
  color: ${colors.black};
  padding: 3rem 1rem;
  text-align: center;
  border-bottom: 3px solid ${colors.beige};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${colors.black};
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Brent’s Professional Services</Title>
      <Subtitle>Reliable. Efficient. Trustworthy.</Subtitle>
    </HeaderContainer>
  );
}