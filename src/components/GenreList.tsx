import {
  Alert,
  AlertIcon,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import croppedImageUrl from "../services/image-url";
import GenresSkeleton from "./GenresSkeleton";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genreListSkeleton = 15;
  const fontColor = useColorModeValue("black", "white");

  return (
    <>
      {error ? (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      ) : (
        <List>
          {isLoading &&
            Array.from({ length: genreListSkeleton }).map((_, index) => (
              <GenresSkeleton key={index} />
            ))}
          {data.map((genre) => (
            <HStack key={genre.id}>
              <ListItem paddingY="5px">
                <HStack>
                  <Image
                    src={croppedImageUrl(genre.image_background)}
                    boxSize="32px"
                    borderRadius={8}
                  ></Image>
                  <Button
                    fontSize="lg"
                    variant="link"
                    onClick={() => onSelectGenre(genre)}
                    color={fontColor}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            </HStack>
          ))}
        </List>
      )}
    </>
  );
};

export default GenreList;
