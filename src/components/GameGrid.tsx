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
import { Genres } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genres | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {error ? (
        // TODO: remove hard coded width
        <Alert status="error" width="65%">
          <AlertIcon></AlertIcon>
          <AlertTitle>{error}</AlertTitle>
          <AlertDescription>{ERROR_FETCHING_DATA}</AlertDescription>
        </Alert>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={5} mx={5}>
          {isLoading &&
            skeleton.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton></GameCardSkeleton>
              </GameCardContainer>
            ))}
          {data.map((game, index) => (
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
