// import { Image } from "react-bootstrap";
import AvatarStyled from "./Avatar.style";

const Avatar = (props) => {
  return (
    <AvatarStyled {...props}>
      <img {...props} />
    </AvatarStyled>
  );
};

export default Avatar;
