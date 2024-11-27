import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkLightMode from "./DarkLightMode";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize="60px"></Image>
      <DarkLightMode></DarkLightMode>
    </HStack>
  );
};

export default NavBar;
