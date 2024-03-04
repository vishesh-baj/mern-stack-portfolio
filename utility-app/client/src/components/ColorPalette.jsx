import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { handleColorClick } from "../utils";
const ColorPalette = ({ randomColors }) => {
  return (
    <>
      <div className="grid md:grid-cols-5 mt-4">
        {randomColors?.map((randomColor, idx) => {
          return (
            <div
              key={nanoid()}
              style={{ backgroundColor: randomColor }}
              className={`cursor-pointer col-span-4 md:col-span-1 flex flex-col justify-end items-center h-10 md:h-96 ${
                idx === 0
                  ? " rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl"
                  : idx === 4
                  ? "rounded-bl-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl"
                  : ""
              }`}
              onClick={() => handleColorClick(randomColor)}
            >
              <p className="mb-4">{randomColor}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

ColorPalette.propTypes = {
  randomColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  paletteTitle: PropTypes.string.isRequired,
};

export default ColorPalette;
