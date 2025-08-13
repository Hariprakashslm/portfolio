import styled from "styled-components";
import Title from "../title";
import { RefObject } from "react";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

const ContactSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    animation: backgroundPulse 8s ease-in-out infinite;
  }
  
  @keyframes backgroundPulse {
    0%, 100% { 
      transform: scale(1) rotate(0deg);
      opacity: 0.1;
    }
    50% { 
      transform: scale(1.2) rotate(180deg);
      opacity: 0.2;
    }
  }
`;

const ContactContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const GlassCard = styled.div`
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: var(--spacing-3xl);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  animation: cardFloat 6s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, 
      rgba(20, 20, 20, 0.9) 0%, 
      rgba(40, 40, 40, 0.7) 50%, 
      rgba(20, 20, 20, 0.9) 100%);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      transparent 0%, 
      rgba(147, 51, 234, 0.05) 50%, 
      transparent 100%);
    transform: translateX(-100%);
    transition: transform 1.2s ease;
  }
  
  &:hover::after {
    transform: translateX(100%);
  }
  
  @keyframes cardFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(0.5deg); }
    50% { transform: translateY(-6px) rotate(0deg); }
    75% { transform: translateY(-3px) rotate(-0.5deg); }
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-2xl);
    margin: 0 var(--spacing-md);
  }
`;

const ContactHeader = styled.div`
  margin-bottom: var(--spacing-2xl);
  position: relative;
  animation: headerSlideDown 1s ease-out both;
  
  @keyframes headerSlideDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  position: relative;
  animation: titleGlow 3s ease-in-out infinite;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 40px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    border-radius: 2px;
    animation: accentPulse 2s ease-in-out infinite;
  }
  
  @keyframes titleGlow {
    0%, 100% { 
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    50% { 
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2);
    }
  }
  
  @keyframes accentPulse {
    0%, 100% { 
      box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
      transform: translateY(-50%) scale(1);
    }
    50% { 
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
      transform: translateY(-50%) scale(1.1);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    
    &::before {
      left: -15px;
      width: 3px;
      height: 30px;
    }
  }
`;

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  animation: itemsFadeIn 1s ease-out 0.5s both;
  
  @keyframes itemsFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContactItem = styled.a<{ 'data-index': number }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  text-decoration: none;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  animation: itemSlideIn 0.8s ease-out both;
  animation-delay: ${props => props['data-index'] * 0.2}s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      rgba(147, 51, 234, 0.1) 0%, 
      rgba(236, 72, 153, 0.1) 100%);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.05) 50%, 
      transparent 100%);
    transform: translateX(-100%);
    transition: transform var(--transition-normal);
  }
  
  &:hover {
    transform: translateY(-3px) scale(1.02);
    border-color: rgba(147, 51, 234, 0.3);
    box-shadow: 
      0 15px 35px rgba(147, 51, 234, 0.2),
      0 5px 15px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      transform: translateX(100%);
    }
  }
  
  @keyframes itemSlideIn {
    from {
      opacity: 0;
      transform: translateX(-50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }
`;

const ContactIcon = styled.div<{ color: string; 'data-index': number }>`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  animation: iconBounce 0.6s ease-out both;
  animation-delay: ${props => props['data-index'] * 0.2 + 0.3}s;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: ${props => props.color};
    border-radius: 14px;
    opacity: 0.3;
    animation: iconGlow 2s ease-in-out infinite;
  }
  
  @keyframes iconBounce {
    from {
      opacity: 0;
      transform: scale(0) rotate(-180deg);
    }
    to {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }
  
  @keyframes iconGlow {
    0%, 100% { 
      opacity: 0.3;
      transform: scale(1);
    }
    50% { 
      opacity: 0.6;
      transform: scale(1.1);
    }
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }
`;

const ContactText = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const ContactPrimary = styled.div`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
`;

const ContactSecondary = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  font-weight: 500;
`;

const DecorativeElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border-radius: 50%;
  opacity: 0.05;
  top: 10%;
  left: 5%;
  z-index: 0;
  
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    top: 5%;
    left: 2%;
  }
`;

const FloatingParticles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const Particle = styled.div<{ size: number; top: string; left: string; delay: number; duration: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(147, 51, 234, 0.3);
  border-radius: 50%;
  animation: particleFloat ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
  
  @keyframes particleFloat {
    0% {
      transform: translateY(100vh) translateX(0px) scale(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
      transform: translateY(90vh) translateX(10px) scale(1);
    }
    90% {
      opacity: 1;
      transform: translateY(10vh) translateX(-10px) scale(1);
    }
    100% {
      transform: translateY(0vh) translateX(0px) scale(0);
      opacity: 0;
    }
  }
`;

// Contact data with social media links
const contactData = [
  {
    name: "LinkedIn",
    primary: "Let's Connect",
    secondary: "on LinkedIn",
    icon: "in",
    color: "linear-gradient(135deg, #0077b5, #005885)",
    url: "https://linkedin.com/in/yourprofile"
  },
  {
    name: "Instagram",
    primary: "Instagram",
    secondary: "@your.handle",
    icon: "📷",
    color: "linear-gradient(135deg, #e4405f, #c13584)",
    url: "https://instagram.com/yourprofile"
  },
  {
    name: "GitHub",
    primary: "GitHub",
    secondary: "@yourusername",
    icon: "🐙",
    color: "linear-gradient(135deg, #6e7681, #484f58)",
    url: "https://github.com/yourusername"
  }
];

const Contact = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  return (
    <ContactSection id="contact" ref={sectionRef}>
      <DecorativeElement />
      
      <FloatingParticles>
        {[...Array(15)].map((_, i) => (
          <Particle
            key={i}
            size={Math.random() * 6 + 3}
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            delay={Math.random() * 8}
            duration={Math.random() * 15 + 15}
          />
        ))}
      </FloatingParticles>
      
      <ContactContainer>
        <GlassCard>
          <ContactHeader>
            <ContactTitle>Connect With Me</ContactTitle>
          </ContactHeader>
          
          <ContactItems>
            {contactData.map((contact, index) => (
              <ContactItem 
                key={index} 
                href={contact.url} 
                target="_blank" 
                rel="noopener noreferrer"
                data-index={index}
              >
                <ContactIcon color={contact.color} data-index={index}>
                  {contact.icon}
                </ContactIcon>
                <ContactText>
                  <ContactPrimary>{contact.primary}</ContactPrimary>
                  <ContactSecondary>{contact.secondary}</ContactSecondary>
                </ContactText>
              </ContactItem>
            ))}
          </ContactItems>
        </GlassCard>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
