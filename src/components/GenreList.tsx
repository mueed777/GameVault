import {
  Alert,
  AlertIcon,
  Button,
  Heading,
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
          {error.message}
        </Alert>
      ) : (
        <>
          <Heading fontSize="2xl" my={3} mt={5}>
            Genres
          </Heading>
          <List>
            {isLoading &&
              Array.from({ length: genreListSkeleton }).map((_, index) => (
                <GenresSkeleton key={index} />
              ))}
            {data?.results.map((genre) => (
              <HStack key={genre.id}>
                <ListItem paddingY="5px">
                  <HStack
                    cursor="pointer"
                    _hover={{
                      fontWeight: "bold",
                      fontSize: "2xl",
                      transform: "scale(1.1)",
                    }}
                    onClick={() => onSelectGenre(genre)}
                  >
                    <Image
                      objectFit="cover"
                      src={croppedImageUrl(genre.image_background)}
                      boxSize="32px"
                      borderRadius={8}
                    />
                    <Button
                      whiteSpace="normal"
                      textAlign="start"
                      fontSize="inherit"
                      fontWeight="inherit"
                      variant="link"
                      color={fontColor}
                      style={{ textDecoration: "none" }}
                    >
                      {genre.name}
                    </Button>
                  </HStack>
                </ListItem>
              </HStack>
            ))}
          </List>
        </>
      )}
    </>
  );
};

export default GenreList;
