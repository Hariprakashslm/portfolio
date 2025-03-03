import styled from "styled-components";

const Title = styled.h2<{ type?: string }>`
  font-size: 68px;

  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2), 3px 5px 9px rgba(0, 0, 0, 0.3);
  margin: 20px;
  text-transform: uppercase;
  ${(props) => (props.type === "Dark" ? "color: #010b30;" : "color: #ffffff;")}
`;

export default Title;
