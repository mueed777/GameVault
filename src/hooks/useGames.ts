import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

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

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
        console.log(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) {
          return;
        }
        setError(error.message + "! ");
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
