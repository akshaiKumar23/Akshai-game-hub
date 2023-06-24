
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Genre>('/genres');
export interface Genre {
  id: string;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000,
  // initialData:{count:genres.length,results:genres}
});
export default useGenres;
