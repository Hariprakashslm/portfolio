import styled from 'styled-components';
import { RefObject, useEffect, useState } from 'react';
import { useScrollspy } from '@makotot/ghostui';

const HeaderSection = styled.header<{ visible: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 15, 35, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  transition: all var(--transition-normal);
  transform: ${(props) =>
    props.visible === 'show' ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${(props) => (props.visible === 'show' ? '1' : '0')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(139, 92, 246, 0.5),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const HeaderDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    gap: 1rem;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #8b5cf6;
  margin: 0;
  text-shadow: 0 2px 4px rgba(139, 92, 246, 0.3);
  transition: all var(--transition-normal);

  &:hover {
    color: #a855f7;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeaderMenu = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const HeaderMenuItem = styled.div<{ isactive: boolean }>`
  position: relative;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-2px);
  }
`;

const StyledLink = styled.a<{ isactive: boolean }>`
  padding: 0.5rem 0.75rem;
  display: block;
  text-decoration: none;
  color: ${(props) =>
    props.isactive ? '#8b5cf6' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: ${(props) => (props.isactive ? '600' : '500')};
  font-size: 1rem;
  transition: all var(--transition-normal);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.isactive ? '100%' : '0')};
    height: 2px;
    background: #8b5cf6;
    border-radius: 1px;
    transition: width var(--transition-normal);
  }

  &:hover {
    color: #8b5cf6;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.6rem;
  }
`;

const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(139, 92, 246, 0.2);
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: var(--scroll-width, 0%);
    background: linear-gradient(90deg, #8b5cf6, #a855f7);
    transition: width 0.1s ease-out;
    box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const Header = ({
  headerData,
  sectionRefs,
}: {
  headerData: any;
  sectionRefs: RefObject<HTMLDivElement>[];
}) => {
  const [visible, setVisible] = useState('show');
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
        setVisible('show');
      } else {
        setVisible('show');
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  return (
    <HeaderSection visible={visible}>
      <ProgressBar style={{ '--scroll-width': `${scrollWidth}%` } as any} />

      <HeaderDivider>
        <HeaderTitle>Hari Prakash</HeaderTitle>

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
      </HeaderDivider>
    </HeaderSection>
  );
};

export default Header;
