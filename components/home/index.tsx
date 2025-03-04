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
  align-items: center;
  height: 100vh;
  text-align: center;
  right: 10%;
`;
const BannerContent = styled.div``;

const BannerContact = styled.div`
  color: #fff;
  border-left: #ffffff solid 5px;
  height: 50vh;
  padding-left: 20px;
`;
const IamDiv = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-right: 20px;
`;
const WelcomeTitle = styled(Title)``;
const NameTitle = styled(Title)`
  font-size: 50px;
`;
const RoleTitle = styled(Title)`
  font-size: 50px;
  text-transform: none;
`;
const Home = ({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) => {
  return (
    <BannerSection id="home" ref={sectionRef}>
      <BannerImage src={"/plain-home-banner.png"} alt="Hariprakash" />
      <BannerContentSection>
        <BannerContent>
          <WelcomeTitle>Welcome</WelcomeTitle>
          <IamDiv>I AM</IamDiv>

          <NameTitle>Hari Prakash</NameTitle>
          <RoleTitle>Senior Software Engineer</RoleTitle>
        </BannerContent>
        {/* <BannerContact>Test</BannerContact> */}
      </BannerContentSection>
    </BannerSection>
  );
};
export default Home;
