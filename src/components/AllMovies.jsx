import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const AllMovies = () => {
  const movies = useSelector(
    (store) => store.nowPlayingMovies?.nowPlayingMovies,
  );
  return (
    <div className="bg-black">
      <div className="relative z-2 -mt-36 pl-4">
        <MoviesList title={"Now Playing"} movies={movies} />
        <MoviesList title={"Trending"} movies={movies} />
        <MoviesList title={"Now Tranding"} movies={movies} />
      </div>
    </div>
  );
};

export default AllMovies;
