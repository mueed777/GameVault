import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (isLoading) return null;
  if (error || !data) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data.results.map((res) => (
        <Image key={res.id} src={res.image} borderRadius={10}></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
