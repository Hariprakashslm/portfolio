import styled from "styled-components";
import { RefObject } from "react";

const SkillsSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background: linear-gradient(
    135deg,
    #0a0a0a 0%,
    #1a1a1a 25%,
    #2d2d2d 50%,
    #1a1a1a 75%,
    #0a0a0a 100%
  );
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--primary),
      transparent
    );
  }
`;

const AbstractGraphic = styled.div`
  width: 300px;
  height: 200px;
  margin: 0 auto var(--spacing-2xl);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 30% 20%,
        rgba(147, 51, 234, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(236, 72, 153, 0.3) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 50% 50%,
        rgba(59, 130, 246, 0.2) 0%,
        transparent 50%
      );
    border-radius: 20px;
    transform: perspective(1000px) rotateX(15deg) rotateY(-15deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(147, 51, 234, 0.1) 0%,
      rgba(236, 72, 153, 0.1) 100%
    );
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(147, 51, 234, 0.5);
    box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3),
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
  background: ${(props) => props.color};
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
  background: radial-gradient(
    circle,
    rgba(147, 51, 234, 0.1) 0%,
    transparent 70%
  );
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

const skillsData = [
  // Frontend
  {
    name: "ReactJS",
    icon: "⚛️",
    color: "linear-gradient(135deg, #61dafb, #21d4fd)",
  },
  {
    name: "NextJS",
    icon: "▲",
    color: "linear-gradient(135deg, #000000, #ffffff)",
  },
  {
    name: "Angular",
    icon: "🅰️",
    color: "linear-gradient(135deg, #dd0031, #c3002f)",
  },
  {
    name: "Redux",
    icon: "🌀",
    color: "linear-gradient(135deg, #764abc, #593d88)",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "linear-gradient(135deg, #06b6d4, #0891b2)",
  },
  {
    name: "Styled Components",
    icon: "💅",
    color: "linear-gradient(135deg, #db7093, #c6538c)",
  },
  {
    name: "Storybook",
    icon: "📖",
    color: "linear-gradient(135deg, #ff4785, #d81b60)",
  },

  // Backend
  {
    name: "Node.js",
    icon: "🟢",
    color: "linear-gradient(135deg, #22c55e, #16a34a)",
  },
  {
    name: "Express.js",
    icon: "🚂",
    color: "linear-gradient(135deg, #000000, #6b7280)",
  },
  {
    name: "NestJS",
    icon: "🛡️",
    color: "linear-gradient(135deg, #e0234e, #b5173a)",
  },
  {
    name: "Microservices",
    icon: "🧩",
    color: "linear-gradient(135deg, #4ade80, #16a34a)",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    color: "linear-gradient(135deg, #22c55e, #16a34a)",
  },
  {
    name: "MySQL",
    icon: "🐬",
    color: "linear-gradient(135deg, #00758f, #1d4ed8)",
  },
  {
    name: "Redis",
    icon: "🟥",
    color: "linear-gradient(135deg, #ef4444, #b91c1c)",
  },

  // Cloud & DevOps
  {
    name: "AWS",
    icon: "☁️",
    color: "linear-gradient(135deg, #ff9900, #ffb84d)",
  },
  {
    name: "Docker",
    icon: "🐳",
    color: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  },
  {
    name: "ECS",
    icon: "📦",
    color: "linear-gradient(135deg, #f97316, #ea580c)",
  },
  {
    name: "Netlify",
    icon: "🌐",
    color: "linear-gradient(135deg, #00c7b7, #009e91)",
  },
  {
    name: "CloudWatch",
    icon: "⏱️",
    color: "linear-gradient(135deg, #2563eb, #1d4ed8)",
  },

  // CI/CD
  {
    name: "GitHub Actions",
    icon: "⚙️",
    color: "linear-gradient(135deg, #000000, #6b7280)",
  },

  // Tools & Testing
  {
    name: "Postman",
    icon: "📮",
    color: "linear-gradient(135deg, #ef5b25, #d9461f)",
  },
  {
    name: "Swagger",
    icon: "📑",
    color: "linear-gradient(135deg, #85ea2d, #5f9e1f)",
  },
  {
    name: "SonarQube",
    icon: "📊",
    color: "linear-gradient(135deg, #00b4d8, #0077b6)",
  },

  // Version Control
  {
    name: "Git",
    icon: "📝",
    color: "linear-gradient(135deg, #f97316, #ea580c)",
  },
];

const Skills = ({
  sectionRef,
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
              <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
              <SkillName>{skill.name}</SkillName>
            </SkillChip>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
