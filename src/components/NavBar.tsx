import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/GameVaultLogo.png";
import DarkLightMode from "./DarkLightMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack my={2}>
      <Link to="/">
        <Image
          src={logo}
          boxSize="50px"
          flexShrink={0}
          borderRadius={10}
          minW="50px"
          minH="50px"
        ></Image>
      </Link>
      <SearchInput></SearchInput>
      <DarkLightMode></DarkLightMode>
    </HStack>
  );
};

export default NavBar;
