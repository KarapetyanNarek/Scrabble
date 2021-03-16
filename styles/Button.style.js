import React from "react";
import styled, { css } from "styled-components";
import { mintColors, textColors, bgColors } from "./variables";

const StyledButton = styled.button`
  border: none;
  padding: ${(props) => props.padding || "10px 15px"};
  height: ${(props) => props.height || ""};
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  margin: ${(props) => props.margin || 0};
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.transition &&
    css`
      transition: all ${props.transition};
    `}
  ${(props) =>
    props.primary &&
    css`
      color: ${(props) => props.color || "white"};
      background-color: ${(props) => props.background || mintColors["500"]};
      border-radius: ${(props) => props.radius || "0.5rem"};
      font-size: ${(props) => props.size || "0.6875rem"};
      line-height: ${(props) => props.line || "1.25rem"};
      font-weight: ${(props) => props.weight || "700"};
      transition: all 0.2s;
      &:hover {
        background-color: ${(props) =>
          props.hoverbackground || mintColors["800"]};
      }
    `}
  ${(props) =>
    props.outlined &&
    css`
      color: ${(props) => props.color || textColors["300"]};
      border-radius: ${(props) => props.radius || "0.5rem"};
      border: 1px solid ${(props) => props.color || bgColors["300"]};
      background: transparent;
      font-size: ${(props) => props.size || "0.6875rem"};
      /* line-height: ${(props) => props.line || "1.25rem"}; */
      font-weight: ${(props) => props.weight || "700"};
      overflow: hidden;
      transition: all 0.2s;
      &:hover {
        border: 1px solid ${(props) => props.color || textColors["700"]};
      }
    `}
    ${(props) =>
    props.ripple &&
    css`
      position: relative;
      overflow: hidden;
      transform: translate3d(0, 0, 0);

      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #000 10%, transparent 13%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(8, 8);
        opacity: 0;
        transition: transform 0.5s, opacity 1s;
      }
      &:active:after {
        transform: scale(0, 0);
        opacity: 0.2;
        transition: 0s;
      }
    `}
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
