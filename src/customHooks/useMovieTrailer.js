import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/nowPlayingMoviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailer = useSelector(
    (store) => store.nowPlayingMovies.movieTrailer,
  );
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const singleTrailer = filterData?.length ? filterData[0] : json.results[0];

    dispatch(addMovieTrailer(singleTrailer));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
