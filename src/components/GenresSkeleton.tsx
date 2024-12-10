import { HStack, Skeleton } from "@chakra-ui/react";

const GenresSkeleton = () => {
  return (
    <HStack spacing={4} align="center" paddingY="5px">
      <Skeleton boxSize="32px" borderRadius={8} />
      <Skeleton height="10px" width="100px" />
    </HStack>
  );
};

export default GenresSkeleton;
