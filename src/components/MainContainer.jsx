import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.nowPlayingMovies?.nowPlayingMovies,
  );

  if (!movies) return;

  const singleMovie = movies[0];

  const { original_title, overview, id, poster_path } = singleMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle
        movieTitle={original_title}
        movieDesc={overview}
        posterPath={poster_path}
      />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
