import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.nowPlayingMovies?.nowPlayingMovies,
  );

  if (!movies) return;
  
  const singleMovie = movies[0];

  console.log(singleMovie);
  return (
    <>
      <VideoTitle movieTitle={singleMovie.original_title} />
      <VideoBackground />
    </>
  );
};

export default MainContainer;
