import styled from 'styled-components';
import { colors } from '../theme';
import { FaFacebookF, FaTiktok, FaYoutube, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${colors.accent};
  color: ${colors.black};
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  border-top: 1px solid ${colors.black};
`;

const SocialLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const SocialLink = styled.a`
  color: ${colors.black};
  font-size: 1.5rem;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© {new Date().getFullYear()} Spark Laserworks Co. All rights reserved.</p>
      <SocialLinks>
        <SocialLink href="#" aria-label="Facebook"><FaFacebookF /></SocialLink>
        <SocialLink href="#" aria-label="TikTok"><FaTiktok /></SocialLink>
        <SocialLink href="#" aria-label="YouTube"><FaYoutube /></SocialLink>
        <SocialLink href="#" aria-label="Instagram"><FaInstagram /></SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
}