import Button from "../../../../styles/Button.style";
import PropTypes from "prop-types";
import Flex from "../../../../styles/Flex.style";
import { bgColors } from "../../../../styles/variables";

const AuthButton = ({ open }) => {
  return (
    <Flex
      direction="column"
      // padding={open ? "0" : "0 0.75rem"}
      // margin={open ? "0 1.5rem" : "0"}
      transition
    >
      <div>
        <Button outlined ripple padding={open ? "" : "0"} height={"2.5rem"}>
          Login
        </Button>
      </div>
      <div>
        <Button
          ripple
          primary
          margin="1.25rem 0 0 0"
          padding={open ? "" : "0"}
          height={"2.5rem"}
        >
          Signup
        </Button>
      </div>
    </Flex>
  );
};

AuthButton.propTypes = {
  open: PropTypes.bool,
};

export default AuthButton;
