import styled from "styled-components";
import data from "../../data/index";
import Title from "../title";
import { RefObject } from "react";

const AboutSection = styled.section`
  padding: 20px;
  padding-top: 40px;
  background-color: #f6f6f6;
`;
const AboutDivider = styled.div`
  display: flex;
  align-items: center;
`;
const AboutContentDiv = styled.div`
  width: 60%;
`;
const AboutSubSectionDiv = styled.div`
  margin: 20px;
`;
const AboutImageDiv = styled.div``;
const AboutImage = styled.img`
  width: 550px;
  height: 550px;
  border-radius: 50%;
  object-fit: cover;
`;
const AboutSubHeadeing = styled.h4`
  opacity: 0.9;
`;
const AboutSubContent = styled.p`
  opacity: 0.7;
  font-size: 16px;
`;
const NavigationButtonSection = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  display: flex;
  gap: 10px;
`;
const NavigationButton = styled.button`
  background-color: rgb(246, 246, 246);
  text-transform: uppercase;
  margin-right: 14px;
  font-family: Gilroy-Heavy, sans-serif;
  letter-spacing: 1px;
  color: rgb(17, 17, 17);
  font-size: 18px;
  box-shadow: white -12px -12px 25px, rgba(165, 181, 248, 0.4) 12px 12px 25px;
  text-decoration: none;
  padding: 14px 25px;
  border-radius: 10rem;
  transition: 0.3s;
`;

const About = ({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) => {
  const about = data.about;
  return (
    <AboutSection id="about" ref={sectionRef}>
      <AboutDivider>
        <AboutContentDiv>
          <Title type="white">About</Title>
          {about.map((aboutData, index) => {
            return (
              <AboutSubSectionDiv key={index}>
                {!!aboutData.title && (
                  <AboutSubHeadeing>{aboutData.title}</AboutSubHeadeing>
                )}
                <AboutSubContent>{aboutData.content}</AboutSubContent>
              </AboutSubSectionDiv>
            );
          })}
          <NavigationButtonSection>
            <NavigationButton>Skills</NavigationButton>
            <NavigationButton>Resume</NavigationButton>
          </NavigationButtonSection>
        </AboutContentDiv>
        <AboutImageDiv>
          <AboutImage src="/about.jpg" />
        </AboutImageDiv>
      </AboutDivider>
    </AboutSection>
  );
};
export default About;
