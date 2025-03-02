import Link from "next/link";
import styled from "styled-components";
import { IUserProfile } from "../../interface";

const HeaderSection = styled.header`
  padding: 34px;
`;
const HeaderDivider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HeaderTitle = styled.div`
  font-size: 36px;
  opacity: 0.7;
`;
const HeaderMenu = styled.div`
  display: flex;
  gap: 60px;
  font-size: 20px;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`;
const StyledLink = styled(Link)``;

const Header = ({ data }: { data: IUserProfile }) => {
  return (
    <HeaderSection>
      <HeaderDivider>
        <HeaderTitle>{data.title}</HeaderTitle>
        <HeaderMenu>
          {data.menu.map((menu, index) => {
            return (
              <StyledLink href={menu.linkTo} key={index}>
                {menu.name}
              </StyledLink>
            );
          })}
        </HeaderMenu>
      </HeaderDivider>
    </HeaderSection>
  );
};

export default Header;
