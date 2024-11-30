import useData from "./useData";

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

const useGames = () => useData<Game>("/games");

export default useGames;
