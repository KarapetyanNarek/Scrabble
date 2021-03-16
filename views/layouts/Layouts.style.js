import React from "react";
import styled from "styled-components";

const StyledLayouts = styled.div`
  height: ${({ height }) => height || "100vh"};
  position: relative;
`;

const LayoutsContainer = (props) => {
  return <StyledLayouts {...props} />;
};

export default LayoutsContainer;
