import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../../styles/Button.style";
import Flex from "../../../styles/Flex.style";
import TextStyled from "../../../styles/Text.style";
import { bgColors, textColors } from "../../../styles/variables";
import Icon from "../IcoMoon/IcoMoon";

const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: ${({ height }) => height || "100%"};
  height: ${({ height }) => height || "3rem"};
  margin-top: 2.5rem;
  border-radius: 0.75rem;
  background: ${({ background }) => background || bgColors["800"]};
  ${({ margin }) => margin || "0"}
`;

const CheckBoxWrapperLeftField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width || "93px"};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  z-index: 20;
  margin: ${({ margin }) => margin || "4px 4px 3px 4px"};
  overflow: hidden;
  ${(props) =>
    props.dark &&
    css`
      background: ${bgColors["500"]};
      border-radius: 0.5rem;
      border: 1px solid ${bgColors["200"]};
      transition: background 0.5s linear;
      &:hover {
        border: 1px solid ${textColors["700"]};
      }
    `};
`;

const CheckBoxWrapperFeild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ width }) => width || "93px"};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ margin }) => margin || "4px 4px 3px 4px"};
  background: ${bgColors["500"]};
  border-radius: 0.5rem;
  border: 1px solid ${bgColors["200"]};
  overflow: hidden;
  transition: all 0.5s linear;
  &:hover {
    border: 1px solid ${textColors["700"]};
  }
`;

const CheckBoxWrapperRightField = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: ${({ width }) => width || "93px"};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 3px 3px 3px;
  overflow: hidden;
  ${(props) =>
    props.light &&
    css`
      background: ${bgColors["500"]};
      border-radius: 0.5rem;
      border: 1px solid ${bgColors["200"]};
      transition: background 0.5s linear;
      &:hover {
        border: 1px solid ${textColors["700"]};
      }
    `}
`;

const Switch = ({
  leftTitle,
  rightTitle,
  leftIcon,
  rightIcon,
  open,
  onChange,
}) => {
  const [dark, setDark] = useState(true);

  return (
    <Flex margin={open ? "0 1.5rem" : "0"} transition>
      {open ? (
        <Button
          padding="0"
          onClick={() => {
            setDark((prev) => !prev);
            onChange();
          }}
        >
          <CheckBoxWrapper>
            <CheckBoxWrapperLeftField dark={dark}>
              <Flex align="center">
                <div>
                  <TextStyled color={textColors["500"]}>
                    <Icon icon={leftIcon} />
                  </TextStyled>
                </div>
                <div>
                  <TextStyled
                    color={textColors["500"]}
                    weight="600"
                    size="0.875rem"
                    line="1.25rem"
                    margin="0 0 0 0.375rem"
                  >
                    {leftTitle}
                  </TextStyled>
                </div>
              </Flex>
            </CheckBoxWrapperLeftField>
            <CheckBoxWrapperRightField light={!dark}>
              <Flex align="center">
                <div>
                  <TextStyled color={textColors["500"]}>
                    <Icon icon={rightIcon} />
                  </TextStyled>
                </div>
                <div>
                  <TextStyled
                    color={textColors["500"]}
                    weight="600"
                    size="0.875rem"
                    line="1.25rem"
                    margin="0 0 0 0.375rem"
                  >
                    {rightTitle}
                  </TextStyled>
                </div>
              </Flex>
            </CheckBoxWrapperRightField>
          </CheckBoxWrapper>
        </Button>
      ) : (
        <Button
          padding="0"
          onClick={() => {
            setDark((prev) => !prev);
            onChange();
          }}
          margin="0 1.25rem"
        >
          <CheckBoxWrapper background="transparent">
            <CheckBoxWrapperFeild width="40px" margin="4px 0px 3px 0px">
              <Flex align="center">
                <div>
                  <TextStyled color={textColors["500"]}>
                    <Icon icon={dark ? leftIcon : rightIcon} />
                  </TextStyled>
                </div>
              </Flex>
            </CheckBoxWrapperFeild>
          </CheckBoxWrapper>
        </Button>
      )}
    </Flex>
  );
};

Switch.defaultProps = {
  leftTitle: "Dark",
  rightTitle: "Light",
  leftIcon: "dark",
  rightIcon: "light",
};

export default Switch;
