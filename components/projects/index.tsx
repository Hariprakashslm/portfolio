import styled from "styled-components";
import Title from "../title";
import { RefObject } from "react";
import { PrismicImage, PrismicRichText } from "@prismicio/react";

const ProjectSection = styled.section`
  padding: 20px;
  padding-top: 80px;
  padding-bottom: 80px;

  background-color: #f6f6f6;
`;
const ContentItem = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  margin-bottom: 10px;
  opacity: 0.7;
`;
const SubTitle = styled.h4`
  margin-bottom: 20px;
  font-size: 26px;
`;

const ContentSection = styled.div`
  text-align: center;
  padding-right: 30px;
`;
const TechSection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
`;
const Tech = styled.span`
  background-color: #eceffe;
  color: #1740ed;
  padding: 8px;
  font-size: 12px;
  border-radius: 10px;
`;
const ImageSection = styled.div``;
const CustomImage = styled(PrismicImage)`
  height: 250px;
`;

const Card = styled.div`
  background-color: #f6f6f6;
  box-shadow: -12px -12px 25px white, 12px 12px 25px rgba(165, 181, 248, 0.4);
  transition: all 0.2sease-in-out;
  padding: 4rem;
  margin-right: 8rem;
  margin-left: 8rem;
  margin-bottom: 4rem;
`;

// const data = [
//   {
//     type: "NGO",
//     title: "Norwegian Refugee Council",
//     contents: [
//       "Led initiatives delivering crucial humanitarian aid and support to displaced populations ,Collaborated on strategic planning, resource management, and cross-functional teamwork, Contributed to the NRC's mission of restoring dignity and improving living conditions for those affected by conflict and crises",
//     ],
//     tech: "Angular, NestJS, MongoDB, Keycloak, RabbitMQ, Okta".split(","),
//     image: "/place-holder.png",
//   },
//   {
//     type: "NGO",
//     title: "FOOTPRINTS",
//     contents: [
//       "Enhanced business for owners through the Footprint CRM, focusing on user experience and sales growth, Developed an Admin portal and tools for the sales team, facilitating seamless interaction, Enabled owners to track sales team and in-store performance, analyze data, and refine business strategies",
//     ],
//     tech: "ReactJS, NodeJS, MongoDB, Redis for queue, Google Maps, Google Ads, Facebook Ads".split(
//       ","
//     ),
//     image: "/place-holder.png",
//   },
//   {
//     type: "NGO",
//     title: "MY TICKETS POS",
//     contents: [
//       "Developed MyTicketsPOS, an efficient ticket inventory management solution for the global marketplace, Provided intuitive tools for both seasoned sellers and beginners, ensuring a seamless ticket sales experience, Implemented real-time analytics and a user-friendly interface adaptable to various user needs.",
//     ],
//     tech: "ReactJS, NodeJS, MySQL".split(","),
//     image: "/place-holder.png",
//   },
// ];

const Projects = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  console.log({ projectData: data });
  return (
    <ProjectSection id="projects" ref={sectionRef}>
      <PrismicRichText
        field={data.projects_title}
        components={{
          heading3: (data) => <Title>{data.children}</Title>,
        }}
      />
      {data.project_group.map((currentData, index) => {
        return (
          <Card key={index}>
            <ContentItem>
              <ContentSection>
                <PrismicRichText
                  field={currentData.project_name}
                  components={{
                    heading1: (data) => <SubTitle>{data.children}</SubTitle>,
                  }}
                />
                <PrismicRichText
                  field={currentData.project_description}
                  components={{
                    paragraph: (data) => <Content>{data.children}</Content>,
                  }}
                />
                <PrismicRichText
                  field={currentData.tech}
                  components={{
                    list: (data) => <TechSection>{data.children}</TechSection>,
                    listItem: (data) => <Tech>{data.children}</Tech>,
                  }}
                />
              </ContentSection>
              <ImageSection>
                <CustomImage field={currentData.project_image} />
              </ImageSection>
            </ContentItem>
          </Card>
        );
      })}
    </ProjectSection>
  );
};
export default Projects;
