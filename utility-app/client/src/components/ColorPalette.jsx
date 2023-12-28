import { nanoid } from "nanoid";
import PropTypes from "prop-types";
const ColorPalette = ({ randomColors }) => {
  return (
    <div className="grid grid-cols-5 mt-4">
      {randomColors?.map((randomColor, idx) => {
        return (
          <div
            key={nanoid()}
            style={{ backgroundColor: randomColor }}
            className={`cursor-pointer col-span-4 md:col-span-1 flex flex-col justify-end items-center  h-96 ${
              idx === 0 ? "rounded-l-xl" : idx === 4 ? "rounded-r-xl" : ""
            }`}
          >
            <p className="mb-4">{randomColor}</p>
          </div>
        );
      })}
    </div>
  );
};

ColorPalette.propTypes = {
  randomColors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ColorPalette;
