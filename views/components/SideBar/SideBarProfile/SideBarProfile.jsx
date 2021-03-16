import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Flex from "../../../../styles/Flex.style";
import Avatar from "../../Avatar/Avatar";
import DefaultAvatar from "../../../../public/assets/images/avatar.svg";
import { bgColors, textColors } from "../../../../styles/variables";
import TextStyled from "../../../../styles/Text.style";
import Icon from "../../IcoMoon/IcoMoon";
import Button from "../../../../styles/Button.style";

const SideBarProfile = ({ imageSrc, userName, userGameScore, open }) => {
  const [t] = useTranslation();

  return (
    <Button padding={open ? "0 0 0 0" : "0 0 0 0.52rem"} transition="0.3s">
      <Flex
        padding="0 0 1rem 0"
        align="center"
        transition
        justify={open ? "space-between" : ""}
      >
        <Flex justify={"center"}>
          <Avatar
            src={imageSrc}
            height="40px"
            radius="50%"
            bgcolor={textColors["200"]}
          />
          {open && (
            <Flex direction="column" margin="0 0 0 0.75rem" align="start">
              <div>
                <TextStyled
                  weight="600"
                  size="0.875rem"
                  line="1.25rem"
                  color={textColors["200"]}
                >
                  {t("player.profile")}
                </TextStyled>
              </div>
              <div>
                <TextStyled
                  size="0.75rem"
                  line="1rem"
                  color={textColors["600"]}
                >
                  {`${userName} `}
                </TextStyled>
                <TextStyled
                  size="0.75rem"
                  line="1rem"
                  color={textColors["600"]}
                >
                  {`${t("score")}:`}
                </TextStyled>
                <TextStyled
                  size="0.75rem"
                  line="1rem"
                  color={textColors["200"]}
                >
                  {` ${userGameScore}`}
                </TextStyled>
              </div>
            </Flex>
          )}
        </Flex>
        {open && (
          <Flex>
            <TextStyled size="0.75rem" color={textColors["600"]}>
              <Icon icon="right" />
            </TextStyled>
          </Flex>
        )}
      </Flex>
    </Button>
  );
};

SideBarProfile.defaultProps = {
  imageSrc: DefaultAvatar,
  userName: "Guest",
  userGameScore: "0",
};

SideBarProfile.propTypes = {
  imageSrc: PropTypes.string,
  userName: PropTypes.string,
  userGameScore: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SideBarProfile;
