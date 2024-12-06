import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import useGames from "./hooks/useGames";

function HomePage() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const { data } = useGames(selectedGenre);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX="10px">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector></PlatformSelector>

        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
