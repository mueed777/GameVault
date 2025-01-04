import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genres>("/genres");

const useGenres = () =>
  useQuery<FetchResponse<Genres>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24 hours
  });
export default useGenres;
