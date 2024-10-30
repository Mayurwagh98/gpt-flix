import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import AllMovies from "../components/AllMovies";

const Browse = () => {
  const user = useSelector((store) => store.user);

  useNowPlayingMovies();

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
