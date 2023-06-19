// import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
  id: string;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");
export default useGenres;
