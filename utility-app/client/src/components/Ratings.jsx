import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value }) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(value);
  const hasHalfStar = value - filledStars >= 0.5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < filledStars) {
        stars.push(<FaStar key={i} />);
      } else if (hasHalfStar && i === filledStars) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaStar key={i} style={{ color: "yellow" }} />);
      }
    }
    return stars.reverse();
  };

  return <div className="flex gap-2 mt-4">{renderStars()}</div>;
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
