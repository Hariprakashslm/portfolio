import styled from "styled-components";
import Title from "../title";

const ContentSection = styled.div`
  margin: 20px;
`;
const ContentItem = styled.div`
  margin: 20px;
`;

const ContentList = styled.ul`
  margin-left: 40px;
`;

const ContentListItem = styled.li`
  margin-bottom: 10px;
  opacity: 0.7;
`;
const SubTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 26px;
`;

const RoleTitle = styled.h6`
  margin-bottom: 20px;
  font-size: 20px;
  color: blue;
`;

const Duration = styled.span`
  font-weight: 600;
  color: #000;
`;
const data = [
  {
    company: "Advanced Millennium Technologies Pvt. Ltd",
    location: "Bangalore, KA",
    role: "Senior Software Engineer",
    duration: "December 2021 - Present",
    rolesAndResp: [
      "Facilitated client meetings to collect project requirements and relayed them clearly to the",
      "development team, ensuring accurate and efficient implementation ",
      "Develop the reusable responsive UI components using ReactJS/Angular and Storybook.",
      "Create the REST APIs and integrate them into the ReactJS Applications.",
      "Maintain and add new Modules to the existing App",
      "Participating in code review",
    ],
  },
  {
    company: "App Innovation Technologies",
    location: "Coimbatore, TN",
    role: "PHP Developer",
    duration: "July 2020 - November 2021 1.5 Year",
    rolesAndResp: [
      "Creating applications from scratch to end",
      "Handling multiple project development",
      "Develop project concepts and maintain optimal workflow.",
      "Develop and make a change in existing projects based on client requirements.",
      "Built the Carryout quality assurance tests to discover errors and optimize usability",
    ],
  },
  {
    company: "GR Systems",
    location: "Coimbatore, TN",
    role: "Software Engineer",
    duration: "May 2019 - June 2020 1 Year",
    rolesAndResp: [
      "RESTful APIs that served data to our JavaScript front-end based on dynamically chosen user inputs",
      "Built the front-end logic with JavaScript frameworks ReactJS, and Angular. ",
      "Optimize and bug fixes in an existing project",
      "Develop the project from scratch and implement the business logic",
    ],
  },
];

const Experinace = () => {
  return (
    <ContentSection>
      <Title>Experience</Title>
      {data.map((currentData, index) => {
        return (
          <ContentItem key={index}>
            <SubTitle>{currentData.role}</SubTitle>
            <RoleTitle>
              {currentData.company}, {currentData.location} -{" "}
              <Duration>{currentData.duration}</Duration>
            </RoleTitle>
            <ContentList>
              {currentData.rolesAndResp.map((conent, index) => {
                return <ContentListItem key={index}>{conent}</ContentListItem>;
              })}
            </ContentList>
          </ContentItem>
        );
      })}
    </ContentSection>
  );
};
export default Experinace;
