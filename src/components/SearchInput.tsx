import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup flex="1">
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          ref={ref}
          type="tel"
          placeholder="Search games..."
          borderRadius="30px"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
