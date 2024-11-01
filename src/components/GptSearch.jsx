import { LOGIN_BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <div className="absolute h-full w-full opacity-40 bg-black"></div>
        <img src={LOGIN_BG_IMG} alt="image" />
      </div>
      <GptSearchBar />
    </>
  );
};

export default GptSearch;
