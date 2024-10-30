import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ movieTitle, movieDesc }) => {
  return (
    <div className="py-[10rem] px-20 ">
      <h1 className="text-4xl font-bold">{movieTitle}</h1>
      <p className="w-1/3 my-2">{movieDesc}</p>
      <div className="py-2 flex justify-start items-center">
        <button className="flex justify-center items-center bg-gray-400 text-white p-2 w-[5rem] rounded opacity-80">
          <FaPlay className="mx-1" /> Play
        </button>
        <button className="flex justify-center items-center bg-gray-400 text-white p-2 w-[8rem] rounded opacity-80 mx-2">
          <IoMdInformationCircleOutline className="mx-1 text-2xl" /> More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
