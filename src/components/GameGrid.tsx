import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { ERROR_FETCHING_DATA } from "../common/messages";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const fetchedGameLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
        <InfiniteScroll
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<Spinner></Spinner>}
          dataLength={fetchedGameLength}
        >
          <SimpleGrid
            columns={{ base: 2, sm: 1, md: 3, lg: 3, xl: 4 }}
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
              : data?.pages.map((page, index) => (
                  <React.Fragment key={index}>
                    {page.results.map((game, index) => (
                      <GameCardContainer key={game.id}>
                        <GameCard game={game}></GameCard>
                      </GameCardContainer>
                    ))}
                  </React.Fragment>
                ))}
          </SimpleGrid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default GameGrid;
