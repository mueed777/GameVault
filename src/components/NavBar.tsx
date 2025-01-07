import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameVaultLogo.png";
import DarkLightMode from "./DarkLightMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack my={2}>
      <Image
        src={logo}
        boxSize="50px"
        flexShrink={0}
        objectFit="cover"
        borderRadius="full"
        onClick={() => window.location.reload()}
        cursor="pointer"
      ></Image>
      <SearchInput></SearchInput>
      <DarkLightMode></DarkLightMode>
    </HStack>
  );
};

export default NavBar;
