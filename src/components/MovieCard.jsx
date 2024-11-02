import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    posterPath && (
      <div className="w-40 pr-4">
        <img src={IMG_CDN + posterPath} alt="poster" />
      </div>
    )
  );
};

export default MovieCard;
