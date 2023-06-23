// import genres from "../data/genres";
// import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
// import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: string;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ["genres"],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000,
  // initialData:{count:genres.length,results:genres}
});
export default useGenres;
