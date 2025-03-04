import Link from 'next/link';
import styled from 'styled-components';
import { IUserProfile } from '../../interface';
import { Scrollspy } from '@makotot/ghostui';
import React, { RefObject, useEffect, useState } from 'react';
import { PrismicRichText } from '@prismicio/react';

const HeaderSection = styled.nav<{ visible: string }>`
  padding: 34px;
  position: fixed;
  background-color: #fff;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid #a39797;
  ${(props) =>
    props.visible === "show"
      ? `
    display:block;
    `
      : `display:none;`}
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
`;

const HederMenuItem = styled.div<{ type?: string }>`
  ${(props) => (props.type === 'active' ? 'opacity: 1;' : 'opacity: 0.7;')}
  &:hover {
    opacity: 1;
  }
`;
const StyledLink = styled(Link)``;

const Header = ({
  data,
  headerData,
  sectionRefs,
}: {
  data: any;
  headerData: IUserProfile;
  sectionRefs: RefObject<Element>[];
}) => {
  const [isClient, setIsClient] = useState(false);

  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100); // Show header after 100px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, to: string) => {
    e.preventDefault();
    document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });
  };
  console.log({ headerData: data });
  return (
    <HeaderSection visible={showHeader ? "show" : "hide"}>
      {isClient && (
        <Scrollspy offset={-500} sectionRefs={sectionRefs}>
          {({ currentElementIndexInViewport }) => {
            const progress =
              ((currentElementIndexInViewport + 1) / sectionRefs.length) * 100;
            return (
              <>
                <HeaderDivider>
                  <PrismicRichText
                    field={data.name}
                    components={{
                      heading1: (data) => (
                        <HeaderTitle>{data.children}</HeaderTitle>
                      ),
                    }}
                  />
                  <HeaderMenu>
                    {headerData.menu.map((menu, index) => {
                      return (
                        <HederMenuItem
                          key={index}
                          type={
                            currentElementIndexInViewport === index
                              ? 'active'
                              : 'inActive'
                          }
                        >
                          <StyledLink
                            href={`#${menu.linkTo}`}
                            scroll={false}
                            onClick={(e) => handleClick(e, menu.linkTo)}
                          >
                            {menu.name}
                          </StyledLink>
                        </HederMenuItem>
                      );
                    })}
                  </HeaderMenu>
                </HeaderDivider>
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '5px',
                    width: `${progress}%`,
                    backgroundColor: 'blue',
                    transition: 'width 0.3s ease-out',
                    zIndex: 9999,
                  }}
                />
              </>
            );
          }}
        </Scrollspy>
      )}
    </HeaderSection>
  );
};

export default Header;
