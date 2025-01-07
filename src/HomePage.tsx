import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function HomePage() {
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
      <GridItem area="nav" paddingX="10px">
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" paddingX="10px">
          <GenreList></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <VStack align="start">
          <GameHeading></GameHeading>

          <HStack spacing={5}>
            <PlatformSelector></PlatformSelector>

            <SortSelector></SortSelector>
          </HStack>
        </VStack>

        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
