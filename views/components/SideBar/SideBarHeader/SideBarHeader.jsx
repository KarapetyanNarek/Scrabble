import PropTypes from "prop-types";
import Avatar from "../../Avatar/Avatar";
import Logo from "../../../../public/assets/images/Logo.svg";
import TextStyled from "../../../../styles/Text.style";
import { useTranslation } from "react-i18next";
import LinkContain from "../../Link/Link";
import Flex from "../../../../styles/Flex.style";
import { textColors, bgColors } from "../../../../styles/variables";
import Badge from "../../Badge/Badge";

const SideBarHeader = ({ open, count }) => {
  const [t] = useTranslation();

  return (
    <Flex
      padding={open ? "0 0 1.375rem 0" : "0 1.375rem 1.375rem 1.375rem"}
      margin={open ? "0 1.5rem 0.5625rem 1.5rem" : "0 0 0.5625rem 0"}
      borderBottom={`1px solid ${bgColors["400"]}`}
      transition
    >
      <LinkContain href={"/"} field={<Avatar src={Logo} height="36" />} />
      {!open && count && (
        <div style={{ position: "absolute", top: "-20px", right: "2px" }}>
          <Badge count={count} />
        </div>
      )}
      <Flex
        margin="0 0 0 0.75rem"
        direction="column"
        hidden={!open}
        transition
        width="100%"
      >
        <LinkContain
          href={"/"}
          field={
            <Flex justify="space-between" width="100%">
              <TextStyled line="1.25rem" weight="600" opacity="0.7">
                Scrabble.com
              </TextStyled>
              {count && <Badge count={count} />}
            </Flex>
          }
        />
        <TextStyled color={textColors["500"]} size="0.75rem" line="1rem">
          {t("free.to.play")}
        </TextStyled>
      </Flex>
    </Flex>
  );
};

SideBarHeader.propTypes = {
  open: PropTypes.bool,
};

export default SideBarHeader;
