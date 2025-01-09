import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading: string;
  list: ReactNode[] | ReactNode;
}

const DefinitionItem = ({ heading, list }: Props) => {
  return (
    <>
      <Box my={5}>
        <Heading as="dt" fontSize="md" color="gray.600">
          {heading}
        </Heading>
        <dd>{list}</dd>
      </Box>
    </>
  );
};

export default DefinitionItem;
