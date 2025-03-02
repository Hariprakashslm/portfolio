import styled from "styled-components";

const BannerImage = styled.img`
  margin-top: 110px;
  width: 100%;
`;
const Home = () => {
  return <BannerImage src={"/Hariprakash.png"} alt="Hariprakash" />;
};
export default Home;
