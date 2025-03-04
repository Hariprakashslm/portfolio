import styled from "styled-components";
import { RefObject } from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { LinkField } from "@prismicio/client";

const ContactSection = styled.footer`
  padding: 50px;
  background-color: #00628c;
`;

const Title = styled.h6`
  color: #ffffff;
  font-size: 70px;
  text-transform: uppercase;
`;

const Connect = styled.div`
  color: #ffffff;
  font-size: 50px;
  display: flex;
  justify-content: center;
`;
const LinkSection = styled.div`
  display: flex;
  justify-content: end;
  gap: 20px;
`;
const Link = styled.div`
  color: #ffffff;
  font-size: 25px;
`;

const Contact = ({
  sectionRef,
  data,
}: {
  sectionRef: RefObject<HTMLDivElement>;
  data: any;
}) => {
  return (
    <ContactSection id="contact" ref={sectionRef}>
      <PrismicRichText
        field={data.contact_title}
        components={{
          heading3: (data) => <Title>{data.children}</Title>,
        }}
      />
      <PrismicRichText
        field={data.contact_description}
        components={{
          paragraph: (data) => <Connect>{data.children}</Connect>,
        }}
      />

      <LinkSection>
        {data.contact_list.map(
          (
            contactList: { contact_link: LinkField; contact_via: string },
            index: number
          ) => {
            return (
              <PrismicLink
                field={contactList.contact_link}
                key={index}
                target="_blank"
              >
                <Link>{contactList.contact_via}</Link>
              </PrismicLink>
            );
          }
        )}
      </LinkSection>
    </ContactSection>
  );
};
export default Contact;
