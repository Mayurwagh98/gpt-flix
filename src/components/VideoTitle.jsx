import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IMG_CDN } from "../utils/constants";

const VideoTitle = ({ movieTitle, movieDesc, posterPath }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-screen aspect-video absolute pt-[10%] px-[3rem] bg-gradient-to-r from-zinc-950 text-white">
      <div
        className="w-1/3 cursor-pointer mt-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          className={`transition-all duration-700 ease-in-out hidden md:block ${
            hovered ? "w-[150px]" : "w-[200px]"
          }`}
          src={IMG_CDN + posterPath}
        />
        <h1 className="text-2xl md:text-4xl font-bold">{movieTitle}</h1>
        {hovered && <p className="w-full my-2 hidden md:block">{movieDesc}</p>}
        <div className="py-2 flex justify-start items-center">
          <button className="flex justify-center items-center text-black p-2 w-[5rem] rounded bg-white hover:bg-opacity-60">
            <FaPlay className="mx-1" /> Play
          </button>
          <button className=" bg-gray-400 text-white p-2 w-[8rem] rounded bg-opacity-80 mx-2 hover:bg-opacity-60 hidden md:flex">
            <IoMdInformationCircleOutline className="mx-1 text-2xl" /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoTitle;
