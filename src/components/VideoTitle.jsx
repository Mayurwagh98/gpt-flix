const VideoTitle = ({ movieTitle, movieDesc }) => {
  return (
    <div className="py-[10rem] px-20 ">
      <h1 className="text-3xl font-bold">{movieTitle}</h1>
      <p className="w-1/3 my-2">{movieDesc}</p>
      <div className="py-2">
        <button className="bg-gray-400 text-white p-2 w-20 rounded opacity-80">
          Play
        </button>
        <button className="bg-gray-400 text-white p-2 w-28 rounded opacity-80 mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
