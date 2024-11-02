import { useDispatch, useSelector } from "react-redux";
import langConstants from "../utils/langConstants";
import { useRef } from "react";
// import openAi from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesRes } from "../utils/gptSlice";
import { GEMINI_KEY } from "../utils/openaiKey";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.lang.lang);
  const searchText = useRef(null);

  const searchForMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearchMovie = async () => {
    try {
      //   const gptSearchedRes = await openAi.chat.completions.create({
      //     messages: [{ role: "user", content: gptQuery }],
      //     model: "gpt-3.5-turbo",
      //   });
      // gptSearchedRes.choices?.[0]?.message?.content?.split(","); // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
      const gptQuery = `Act as a Movie Recommendation system. Suggest exactly 5 movie names for the query: "${searchText.current.value}". Format the response as: "Movie1, Movie2, Movie3, Movie4, Movie5".`;
      const genAI = new GoogleGenerativeAI(GEMINI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const gptSearchedRes = await model.generateContent(gptQuery);

      const speratingMovies =
        gptSearchedRes?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.split(
          ",",
        ); // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
      // For each movie I will search TMDB API
      const promiseArray = speratingMovies?.map((movie) =>
        searchForMovies(movie),
      ); //returns a array of promise

      const tmdbRes = await Promise.all(promiseArray); // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan

      dispatch(
        addGptMoviesRes({ moviesName: speratingMovies, moviesRes: tmdbRes }),
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/2 pt-[15%] flex justify-between m-auto">
      <form
        className="w-full bg-black grid grid-cols-12 p-7"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="search"
          placeholder={langConstants[langKey].gptSearchPlaceholder}
          className="col-span-8 p-2 rounded mx-2 outline-none bg-gray-700 text-white"
        />
        <button
          className="bg-red-700 text-white col-span-3 py-2 rounded ml-2"
          onClick={handleSearchMovie}
        >
          {langConstants[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
