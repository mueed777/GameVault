import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefinitionItem from "./DefinitionItem";
import GameScore from "./GameScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={3}>
      <DefinitionItem
        heading={"Platforms"}
        list={game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      ></DefinitionItem>

      <DefinitionItem
        heading={"Metascore"}
        list={game.metacritic ? <GameScore score={game.metacritic} /> : "--"}
      ></DefinitionItem>

      <DefinitionItem
        heading={"Genres"}
        list={game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      ></DefinitionItem>

      <DefinitionItem
        heading={"Publishers"}
        list={game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      ></DefinitionItem>

      <DefinitionItem
        heading={"Release Date"}
        list={game.released ? game.released : "--"}
      ></DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
