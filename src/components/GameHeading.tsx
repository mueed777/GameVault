import { Text } from "@chakra-ui/react";
import { GameQuery } from "../HomePage";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Text ml={5} fontSize="6xl" fontWeight="bold">
      {heading}
    </Text>
  );
};

export default GameHeading;
