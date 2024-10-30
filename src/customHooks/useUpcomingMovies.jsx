import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addUpComingMovies } from "../utils/nowPlayingMoviesSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useUpcomingMovies;
