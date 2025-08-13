import styled from "styled-components";
import Title from "../title";
import { RefObject, useState } from "react";
import { PrismicRichText, PrismicImage } from "@prismicio/react";
import { RichTextField, ImageField } from "@prismicio/client";

const ProjectSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #1a1a2e 75%, #0f0f23 100%);
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
    background-image: 
      linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
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
    background: radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const ProjectContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ProjectTitle = styled.h2`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all var(--transition-normal);
  position: relative;
  animation: cardSlideIn 0.8s ease-out both;
  animation-delay: ${props => props['data-index'] * 0.2}s;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      rgba(139, 92, 246, 0.1) 0%, 
      rgba(236, 72, 153, 0.1) 100%);
    opacity: 0;
    transition: opacity var(--transition-normal);
    z-index: 1;
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
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(139, 92, 246, 0.3);
    box-shadow: 
      0 20px 40px rgba(139, 92, 246, 0.2),
      0 8px 25px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
    
    &::after {
      transform: translateX(100%);
    }
  }
  
  @keyframes cardSlideIn {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const ImageSection = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2));
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      rgba(139, 92, 246, 0.3) 0%, 
      rgba(236, 72, 153, 0.3) 100%);
    opacity: 0;
    transition: opacity var(--transition-normal);
    z-index: 2;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  animation: imageFloat 6s ease-in-out infinite;
  
  @keyframes imageFloat {
    0%, 100% { transform: translateY(0px) scale(1); }
    50% { transform: translateY(-5px) scale(1.05); }
  }
`;

const CustomImage = styled(PrismicImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: scale(1.1) rotate(1deg);
  }
`;

const ProjectContent = styled.div`
  padding: var(--spacing-xl);
  position: relative;
  z-index: 2;
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

const ProjectName = styled.h3`
  font-size: 1.5rem;
  color: #fbbf24;
  margin-bottom: var(--spacing-md);
  font-weight: 600;
  animation: titleGlow 3s ease-in-out infinite;
  
  @keyframes titleGlow {
    0%, 100% { 
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    50% { 
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(251, 191, 36, 0.3);
    }
  }
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  font-size: 0.95rem;
  animation: descriptionSlideIn 1s ease-out 0.7s both;
  
  @keyframes descriptionSlideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  animation: techStackFadeIn 1s ease-out 0.9s both;
  
  @keyframes techStackFadeIn {
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

const Tech = styled.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
  transition: all var(--transition-normal);
  animation: techBounce 0.6s ease-out both;
  animation-delay: ${props => props['data-index'] * 0.1}s;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 16px rgba(139, 92, 246, 0.4);
  }
  
  @keyframes techBounce {
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

const ProjectLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  animation: linksSlideIn 1s ease-out 1.1s both;
  
  @keyframes linksSlideIn {
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

const ProjectLink = styled.a`
  padding: var(--spacing-sm) var(--spacing-lg);
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all var(--transition-normal);
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.2) 0%, 
      transparent 50%, 
      rgba(255, 255, 255, 0.1) 100%);
    transform: translateX(-100%);
    transition: transform var(--transition-normal);
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
    
    &::before {
      transform: translateX(100%);
    }
  }
  
  animation: linkPulse 2s ease-in-out infinite;
  
  @keyframes linkPulse {
    0%, 100% { 
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
    }
    50% { 
      box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3), 0 0 20px rgba(139, 92, 246, 0.2);
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

const Projects = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  // Check if data exists and has the expected structure
  if (!data || !data.project_group) {
    return (
      <ProjectSection id="projects" ref={sectionRef}>
        <DecorativeElement />
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectContainer>
          <div style={{ textAlign: 'center', padding: '2rem', color: 'rgba(255, 255, 255, 0.6)' }}>
            No projects data available at the moment.
          </div>
        </ProjectContainer>
      </ProjectSection>
    );
  }

  return (
    <ProjectSection id="projects" ref={sectionRef}>
      <DecorativeElement />
      
      <ProjectContainer>
        <ProjectTitle>Projects</ProjectTitle>
        
        <ProjectGrid>
          {data.project_group.map(
            (
              currentData: {
                project_name?: RichTextField;
                project_title?: RichTextField;
                project_description?: RichTextField;
                project_image?: ImageField;
                tech?: RichTextField;
                tech_stack?: RichTextField;
                project_link?: RichTextField;
              },
              index: number
            ) => {
              // Use fallback field names if the expected ones don't exist
              const title = currentData.project_title || currentData.project_name;
              const description = currentData.project_description;
              const image = currentData.project_image;
              const tech = currentData.tech_stack || currentData.tech;
              
              return (
                <ProjectCard key={index} data-index={index}>
                  <ImageSection>
                    {image ? (
                      <CustomImage field={image} />
                    ) : (
                      <div style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255, 255, 255, 0.6)',
                        fontSize: '0.9rem'
                      }}>
                        No Image
                      </div>
                    )}
                  </ImageSection>
                  <ProjectContent>
                    {title && (
                      <PrismicRichText
                        field={title}
                        components={{
                          heading6: (data) => <ProjectName>{data.children}</ProjectName>,
                          heading1: (data) => <ProjectName>{data.children}</ProjectName>,
                        }}
                      />
                    )}
                    {description && (
                      <PrismicRichText
                        field={description}
                        components={{
                          paragraph: (data) => <ProjectDescription>{data.children}</ProjectDescription>,
                        }}
                      />
                    )}
                    <TechStack>
                      {tech ? (
                        <PrismicRichText
                          field={tech}
                          components={{
                            list: (data) => (
                              <>
                                {data.children?.map((item: any, techIndex: number) => {
                                  const text = typeof item.children?.[0] === 'string' 
                                    ? item.children[0] 
                                    : (item.children?.[0] as any)?.text || 'Tech';
                                  return <Tech key={techIndex} data-index={techIndex}>{text}</Tech>;
                                })}
                              </>
                            ),
                            listItem: (data) => {
                              const text = typeof data.children?.[0] === 'string' 
                                ? data.children[0] 
                                : (data.children?.[0] as any)?.text || 'Tech';
                              return <Tech data-index={1}>{text}</Tech>;
                            },
                          }}
                        />
                      ) : (
                        <>
                          <Tech data-index={0}>React</Tech>
                          <Tech data-index={1}>Next.js</Tech>
                          <Tech data-index={2}>TypeScript</Tech>
                        </>
                      )}
                    </TechStack>
                    <ProjectLinks>
                      <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
                        View Project
                      </ProjectLink>
                      <ProjectLink href="#" target="_blank" rel="noopener noreferrer">
                        Source Code
                      </ProjectLink>
                    </ProjectLinks>
                  </ProjectContent>
                </ProjectCard>
              );
            }
          )}
        </ProjectGrid>
      </ProjectContainer>
    </ProjectSection>
  );
};

export default Projects;
