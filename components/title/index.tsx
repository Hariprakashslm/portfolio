import styled from "styled-components";

const Title = styled.h2<{ type?: string }>`
  font-size: 4rem;
  font-weight: 700;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2), 3px 5px 9px rgba(0, 0, 0, 0.3);
  margin: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  line-height: 1.2;
  transition: all var(--transition-normal);
  
  ${(props) => (props.type === "Dark" ? "color: var(--primary);" : "color: white;")}
  
  &:hover {
    transform: scale(1.02);
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3), 4px 6px 12px rgba(0, 0, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
  }
`;

export default Title;
