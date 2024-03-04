import PropTypes from "prop-types";
import CountBadge from "../components/CountBadge";

const HomePageCard = ({ cardTitle, cardColor, count }) => {
  return (
    <div
      className={`col-span-4 md:col-span-1 p-4 ${cardColor} rounded-xl  font-semibold`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-black">{cardTitle}</h2>
        <CountBadge countAmount={count} textColor={cardColor} />
      </div>
    </div>
  );
};

HomePageCard.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardColor: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default HomePageCard;
