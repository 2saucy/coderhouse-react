import { Star } from "lucide-react";
import PropTypes from "prop-types";

const RatingStars = ({ rate }) => {
  const maxRating = 5;

  return (
    <div className="flex">
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          color={rate >= index + 1 ? "#f8d80d" : "gray"}
          fill={rate >= index + 1 ? "#f8d80d" : "gray"}
        />
      ))}
    </div>
  );
};

RatingStars.propTypes = {
  rate: PropTypes.number,
};

export default RatingStars;
