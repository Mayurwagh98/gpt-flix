import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const movieTrailer = useSelector(
    (store) => store.nowPlayingMovies?.movieTrailer,
  );

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?si=WbtQr6GR57TY9lgZ&autoplay=1&mute=1&loop=1`}
      ></iframe>
    </div>
  );
};

export default VideoBackground;
