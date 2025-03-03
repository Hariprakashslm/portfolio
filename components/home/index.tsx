import { RefObject } from "react";
import styled from "styled-components";

const BannerImage = styled.img`
  margin-top: 110px;
  width: 100%;
`;
const Home = ({ sectionRef }: { sectionRef: RefObject<HTMLDivElement> }) => {
  return (
    <div id="home" ref={sectionRef}>
      <BannerImage src={"/Hariprakash.png"} alt="Hariprakash" />
    </div>
  );
};
export default Home;
