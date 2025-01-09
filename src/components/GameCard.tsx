import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../hooks/useGames";
import croppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import GameScore from "./GameScore";
import PlatformIconList from "./PlatformIconList";

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
            <Link to={`/games/${game.slug}`}>
              <Heading fontSize={{ base: "md", md: "xl", lg: "2xl" }}>
                {game.name}
              </Heading>
            </Link>
            <GameScore score={game.metacritic}></GameScore>
          </HStack>
          <Emoji rating={game.rating_top}></Emoji>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
