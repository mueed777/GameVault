import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import croppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: Props) => {
  return (
    <Card>
      <Image src={croppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Stack>
          <PlatformIconList
            platforms={game.parent_platforms.map((res) => res.platform)}
          ></PlatformIconList>
          <HStack justify={"space-between"}>
            <Heading fontSize="2xl">{game.name}</Heading>
            <GameScore score={game.metacritic}></GameScore>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
