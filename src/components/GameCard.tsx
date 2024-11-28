import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: Props) => {
  return (
    <Card>
      <Image
        src={game.background_image}
        borderRadius={10}
        overflow={"hidden"}
      ></Image>
      <CardBody>
        <Stack>
          <PlatformIconList
            platforms={game.parent_platforms.map((res) => res.platform)}
          ></PlatformIconList>
          <Heading fontSize="2xl">{game.name}</Heading>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
