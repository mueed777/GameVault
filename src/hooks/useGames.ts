import useData from "./useData";
import { Genres } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformInfo }[];
  metacritic: number;
}

export interface PlatformInfo {
  id: number;
  name: string;
  slug: string;
}

const useGames = (selectedGenre: Genres | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
