import styled from 'styled-components';
import { RefObject } from 'react';
import { PrismicRichText } from '@prismicio/react';

const BannerSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #4facfe 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(102, 126, 234, 0.4) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(79, 172, 254, 0.4) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 40% 40%,
        rgba(147, 51, 234, 0.3) 0%,
        transparent 50%
      );
    animation: backgroundShift 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  @keyframes backgroundShift {
    0%,
    100% {
      transform: scale(1) rotate(0deg);
    }
    25% {
      transform: scale(1.1) rotate(1deg);
    }
    50% {
      transform: scale(1.05) rotate(-1deg);
    }
    75% {
      transform: scale(1.15) rotate(0.5deg);
    }
  }
`;

const BannerImage = styled.img`
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(0.4) contrast(1.2) saturate(1.1);
  animation: imageFloat 15s ease-in-out infinite;

  @keyframes imageFloat {
    0%,
    100% {
      transform: scale(1.05) translateY(0px);
    }
    50% {
      transform: scale(1.1) translateY(-10px);
    }
  }
`;

const BannerContentSection = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  text-align: center;
  animation: fadeInUp 1.5s ease-out;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  padding: 3rem 4rem;
  border-radius: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    transform: translateX(-100%);
    transition: transform 0.8s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }

  animation: contentFloat 6s ease-in-out infinite;

  @keyframes contentFloat {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    25% {
      transform: translateY(-5px) rotate(0.5deg);
    }
    50% {
      transform: translateY(-10px) rotate(0deg);
    }
    75% {
      transform: translateY(-5px) rotate(-0.5deg);
    }
  }
`;

const WelcomeTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
  color: #ffffff;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  letter-spacing: 3px;
  font-weight: 300;
  text-transform: uppercase;
  animation: titleSlideIn 1s ease-out 0.5s both;

  @keyframes titleSlideIn {
    from {
      opacity: 0;
      transform: translateX(-100px) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }
`;

const IamDiv = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #ffd700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: iamPulse 2s ease-in-out infinite, iamSlideIn 1s ease-out 1s both;

  @keyframes iamPulse {
    0%,
    100% {
      transform: scale(1) rotate(0deg);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    50% {
      transform: scale(1.05) rotate(1deg);
      text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3);
    }
  }

  @keyframes iamSlideIn {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const NameTitle = styled.h2`
  font-size: 4rem;
  margin-bottom: 0;
  color: #ffffff;
  text-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: nameGlow 3s ease-in-out infinite, nameSlideIn 1s ease-out 1.5s both;

  @keyframes nameGlow {
    0%,
    100% {
      text-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    }
    50% {
      text-shadow: 0 6px 12px rgba(0, 0, 0, 0.4),
        0 0 30px rgba(255, 255, 255, 0.5);
    }
  }

  @keyframes nameSlideIn {
    from {
      opacity: 0;
      transform: translateY(100px) scale(0.5);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const RoleTitle = styled.h3`
  font-size: 1.75rem;
  color: #e0e0e0;
  margin-bottom: 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  font-style: italic;
  animation: roleFadeIn 1s ease-out 2s both;

  @keyframes roleFadeIn {
    from {
      opacity: 0;
      transform: translateY(30px) rotate(-2deg);
    }
    to {
      opacity: 1;
      transform: translateY(0) rotate(0deg);
    }
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: scrollBounce 2s ease-in-out infinite;

  @keyframes scrollBounce {
    0%,
    100% {
      transform: translateX(-50%) translateY(0px);
    }
    50% {
      transform: translateX(-50%) translateY(-10px);
    }
  }
`;

const ScrollArrow = styled.div`
  width: 4px;
  height: 50px;
  background: linear-gradient(180deg, #ffd700, #ffed4e);
  border-radius: 2px;
  position: relative;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
  animation: arrowPulse 2s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-right: 2px solid #ffd700;
    border-bottom: 2px solid #ffd700;
    transform: rotate(45deg);
    animation: arrowRotate 3s linear infinite;
  }

  &::before {
    top: 5px;
    left: -4px;
  }

  &::after {
    bottom: 5px;
    left: -4px;
    animation-delay: 1.5s;
  }

  @keyframes arrowPulse {
    0%,
    100% {
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
      transform: scale(1.1);
    }
  }

  @keyframes arrowRotate {
    0% {
      transform: rotate(45deg) scale(1);
    }
    50% {
      transform: rotate(45deg) scale(1.2);
    }
    100% {
      transform: rotate(45deg) scale(1);
    }
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
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
  animation: float 6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg) scale(1);
      opacity: 0.1;
    }
    25% {
      transform: translateY(-20px) rotate(90deg) scale(1.1);
      opacity: 0.2;
    }
    50% {
      transform: translateY(-40px) rotate(180deg) scale(0.9);
      opacity: 0.15;
    }
    75% {
      transform: translateY(-20px) rotate(270deg) scale(1.05);
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
  border-radius: 8px;
  opacity: 0.08;
  animation: squareFloat 8s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;

  @keyframes squareFloat {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg) scale(1);
      opacity: 0.08;
    }
    33% {
      transform: translateY(-30px) rotate(120deg) scale(1.2);
      opacity: 0.15;
    }
    66% {
      transform: translateY(-60px) rotate(240deg) scale(0.8);
      opacity: 0.1;
    }
  }
`;

const ParticleSystem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

const Particle = styled.div<{
  size: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
}>`
  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: particleFloat ${(props) => props.duration}s linear infinite;
  animation-delay: ${(props) => props.delay}s;

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

const Home = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  return (
    <BannerSection id="home" ref={sectionRef}>
      <BannerImage src="/banner.jpg" alt="Banner" />

      <FloatingElements>
        <FloatingCircle size={80} delay={0} color="rgba(255, 215, 0, 0.3)" />
        <FloatingCircle size={120} delay={2} color="rgba(147, 51, 234, 0.3)" />
        <FloatingCircle size={60} delay={4} color="rgba(79, 172, 254, 0.3)" />
        <FloatingSquare size={100} delay={1} color="rgba(255, 107, 107, 0.3)" />
        <FloatingSquare size={70} delay={3} color="rgba(46, 213, 115, 0.3)" />
      </FloatingElements>

      <ParticleSystem>
        {[...Array(20)].map((_, i) => (
          <Particle
            key={i}
            size={Math.random() * 4 + 2}
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            delay={Math.random() * 5}
            duration={Math.random() * 10 + 10}
          />
        ))}
      </ParticleSystem>

      <BannerContentSection>
        <BannerContent>
          {/* <PrismicRichText
            field={data.welcome_title}
            components={{
              heading1: (data) => <WelcomeTitle>{data.children}</WelcomeTitle>,
            }}
          />
           */}
          <WelcomeTitle>Welcome</WelcomeTitle>
          <IamDiv>I am</IamDiv>
          <PrismicRichText
            field={data.name_title}
            components={{
              heading1: (data) => <NameTitle>{data.children}</NameTitle>,
            }}
          />
          <NameTitle>Hariprakash</NameTitle>
          <RoleTitle>Senior Software Engineer</RoleTitle>
          {/* <PrismicRichText
            field={data.role_title}
            components={{
              heading1: (data) => <RoleTitle>{data.children}</RoleTitle>,
            }}
          /> */}
        </BannerContent>
      </BannerContentSection>

      <ScrollIndicator>
        <ScrollArrow />
      </ScrollIndicator>
    </BannerSection>
  );
};

export default Home;
