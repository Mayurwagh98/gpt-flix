import { LOGIN_BG_IMG } from "../utils/constants";
import GptMoviesSuggesstions from "./GptMoviesSuggesstions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <div className="absolute h-full w-full opacity-40 bg-black"></div>
        <img
          src={LOGIN_BG_IMG}
          alt="image"
          className="h-screen object-cover md:h-screen w-screen"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggesstions />
    </>
  );
};

export default GptSearch;
