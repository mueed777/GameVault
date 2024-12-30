import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/GameVaultLogo.png";
import DarkLightMode from "./DarkLightMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void; // will come back to this later to avoid duplication
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image
        src={logo}
        boxSize="50px"
        flexShrink={0}
        objectFit="cover"
        borderRadius="full"
        onClick={() => window.location.reload()}
        cursor="pointer"
      ></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <DarkLightMode></DarkLightMode>
    </HStack>
  );
};

export default NavBar;
