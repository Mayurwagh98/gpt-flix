import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/nowPlayingMoviesSlice";
import { useDispatch } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const singleTrailer = filterData?.length ? filterData[0] : json.results[0];
    console.log(singleTrailer);

    dispatch(addMovieTrailer(singleTrailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/FKBN1qAzW3s?si=WbtQr6GR57TY9lgZ`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
