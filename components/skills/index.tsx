import styled from 'styled-components';
import { RefObject } from 'react';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/client';
const Title = styled.h2`
  font-size: 68px;
  color: #010b30;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2), 3px 5px 9px rgba(0, 0, 0, 0.3);
  margin: 20px;
  text-transform: uppercase;
`;
const SkillsSection = styled.section`
  padding: 20px;
  padding-top: 80px;
  padding-bottom: 50px;
`;

const SkillsCartSection = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;
const SkillsCart = styled.div`
  background-color: #f6f6f6;
  padding: 20px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1, 1);
  }
`;

const SkillCartTitle = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;

const SillCartContent = styled.div`
  text-align: center;
`;

const TechFamilierTitle = styled.h3`
  text-align: center;
  font-size: 30px;
  margin: 40px;
`;
const TechFamilierContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  text-align: center;
  margin: 30px;
`;

const TechFamilierContent = styled.div`
  &:hover {
    font-weight: 600;
  }
`;
const Skills = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  const techSkils = data.techSkils;
  return (
    <SkillsSection id="skills" ref={sectionRef}>
      <PrismicRichText
        field={data.skills_title}
        components={{
          heading3: (data) => <Title>{data.children}</Title>,
        }}
      />
      <SkillsCartSection>
        {data.skill_list?.map(
          (
            data: { title: RichTextField; description: RichTextField },
            index: number
          ) => {
            return (
              <SkillsCart key={index}>
                <PrismicRichText
                  field={data.title}
                  components={{
                    heading6: (data) => (
                      <SkillCartTitle>{data.children}</SkillCartTitle>
                    ),
                  }}
                />
                <PrismicRichText
                  field={data.description}
                  components={{
                    paragraph: (data) => (
                      <SillCartContent>{data.children}</SillCartContent>
                    ),
                  }}
                />
              </SkillsCart>
            );
          }
        )}
      </SkillsCartSection>
      <PrismicRichText
        field={data.tech_familiar_title}
        components={{
          heading4: (data) => (
            <TechFamilierTitle>{data.children}</TechFamilierTitle>
          ),
        }}
      />

      <TechFamilierContentSection>
        {data.tech_familiar_list.map(
          ({ list }: { list: string }, index: number) => {
            return (
              <div key={index}>
                {<TechFamilierContent>{list}</TechFamilierContent>}
              </div>
            );
          }
        )}
      </TechFamilierContentSection>
    </SkillsSection>
  );
};
export default Skills;
