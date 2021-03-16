import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Flex from "../../../../styles/Flex.style";
import TextStyled from "../../../../styles/Text.style";
import Icon from "../../IcoMoon/IcoMoon";
import LinkContain from "../../Link/Link";
import { LinksArray } from "./LinksArray";
import { bgColors } from "../../../../styles/variables";

const NavLinks = ({ open }) => {
  const [t] = useTranslation();
  return (
    <Flex direction="column" margin="0 0 1rem 0">
      {LinksArray.map(
        ({
          id,
          href,
          iconColor,
          iconSize,
          textColor,
          icon,
          textSize,
          line,
          text,
        }) => {
          return (
            <div key={id}>
              <LinkContain
                margin="0.5rem 0 0 0"
                padding={open ? "0 1.5rem" : "0 1.75rem"}
                height={"3.5rem"}
                hover={bgColors["300"]}
                transition
                href={href}
                activeClassName={"active"}
                field={
                  <Flex align="center">
                    <Flex
                      width="1.625rem"
                      height="1.625rem"
                      align="center"
                      justify="center"
                      margin={open ? "0 0.75rem 0 0" : "0"}
                    >
                      <div>
                        <TextStyled color={iconColor} size={iconSize}>
                          <Icon icon={icon} />
                        </TextStyled>
                      </div>
                    </Flex>
                    <Flex hidden={!open} transition>
                      <TextStyled color={textColor} size={textSize} line={line}>
                        {t(text)}
                      </TextStyled>
                    </Flex>
                  </Flex>
                }
              />
            </div>
          );
        }
      )}
    </Flex>
  );
};

NavLinks.propTypes = {
  open: PropTypes.bool,
  href: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.string,
  textSize: PropTypes.string,
  line: PropTypes.string,
  text: PropTypes.string,
};

export default NavLinks;
