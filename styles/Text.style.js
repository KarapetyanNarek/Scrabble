import React from "react";
import styled from "styled-components";
import { textColors } from "../styles/variables";

const StyledText = styled.span`
  font-size: ${({ size }) => size || "1rem"};
  color: ${({ color }) => color || textColors["primary"]};
  font-weight: ${({ weight }) => weight || "400"};
  line-height: ${({ line }) => line || ""};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  transition: ${({ transition }) => transition || "all 1s"};
  &:hover {
    opacity: ${({ opacity }) => opacity || ""};
    color: ${({ hoverColor }) => hoverColor || ""};
  }
`;

const TextStyled = (props) => {
  return <StyledText {...props} />;
};

export default TextStyled;
