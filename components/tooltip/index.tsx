import React from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipText = styled.span`
  visibility: hidden;
  background-color: black;
  color: white;
  text-align: center;
  padding: 6px 10px;
  border-radius: 4px;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  /* Tooltip Arrow */
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
`;

const TooltipWrapper = styled.div`
  &:hover ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({
  text,
  children,
}) => {
  return (
    <TooltipContainer>
      <TooltipWrapper>
        {children}
        <TooltipText>{text}</TooltipText>
      </TooltipWrapper>
    </TooltipContainer>
  );
};

export default Tooltip;
