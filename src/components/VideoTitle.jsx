import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ movieTitle, movieDesc }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] px-[4rem] bg-gradient-to-r from-black text-white">
      <h1 className="text-4xl font-bold">{movieTitle}</h1>
      <p className="w-1/3 my-2">{movieDesc}</p>
      <div className="py-2 flex justify-start items-center">
        <button className="flex justify-center items-center bg-gray-400 text-black p-2 w-[5rem] rounded bg-white hover:bg-opacity-60">
          <FaPlay className="mx-1" /> Play
        </button>
        <button className="flex justify-center items-center bg-gray-400 text-white p-2 w-[8rem] rounded bg-opacity-80 mx-2 hover:bg-opacity-60">
          <IoMdInformationCircleOutline className="mx-1 text-2xl" /> More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
