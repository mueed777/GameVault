import { HStack, Image, Link } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkLightMode from "./DarkLightMode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void; // will come back to this later to avoid duplication
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Link href="/HomePage">
        <Image src={logo} boxSize="60px" flexShrink={0}></Image>
      </Link>
      <SearchInput onSearch={onSearch}></SearchInput>
      <DarkLightMode></DarkLightMode>
    </HStack>
  );
};

export default NavBar;
