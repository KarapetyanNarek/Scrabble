import PropTypes from "prop-types";
import Flex from "../../styles/Flex.style";
import SideBar from "../components/SideBar/SideBar";
import LayoutsContainer from "./Layouts.style";

const Layouts = ({ children }) => {
  return (
    <LayoutsContainer>
      <Flex height="100%">
        <SideBar />
        {children}
      </Flex>
    </LayoutsContainer>
  );
};

Layouts.proptypes = {
  children: PropTypes.node.isRequired,
};

export default Layouts;
