import { Badge, Text } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 80 ? "yellow" : "red";

  return (
    <Text fontSize="xl" fontWeight="bold">
      <Badge
        fontSize={{ base: "0.6em", md: "0.7em", lg: "0.8em" }}
        colorScheme={color}
        borderRadius="4px"
      >
        {score}
      </Badge>
    </Text>
  );
};

export default GameScore;
