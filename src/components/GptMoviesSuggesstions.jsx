import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMoviesSuggesstions = () => {
  const { gptMoviesResult, gptMoviesNames } = useSelector((store) => store.gptFlag);
  if (!gptMoviesNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {gptMoviesNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={gptMoviesResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMoviesSuggesstions;
