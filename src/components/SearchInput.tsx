import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <InputGroup flex="1" mx={5}>
      <InputLeftElement pointerEvents="none">
        <Search2Icon color="gray.300" />
      </InputLeftElement>
      <Input
        type="tel"
        placeholder="Search games..."
        borderRadius="30px"
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
