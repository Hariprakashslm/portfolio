import styled from "styled-components";
import { RefObject } from "react";

const ContactSection = styled.footer`
  padding: 50px;
  background-color: #00628c;
`;

const Title = styled.h6`
  color: #ffffff;
  font-size: 70px;
  text-transform: uppercase;
`;

const Connect = styled.div`
  color: #ffffff;
  font-size: 50px;
  display: flex;
  justify-content: center;
`;
const LinkSection = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;
const Link = styled.a`
  color: #ffffff;
  font-size: 30px;
`;

const Contact = ({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) => {
  return (
    <ContactSection id="contact" ref={sectionRef}>
      <Title>Contact</Title>
      <Connect>Let&aposs Connect Via</Connect>
      <LinkSection>
        <Link>E-Mail</Link>
        <Link>LinkedIn</Link>
        <Link>Git Hub</Link>
      </LinkSection>
    </ContactSection>
  );
};
export default Contact;
