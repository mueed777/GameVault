import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkLightMode from "./DarkLightMode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Link href="/HomePage">
        <Image src={logo} boxSize="60px"></Image>
      </Link>
      <DarkLightMode></DarkLightMode>
    </HStack>
  );
};

export default NavBar;
