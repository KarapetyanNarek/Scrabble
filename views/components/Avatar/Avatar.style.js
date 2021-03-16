import React from "react";
import styled from "styled-components";

const StyledAvatar = styled.div`
  display: block;
  object-fit: contain;
  overflow: hidden;
  height: ${({ height }) => height || ""};
  min-height: ${({ height }) => height || ""};
  min-width: ${({ height }) => height || ""};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  border: ${({ border }) => border || ""};
  border-radius: ${({ radius }) => radius || ""};
  background-color: ${({ bgcolor }) => bgcolor || ""};
`;

const AvatarStyled = (props) => {
  return <StyledAvatar {...props} />;
};

export default AvatarStyled;
