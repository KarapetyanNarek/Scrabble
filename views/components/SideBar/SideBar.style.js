import styled, { css } from "styled-components";
import { bgColors } from "../../../styles/variables";

const StyledSideBar = styled.div`
  transition: all 0.2s ease-in-out;
  background-color: ${({ bgColor }) => bgColor || bgColors["700"]};
  overflow: scroll;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  ${({ open }) =>
    open &&
    css`
      width: ${({ width }) => width || "14.625rem"};
      min-width: ${({ width }) => width || "14.625rem"};
      padding: ${({ padding }) => padding || "1.375rem 0rem 1.375rem 0rem"};
    `}

  ${({ open }) =>
    !open &&
    css`
      width: ${({ width }) => width || "5rem"};
      min-width: ${({ width }) => width || "5rem"};
      padding: ${({ padding }) => padding || "1.375rem 0 1.375rem 0"};
    `}
`;

const SideBarStyled = (props) => {
  return <StyledSideBar {...props} />;
};

export default SideBarStyled;
