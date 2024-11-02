import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const AllMovies = () => {
  const movies = useSelector((store) => store.nowPlayingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-8 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
        <MoviesList title={"Up-Coming Movies"} movies={movies.upComingMovies} />
      </div>
    </div>
  );
};

export default AllMovies;
