import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";

const Browse = () => {
  const user = useSelector((store) => store.user);
  useNowPlayingMovies();
  return (
    <>
      <Navbar />
      <h1>Welcome {user?.displayName}</h1>
    </>
  );
};

export default Browse;
