// Footer.js
import styled from 'styled-components';
import { colors } from '../theme';

const FooterContainer = styled.footer`
  background-color: ${colors.beige};
  color: ${colors.black};
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid ${colors.stone};
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Brent’s Services. All rights reserved.</p>
    </FooterContainer>
  );
}