import { RefObject } from "react";
import styled from "styled-components";
import Title from "../title";

const BannerImage = styled.img`
  height: 350px;
  object-fit: cover;
`;

const BannerSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  // background-color: #26283d;
  background: linear-gradient(to right, #26283d, #000);
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

const IamDiv = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-right: 20px;
  color: #fda34c;
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
      <BannerImage src={"/dev.jpg"} alt="Hariprakash" />
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
