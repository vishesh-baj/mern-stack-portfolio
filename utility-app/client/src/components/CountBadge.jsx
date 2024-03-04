import PropTypes from "prop-types";

const CountBadge = ({ countAmount, textColor }) => {
  const color = `text-${textColor.split("-")[1]}`;
  return (
    <div
      className={`bg-black  w-8 h-8 flex justify-center items-center rounded-lg`}
    >
      <span className={color}>{countAmount}</span>
    </div>
  );
};

CountBadge.propTypes = {
  countAmount: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  textColor: PropTypes.string.isRequired,
};

export default CountBadge;
