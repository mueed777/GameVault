import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup flex="1">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          type="text"
          placeholder="Search games..."
          borderRadius="30px"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
