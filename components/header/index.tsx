import styled from "styled-components";
import { RefObject, useEffect, useState } from "react";

const HeaderSection = styled.header<{ visible: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all var(--transition-normal);
  transform: ${(props) =>
    props.visible === "show" ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${(props) => (props.visible === "show" ? "1" : "0")};
`;

const HeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
`;

const NavShell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  gap: 0.75rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(10, 15, 18, 0.4);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: 768px) {
    border-radius: 16px;
  }
`;

const HeaderMenu = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const HeaderMenuItem = styled.div<{ isactive: boolean }>`
  position: relative;
  border-radius: 999px;
  background: ${(p) =>
    p.isactive ? "rgba(255, 255, 255, 0.04)" : "transparent"};
`;

const StyledLink = styled.a<{ isactive: boolean }>`
  padding: 0.35rem 0.5rem;
  display: block;
  text-decoration: none;
  color: ${(props) =>
    props.isactive ? "#ffffff" : "rgba(255, 255, 255, 0.85)"};
  font-weight: ${(props) => (props.isactive ? "600" : "500")};
  font-size: 0.9rem;
  transition: color var(--transition-fast);
  position: relative;

  &:hover {
    color: #ffffff;
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(0, 98, 140, 0.15);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: var(--scroll-width, 0%);
    background: linear-gradient(90deg, var(--primary), var(--secondary));
    transition: width 0.1s ease-out;
    box-shadow: 0 0 10px rgba(0, 98, 140, 0.35);
  }
`;

const Header = ({
  headerData,
  sectionRefs,
}: {
  headerData: any;
  sectionRefs: RefObject<HTMLDivElement>[];
}) => {
  const [visible, setVisible] = useState("show");
  const [scrollWidth, setScrollWidth] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress
      const scrollProgress =
        (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollWidth(scrollProgress);

      // Show/hide header based on scroll direction
      if (scrollTop > 100) {
        setVisible("show");
      } else {
        setVisible("show");
      }

      // Determine current section based on scroll position
      let currentSectionIndex = 0;
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSectionIndex = index;
          }
        }
      });
      setCurrentSection(currentSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  return (
    <HeaderSection visible={visible}>
      <ProgressBar style={{ "--scroll-width": `${scrollWidth}%` } as any} />

      <HeaderDivider>
        <NavShell>
          <HeaderMenu>
            {headerData.menu.map((item: any, index: number) => (
              <HeaderMenuItem key={index} isactive={currentSection === index}>
                <StyledLink
                  href={`#${item.linkTo}`}
                  isactive={currentSection === index}
                >
                  {item.name}
                </StyledLink>
              </HeaderMenuItem>
            ))}
          </HeaderMenu>
        </NavShell>
      </HeaderDivider>
    </HeaderSection>
  );
};

export default Header;
