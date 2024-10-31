import Navbar from "../components/Navbar";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import AllMovies from "../components/AllMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "../components/GptSearch";

const Browse = () => {
  const gptFlagStore = useSelector((store) => store.gptFlag.gptFlag);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <Navbar />
      {gptFlagStore ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <AllMovies />
        </>
      )}
    </>
  );
};

export default Browse;
