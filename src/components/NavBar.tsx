import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkLightMode from "./DarkLightMode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack width="100%">
      <Link href="/HomePage">
        <Image src={logo} boxSize="60px" flexShrink={0}></Image>
      </Link>
      <SearchInput></SearchInput>
      <DarkLightMode></DarkLightMode>
    </HStack>
  );
};

export default NavBar;
