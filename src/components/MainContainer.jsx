import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.nowPlayingMovies?.nowPlayingMovies,
  );

  if (!movies) return;

  const singleMovie = movies[0];

  const { original_title, overview, id } = singleMovie;

  return (
    <>
      <VideoTitle movieTitle={original_title} movieDesc={overview} />
      <VideoBackground movieId={id} />
    </>
  );
};

export default MainContainer;
