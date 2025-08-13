import styled from "styled-components";
import Title from "../title";
import { RefObject } from "react";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

const SkillsSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #0a0a0a 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
`;

const AbstractGraphic = styled.div`
  width: 300px;
  height: 200px;
  margin: 0 auto var(--spacing-2xl);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%);
    border-radius: 20px;
    transform: perspective(1000px) rotateX(15deg) rotateY(-15deg);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: linear-gradient(135deg, 
      rgba(255, 255, 255, 0.1) 0%, 
      transparent 50%, 
      rgba(255, 255, 255, 0.05) 100%);
    border-radius: 15px;
    filter: blur(1px);
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 150px;
  }
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SkillsSubtitle = styled.div`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const MainTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: var(--spacing-3xl);
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TitleSecret = styled.span`
  color: white;
`;

const TitleSauce = styled.span`
  background: linear-gradient(135deg, #9333ea 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: var(--spacing-md);
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: var(--spacing-sm);
  }
`;

const SkillChip = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(147, 51, 234, 0.1) 0%, 
      rgba(236, 72, 153, 0.1) 100%);
    opacity: 0;
    transition: opacity var(--transition-normal);
  }
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(147, 51, 234, 0.5);
    box-shadow: 
      0 10px 30px rgba(147, 51, 234, 0.3),
      0 5px 15px rgba(0, 0, 0, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
`;

const SkillIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.25rem;
  }
`;

const SkillName = styled.span`
  color: white;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const DecorativeElement = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: -200px;
  right: -200px;
  z-index: 0;
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -150px;
  }
`;

const SkillCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: var(--spacing-xl);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all var(--transition-normal);
  position: relative;
  overflow: hidden;
  animation: cardFloat 6s ease-in-out infinite;
  
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
  
  @keyframes cardFloat {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(0.5deg); }
    50% { transform: translateY(-6px) rotate(0deg); }
    75% { transform: translateY(-3px) rotate(-0.5deg); }
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-lg);
  animation: headerSlideIn 0.8s ease-out both;
  
  @keyframes headerSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SkillTitle = styled.h4`
  font-size: 1.5rem;
  color: #fbbf24;
  font-weight: 600;
  margin: 0;
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

const ProficiencyBadge = styled.span<{ level: string }>`
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => {
    switch (props.level) {
      case 'expert': return 'linear-gradient(135deg, #10b981, #059669)';
      case 'advanced': return 'linear-gradient(135deg, #3b82f6, #2563eb)';
      case 'intermediate': return 'linear-gradient(135deg, #f59e0b, #d97706)';
      case 'beginner': return 'linear-gradient(135deg, #ef4444, #dc2626)';
      default: return 'linear-gradient(135deg, var(--gray-500), var(--gray-600))';
    }
  }};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  animation: badgePulse 2s ease-in-out infinite;
  
  @keyframes badgePulse {
    0%, 100% { 
      transform: scale(1);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    50% { 
      transform: scale(1.05);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    }
  }
`;

const SkillDescription = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin-bottom: var(--spacing-lg);
  font-size: 0.95rem;
  animation: descriptionFadeIn 1s ease-out 0.3s both;
  
  @keyframes descriptionFadeIn {
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

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin-bottom: var(--spacing-md);
  animation: progressSlideIn 1s ease-out 0.6s both;
  
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
`;

const ProgressFill = styled.div<{ percentage: number; level: string }>`
  height: 100%;
  width: ${props => props.percentage}%;
  background: ${props => {
    switch (props.level) {
      case 'expert': return 'linear-gradient(90deg, #10b981, #059669)';
      case 'advanced': return 'linear-gradient(90deg, #3b82f6, #2563eb)';
      case 'intermediate': return 'linear-gradient(90deg, #f59e0b, #d97706)';
      case 'beginner': return 'linear-gradient(90deg, #ef4444, #dc2626)';
      default: return 'linear-gradient(90deg, var(--gray-500), var(--gray-600))';
    }
  }};
  border-radius: 4px;
  transition: width 1.5s ease-out;
  position: relative;
  animation: progressFill 2s ease-out 1s both;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.3) 50%, 
      transparent 100%);
    animation: shimmer 2s infinite;
  }
  
  @keyframes progressFill {
    from { width: 0; }
    to { width: ${props => props.percentage}%; }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const CategoryTab = styled.button<{ active: boolean }>`
  padding: var(--spacing-sm) var(--spacing-lg);
  background: ${props => props.active 
    ? 'linear-gradient(135deg, var(--primary), var(--secondary))' 
    : 'rgba(255, 255, 255, 0.8)'};
  color: ${props => props.active ? 'white' : 'var(--gray-700)'};
  border: 2px solid ${props => props.active ? 'transparent' : 'var(--gray-200)'};
  border-radius: var(--radius-full);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: ${props => props.active 
    ? '0 4px 15px rgba(0, 98, 140, 0.3)' 
    : '0 2px 8px rgba(0, 0, 0, 0.1)'};
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
    box-shadow: ${props => props.active 
      ? '0 6px 20px rgba(0, 98, 140, 0.4)' 
      : '0 4px 15px rgba(0, 0, 0, 0.15)'};
    
    &::before {
      transform: translateX(100%);
    }
  }
  
  animation: tabBounce 0.6s ease-out both;
  animation-delay: ${props => props.active ? '0s' : '0.1s'};
  
  @keyframes tabBounce {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.8);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

// Skill data with icons and colors
const skillsData = [
  // Frontend
  { name: "ReactJS", icon: "⚛️", color: "linear-gradient(135deg, #61dafb, #21d4fd)" },
  { name: "NextJS", icon: "▲", color: "linear-gradient(135deg, #000000, #ffffff)" },
  { name: "TypeScript", icon: "TS", color: "linear-gradient(135deg, #3178c6, #235a97)" },
  { name: "Tailwind", icon: "🎨", color: "linear-gradient(135deg, #06b6d4, #0891b2)" },
  { name: "Motion", icon: "✨", color: "linear-gradient(135deg, #8b5cf6, #a855f7)" },
  { name: "Sanity", icon: "S", color: "linear-gradient(135deg, #f97316, #ea580c)" },
  { name: "Contentful", icon: "C", color: "linear-gradient(135deg, #3b82f6, #1d4ed8)" },
  
  // Backend
  { name: "Node.JS", icon: "🟢", color: "linear-gradient(135deg, #22c55e, #16a34a)" },
  { name: "Express.JS", icon: "ex", color: "linear-gradient(135deg, #000000, #6b7280)" },
  { name: "PostgreSQL", icon: "🐘", color: "linear-gradient(135deg, #3b82f6, #1d4ed8)" },
  { name: "MongoDB", icon: "🍃", color: "linear-gradient(135deg, #22c55e, #16a34a)" },
  { name: "Prisma", icon: "💎", color: "linear-gradient(135deg, #8b5cf6, #7c3aed)" },
  { name: "Zustand", icon: "🐻", color: "linear-gradient(135deg, #ec4899, #db2777)" },
  { name: "Zod", icon: "🔷", color: "linear-gradient(135deg, #3b82f6, #1d4ed8)" },
  
  // Tools & DevOps
  { name: "pnpm", icon: "📦", color: "linear-gradient(135deg, #f97316, #ea580c)" },
  { name: "Bun", icon: "🐰", color: "linear-gradient(135deg, #000000, #6b7280)" },
  { name: "Git", icon: "📝", color: "linear-gradient(135deg, #f97316, #ea580c)" },
  { name: "GitHub", icon: "🐙", color: "linear-gradient(135deg, #000000, #6b7280)" },
  { name: "Vercel", icon: "▲", color: "linear-gradient(135deg, #000000, #ffffff)" },
  { name: "AWS", icon: "☁️", color: "linear-gradient(135deg, #22c55e, #16a34a)" },
  { name: "Docker", icon: "🐳", color: "linear-gradient(135deg, #3b82f6, #1d4ed8)" },
  { name: "Expo", icon: "▲", color: "linear-gradient(135deg, #000000, #ffffff)" },
  
  // Additional
  { name: "Clerk", icon: "C", color: "linear-gradient(135deg, #8b5cf6, #7c3aed)" },
  { name: "Linux", icon: "🐧", color: "linear-gradient(135deg, #fbbf24, #f59e0b)" }
];

const Skills = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  return (
    <SkillsSection id="skills" ref={sectionRef}>
      <DecorativeElement />
      
      <SkillsContainer>
        <AbstractGraphic />
        
        <SkillsSubtitle>MY SKILLS</SkillsSubtitle>
        
        <MainTitle>
          <TitleSecret>The Secret </TitleSecret>
          <TitleSauce>Sauce</TitleSauce>
        </MainTitle>
        
        <SkillsGrid>
          {skillsData.map((skill, index) => (
            <SkillChip key={index}>
              <SkillIcon color={skill.color}>
                {skill.icon}
              </SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillChip>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
