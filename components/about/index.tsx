import styled from "styled-components";
import { RefObject } from "react";

const AboutSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: linear-gradient(
    135deg,
    #0f0f23 0%,
    #1a1a2e 25%,
    #16213e 50%,
    #1a1a2e 75%,
    #0f0f23 100%
  );
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
        rgba(147, 51, 234, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.3;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(147, 51, 234, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }
`;

const AboutContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const AboutTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: var(--spacing-2xl);
  background: linear-gradient(135deg, #3b82f6 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const AboutContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: var(--spacing-2xl);
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: var(--spacing-2xl);
  position: relative;
  overflow: hidden;
  animation: contentFloat 6s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.1) 0%,
      rgba(236, 72, 153, 0.1) 100%
    );
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform var(--transition-normal);
  }

  &:hover {
    transform: translateY(-3px) scale(1.01);
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2),
      0 8px 25px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }

    &::after {
      transform: translateX(100%);
    }
  }

  @keyframes contentFloat {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-2px) rotate(0.3deg);
    }
    50% {
      transform: translateY(-4px) rotate(0deg);
    }
    75% {
      transform: translateY(-2px) rotate(-0.3deg);
    }
  }

  @media (max-width: 768px) {
    padding: var(--spacing-xl);
    font-size: 1rem;
  }
`;

const HighlightedName = styled.span`
  color: #fbbf24;
  font-weight: 700;
  position: relative;
  animation: nameGlow 3s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #fbbf24, #f59e0b);
    border-radius: 1px;
    animation: underlinePulse 2s ease-in-out infinite;
  }

  @keyframes nameGlow {
    0%,
    100% {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    50% {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(251, 191, 36, 0.4);
    }
  }

  @keyframes underlinePulse {
    0%,
    100% {
      opacity: 1;
      transform: scaleX(1);
    }
    50% {
      opacity: 0.7;
      transform: scaleX(0.9);
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  animation: buttonsSlideUp 1s ease-out 1.5s both;

  @keyframes buttonsSlideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: var(--spacing-md);
    justify-content: center;
  }
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-normal);
  box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  animation: primaryButtonPulse 2s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.1) 100%
    );
    transform: translateX(-100%);
    transition: transform var(--transition-normal);
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4),
      0 8px 25px rgba(0, 0, 0, 0.3);

    &::before {
      transform: translateX(100%);
    }
  }

  @keyframes primaryButtonPulse {
    0%,
    100% {
      box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3);
    }
    50% {
      box-shadow: 0 8px 25px rgba(139, 92, 246, 0.3),
        0 0 30px rgba(139, 92, 246, 0.2);
    }
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-2xl);
  background: transparent;
  color: #8b5cf6;
  text-decoration: none;
  border: 2px solid #8b5cf6;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-normal);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
  position: relative;
  overflow: hidden;
  animation: secondaryButtonGlow 3s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    opacity: 0;
    transition: opacity var(--transition-normal);
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px) scale(1.05);
    color: white;
    border-color: transparent;
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);

    &::before {
      opacity: 1;
    }
  }

  @keyframes secondaryButtonGlow {
    0%,
    100% {
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2);
      border-color: #8b5cf6;
    }
    50% {
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.2),
        0 0 20px rgba(139, 92, 246, 0.3);
      border-color: #ec4899;
    }
  }
`;

const ButtonIcon = styled.span<{ dataindex: number }>`
  font-size: 1.2rem;
  animation: iconBounce 0.6s ease-out both;
  animation-delay: ${(props) => props.dataindex * 0.2 + 0.3}s;

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

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const FloatingCircle = styled.div<{
  size: number;
  delay: number;
  color: string;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  border-radius: 50%;
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg) scale(1);
      opacity: 0.1;
    }
    25% {
      transform: translateY(-30px) rotate(90deg) scale(1.1);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-60px) rotate(180deg) scale(0.9);
      opacity: 0.15;
    }
    75% {
      transform: translateY(-30px) rotate(270deg) scale(1.05);
      opacity: 0.25;
    }
  }
`;

const FloatingSquare = styled.div<{
  size: number;
  delay: number;
  color: string;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: ${(props) => props.color};
  border-radius: 12px;
  opacity: 0.08;
  animation: squareFloat 10s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes squareFloat {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg) scale(1);
      opacity: 0.08;
    }
    33% {
      transform: translateY(-40px) rotate(120deg) scale(1.2);
      opacity: 0.15;
    }
    66% {
      transform: translateY(-80px) rotate(240deg) scale(0.8);
      opacity: 0.1;
    }
  }
`;

const About = ({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) => {
  return (
    <AboutSection id="about" ref={sectionRef}>
      <DecorativeElement />

      <FloatingElements>
        <FloatingCircle size={100} delay={0} color="rgba(139, 92, 246, 0.3)" />
        <FloatingCircle size={80} delay={2} color="rgba(236, 72, 153, 0.3)" />
        <FloatingCircle size={120} delay={4} color="rgba(59, 130, 246, 0.3)" />
        <FloatingSquare size={90} delay={1} color="rgba(16, 185, 129, 0.3)" />
        <FloatingSquare size={70} delay={3} color="rgba(245, 158, 11, 0.3)" />
      </FloatingElements>

      <AboutContainer>
        <AboutTitle>About Me</AboutTitle>

        <AboutContent>
          Hello, I&apos;m <HighlightedName>Hari Prakash</HighlightedName>,
          passionate about building smart and scalable web & mobile
          applications. Currently working as a Software Engineer at Advanced
          Millennium Technologies Pvt Ltd, I bring over 5 years of professional
          experience in full stack development, focusing on creating dynamic and
          scalable web applications. My expertise lies in both frontend and
          backend technologies, making me a versatile developer capable of
          handling complex projects across multiple domains.
          <br />
          <br />I have good work experience with various startups where I was
          core part of developer team and work on major features. I love working
          on new and exciting technologies. I have a keen interest in Web
          Development and I am always looking for new opportunities to learn and
          grow.
        </AboutContent>

        <ActionButtons>
          <PrimaryButton
            href="/Hariprakash-S-FlowCV-Resume-20250807.pdf"
            target="_blank"
            download
          >
            <ButtonIcon dataindex={0}>📄</ButtonIcon>
            Download Resume
          </PrimaryButton>

          <SecondaryButton href="#projects">
            <ButtonIcon dataindex={1}>&lt;/&gt;</ButtonIcon>
            View Projects
          </SecondaryButton>
        </ActionButtons>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
