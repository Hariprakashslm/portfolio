import styled from 'styled-components';
import { RefObject } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/client';

const ContentSection = styled.section`
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
    content: '';
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
    content: '';
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

const EducationContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const EducationTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: var(--spacing-3xl);
  background: linear-gradient(135deg, #3b82f6 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(180deg, #8b5cf6, #ec4899);
    border-radius: 2px;
    animation: timelineGrow 2s ease-out both;
  }

  @keyframes timelineGrow {
    from {
      height: 0;
      opacity: 0;
    }
    to {
      height: 100%;
      opacity: 1;
    }
  }
`;

const TimelineItem = styled.div<{ 'data-index': number }>`
  position: relative;
  margin-bottom: var(--spacing-2xl);
  padding-left: 80px;
  animation: itemSlideIn 0.8s ease-out both;
  animation-delay: ${(props) => props['data-index'] * 0.3}s;

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

const TimelineDot = styled.div`
  position: absolute;
  left: 20px;
  top: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  animation: dotPulse 2s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    width: 36px;
    height: 36px;
    background: linear-gradient(
      135deg,
      rgba(139, 92, 246, 0.2),
      rgba(236, 72, 153, 0.2)
    );
    border-radius: 50%;
    animation: dotGlow 3s ease-in-out infinite;
  }

  @keyframes dotPulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    }
    50% {
      transform: scale(1.2);
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
    }
  }

  @keyframes dotGlow {
    0%,
    100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.1);
    }
  }
`;

const TimelineContent = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: var(--spacing-xl);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: all var(--transition-normal);
  animation: contentFloat 6s ease-in-out infinite;

  &::before {
    content: '';
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
    content: '';
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
    transform: translateY(-3px) scale(1.02);
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.2),
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
`;

const SubTitle = styled.h4`
  font-size: 1.5rem;
  color: #fbbf24;
  margin-bottom: var(--spacing-md);
  font-weight: 600;
  animation: titleGlow 3s ease-in-out infinite;

  @keyframes titleGlow {
    0%,
    100% {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    50% {
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3),
        0 0 20px rgba(251, 191, 36, 0.3);
    }
  }
`;

const Content = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  font-size: 0.95rem;
  animation: contentFadeIn 1s ease-out 0.5s both;

  @keyframes contentFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  animation: progressSlideIn 1s ease-out 0.8s both;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    border-radius: 3px;
    animation: progressFill 2s ease-out 1.2s both;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.3) 50%,
        transparent 100%
      );
      animation: shimmer 2s infinite;
    }
  }

  @keyframes progressSlideIn {
    from {
      opacity: 0;
      transform: scaleX(0);
    }
    to {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  @keyframes progressFill {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const DecorativeElement = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #8b5cf6, #ec4899);
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

const Education = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  return (
    <ContentSection id="education" ref={sectionRef}>
      <DecorativeElement />

      <EducationContainer>
        <EducationTitle>Education</EducationTitle>

        <TimelineContainer>
          {data.education_group?.map(
            (
              currentData: {
                sub_title: RichTextField;
                description: RichTextField;
              },
              index: number
            ) => {
              return (
                <TimelineItem key={index} data-index={index}>
                  <TimelineDot />
                  <TimelineContent>
                    <PrismicRichText
                      field={currentData.sub_title}
                      components={{
                        heading6: (data) => (
                          <SubTitle>{data.children}</SubTitle>
                        ),
                      }}
                    />
                    <PrismicRichText
                      field={currentData.description}
                      components={{
                        paragraph: (data) => <Content>{data.children}</Content>,
                      }}
                    />
                    <ProgressBar />
                  </TimelineContent>
                </TimelineItem>
              );
            }
          ) || (
            <div
              style={{
                textAlign: 'center',
                padding: '2rem',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              No education data available at the moment.
            </div>
          )}
        </TimelineContainer>
      </EducationContainer>
    </ContentSection>
  );
};

export default Education;
