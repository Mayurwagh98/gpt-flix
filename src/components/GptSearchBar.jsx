import { useSelector } from "react-redux";
import langConstants from "../utils/langConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.lang.lang);
  return (
    <div className="w-1/2 pt-[15%] flex justify-between m-auto">
      <form className="w-full bg-black grid grid-cols-12 p-7">
        <input
          type="search"
          placeholder={langConstants[langKey].gptSearchPlaceholder}
          className="col-span-8 p-2 rounded mx-2 outline-none bg-gray-700 text-white"
        />
        <button className="bg-red-700 text-white col-span-3 py-2 rounded ml-2">
          {langConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
