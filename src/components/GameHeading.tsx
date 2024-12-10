import { Text } from "@chakra-ui/react";
import { GameQuery } from "../HomePage";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Text ml={5} fontSize="6xl" fontWeight="bold">
      {heading}
    </Text>
  );
};

export default GameHeading;
