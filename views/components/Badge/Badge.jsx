import Flex from "../../../styles/Flex.style";
import TextStyled from "../../../styles/Text.style";
import { bgColors } from "../../../styles/variables";

const Badge = ({ count }) => {
  return (
    <Flex
      align="center"
      justify="center"
      border={`1px solid ${bgColors["100"]}`}
      radius="4px"
      padding="2px"
      backgroundColor={bgColors["300"]}
      overflow="hidden"
    >
      <Flex
        backgroundColor="#BC2A2A"
        width="16px"
        height="16px"
        justify="center"
        align="center"
        radius="4px"
        overflow="hidden"
      >
        <TextStyled size="12px" weight="600" line="12px">
          {count}
        </TextStyled>
      </Flex>
    </Flex>
  );
};

export default Badge;
