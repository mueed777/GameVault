import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  SimpleGrid,
} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { ERROR_FETCHING_DATA } from "../common/messages";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error ? (
        <Alert status="error">
          <AlertIcon></AlertIcon>
          <AlertTitle>{error}</AlertTitle>
          <AlertDescription>{ERROR_FETCHING_DATA}</AlertDescription>
        </Alert>
      ) : (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
          spacing={10}
          mx={5}
        >
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
