import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const Browse = () => {
  const user = useSelector((store) => store.user);
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  return (
    <>
      <Navbar />
      <h1>Welcome {user?.displayName}</h1>
    </>
  );
};

export default Browse;
