import Link from "next/link";
import ActiveLink from "./ActiveLink";
import PropTypes from "prop-types";
import Flex from "../../../styles/Flex.style";

const LinkContain = (props) => {
  return (
    <ActiveLink {...props}>
      <a>
        <Flex {...props}>{props.field}</Flex>
      </a>
    </ActiveLink>
  );
};

export default LinkContain;
