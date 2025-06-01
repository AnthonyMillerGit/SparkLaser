// Body.js
import styled from 'styled-components';
import { colors } from '../theme';

const BodyContainer = styled.main`
  background-color: ${colors.light};
  padding: 4rem 1rem;
  text-align: center;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 1.1rem;
`;

const CTAButton = styled.button`
  background-color: ${colors.stone};
  color: ${colors.black};
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.beige};
  }
`;

export default function Body() {
  return (
    <BodyContainer>
      <Description>
        Explore how Brent’s services can help transform your home or business. Photos and videos of completed work coming soon.
      </Description>
      <CTAButton>Contact Us</CTAButton>
    </BodyContainer>
  );
}