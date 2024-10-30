import Navbar from "../components/Navbar";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import AllMovies from "../components/AllMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies()
  return (
    <>
      <Navbar />
      {/* <h1>Welcome {user?.displayName}</h1> */}
      <MainContainer />
      <AllMovies />
    </>
  );
};

export default Browse;
