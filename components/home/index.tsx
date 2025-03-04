import { RefObject } from "react";
import styled from "styled-components";
import Title from "../title";

const BannerImage = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const BannerSection = styled.div`
  height: 100vh;
  display: flex;
  aligh-items: center;
`;

const BannerContentSection = styled.div`
  position: absolute;
  display: flex;
  width: 70hw;
  align-items: center;
  height: 100vh;
  text-align: right;
`;
const BannerContent = styled.div``;

const BannerContact = styled.div`
  color: #fff;
  border-left: #ffffff solid 5px;
  height: 50vh;
  padding-left: 20px;
`;
const IamDiv = styled.div``;
const Home = ({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) => {
  return (
    <BannerSection id="home" ref={sectionRef}>
      <BannerImage src={"/plain-home-banner.png"} alt="Hariprakash" />
      <BannerContentSection>
        <BannerContent>
          <Title>Welcome</Title>
          <IamDiv>I AM</IamDiv>

          <Title>Hari Prakash</Title>
          <Title>Senior Software Engineer</Title>
        </BannerContent>
        <BannerContact>Test</BannerContact>
      </BannerContentSection>
    </BannerSection>
  );
};
export default Home;
