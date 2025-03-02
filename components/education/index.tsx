import styled from "styled-components";
import Title from "../title";

const ContentSection = styled.div`
  padding: 20px;
  background-color: #f6f6f6;
`;
const ContentItem = styled.div`
  margin: 20px;
`;
const Content = styled.div`
  margin-bottom: 10px;
  opacity: 0.7;
`;
const SubTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 26px;
`;
const data = [
  {
    title: "Bachelor's Degree in Electorics and Communication Engieering",
    contents: ["Sona College of Technologies", "CGPA - 6.83", "2014 - 2018"],
  },
  {
    title: "High School, Sri Jothi Higher Secondary School",
    contents: ["Scored 86%", "2014"],
  },
  {
    title: "Secondary School, V.C  Higher Secondary School",
    contents: ["Scored 78%", "2012"],
  },
];

const Education = () => {
  return (
    <ContentSection>
      <Title>Education</Title>
      {data.map((currentData, index) => {
        return (
          <ContentItem key={index}>
            <SubTitle>{currentData.title}</SubTitle>
            {currentData.contents.map((conent, index) => {
              return <Content key={index}>{conent}</Content>;
            })}
          </ContentItem>
        );
      })}
    </ContentSection>
  );
};
export default Education;
