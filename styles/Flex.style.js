import React from "react";
import styled, { css } from "styled-components";
import { bgColors, mintColors } from "../styles/variables";

const StyledFlex = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "stretch"};
  justify-content: ${({ justify }) => justify || "stretch"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  border: ${({ border }) => border || ""};
  border-top: ${({ borderTop }) => borderTop || ""};
  border-left: ${({ borderLeft }) => borderLeft || ""};
  border-right: ${({ borderRight }) => borderRight || ""};
  border-bottom: ${({ borderBottom }) => borderBottom || ""};
  border-radius: ${({ radius }) => radius || ""};
  overflow: ${({ overflow }) => overflow || ""};
  &:hover {
    background-color: ${({ hoverBgColor }) => hoverBgColor || ""};
  }
  ${({ hidden }) =>
    hidden &&
    css`
      width: 0;
      overflow: hidden;
    `}
  ${({ transition }) =>
    transition &&
    css`
      transition: all 0.2s ease-in-out;
    `}
    ${({ hover }) =>
    hover &&
    css`
      &:hover {
        background-color: ${hover};
      }
    `}
    ${({ hoverColor }) =>
    hoverColor &&
    css`
      &:hover span {
        color: ${hoverColor};
      }
      &:hover i::before {
        color: ${hoverColor};
      }
    `}
    .active {
    & > div {
      background-color: ${bgColors["300"]};
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background-color: ${mintColors["500"]};
      }
    }
  }
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
