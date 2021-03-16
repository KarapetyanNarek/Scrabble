import { useContext } from "react";
import Switch from "../Switch/Switch";
import AuthButton from "./AuthButton/AuthButton";
import Collapse from "./Collapse/Collapse";
import NavLinks from "./NavLinks/NavLinks";
import SideBarStyled from "./SideBar.style";
import SideBarHeader from "./SideBarHeader/SideBarHeader";
import SideBarProfile from "./SideBarProfile/SideBarProfile";
import SideBarContext from "../../../context/SideBarContext";
import Flex from "../../../styles/Flex.style";
import { bgColors } from "../../../styles/variables";

const SideBar = () => {
  const { open, setOpen, theme, setTheme } = useContext(SideBarContext);

  return (
    <SideBarStyled open={open}>
      <SideBarHeader open={open} count={"2"} />
      <NavLinks open={open} />
      <Flex
        direction="column"
        margin={open ? "0 1.5rem" : "0"}
        padding={open ? "2rem 0" : "2rem 0.75rem"}
        borderTop={`1px solid ${bgColors["400"]}`}
        borderBottom={`1px solid ${bgColors["400"]}`}
        transition
      >
        <SideBarProfile open={open} />
        <AuthButton open={open} />
      </Flex>
      <Switch
        open={open}
        onChange={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      />
      <Collapse
        open={open}
        onChange={() => {
          setOpen(!open);
          // localStorage.setItem("scrabble-collapse", !open);
        }}
      />
    </SideBarStyled>
  );
};

export default SideBar;
