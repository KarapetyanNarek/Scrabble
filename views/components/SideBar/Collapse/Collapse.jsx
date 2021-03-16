import React from "react";
import PropTypes from "prop-types";
import Button from "../../../../styles/Button.style";
import Flex from "../../../../styles/Flex.style";
import TextStyled from "../../../../styles/Text.style";
import Icon from "../../IcoMoon/IcoMoon";
import { textColors } from "../../../../styles/variables";

const Collapse = ({ onChange, open }) => {
  return (
    <Flex margin={open ? "0 1.5rem" : "0 0 0 1.86rem"}>
      <Button padding="0" margin="1.25rem 0 0 0" onClick={onChange}>
        <Flex align="center" hoverColor={textColors["300"]}>
          <div>
            <TextStyled size="19.5px">
              <Icon icon={open ? "left-arrow" : "right-arrow"} />
            </TextStyled>
          </div>
          <div>
            <TextStyled
              transition="none"
              hidden={!open}
              margin="0 0 0 1rem"
              color={textColors["400"]}
              // line="1.25rem"
              padding="0 0 0.125rem 0"
            >
              Collapse
            </TextStyled>
          </div>
        </Flex>
      </Button>
    </Flex>
  );
};

Collapse.propTypes = {
  onChange: PropTypes.func,
  open: PropTypes.bool,
};

export default Collapse;
