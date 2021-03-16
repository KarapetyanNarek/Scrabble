import React from "react";
import styled from "styled-components";
import { bgColors } from "../../../styles/variables";

const StyledSwitch = styled.div`
  width: 100%;
  height: 3rem;
  background-color: ${bgColors["800"]};
  border-radius: 0.75rem;
  padding: 0.25rem;
`;

const SwitchStyled = (props) => {
  return <StyledSwitch {...props} />;
};

export default SwitchStyled;
