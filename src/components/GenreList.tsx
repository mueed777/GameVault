import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";
import GenresSkeleton from "./GenresSkeleton";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  const genreListSkeleton = 15;

  return (
    // TODO: handle error case scenario here
    <List>
      {isLoading &&
        Array.from({ length: genreListSkeleton }).map((_, index) => (
          <GenresSkeleton key={index} />
        ))}
      {data.map((genre) => (
        <HStack>
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={croppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        </HStack>
      ))}
    </List>
  );
};

export default GenreList;
