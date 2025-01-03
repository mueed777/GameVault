import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameScore from "./GameScore";
import croppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const cardBackground = useColorModeValue("gray.100", "blackAlpha.600");
  return (
    <Card bg={cardBackground}>
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
          <Emoji rating={game.rating_top}></Emoji>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
