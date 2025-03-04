import styled from "styled-components";
import Title from "../title";
import { RefObject } from "react";
import { PrismicRichText } from "@prismicio/react";
import { RichTextField } from "@prismicio/client";

const ContentSection = styled.div`
  padding: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
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

const Education = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  return (
    <ContentSection id="education" ref={sectionRef}>
      <PrismicRichText
        field={data.education_title}
        components={{
          heading3: (data) => <Title>{data.children}</Title>,
        }}
      />
      {data.education_group.map(
        (
          currentData: { sub_title: RichTextField; description: RichTextField },
          index: number
        ) => {
          return (
            <ContentItem key={index}>
              <PrismicRichText
                field={currentData.sub_title}
                components={{
                  heading6: (data) => <SubTitle>{data.children}</SubTitle>,
                }}
              />
              <PrismicRichText
                field={currentData.description}
                components={{
                  paragraph: (data) => <Content>{data.children}</Content>,
                }}
              />
            </ContentItem>
          );
        }
      )}
    </ContentSection>
  );
};
export default Education;
