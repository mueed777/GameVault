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
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../HomePage";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error ? (
        // TODO: remove hard coded width
        <Alert status="error" width="65%">
          <AlertIcon></AlertIcon>
          <AlertTitle>{error.message}</AlertTitle>
          <AlertDescription>{ERROR_FETCHING_DATA}</AlertDescription>
        </Alert>
      ) : (
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 3, lg: 3, xl: 4 }}
          spacing={5}
          mx={5}
          my={5}
        >
          {isLoading
            ? skeleton.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton></GameCardSkeleton>
                </GameCardContainer>
              ))
            : data?.results.map((game, index) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} index={index}></GameCard>
                </GameCardContainer>
              ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
