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
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
          {isLoading &&
            skeleton.map((skeleton) => (
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            ))}
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index}></GameCard>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
