import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { handleColorClick } from "../utils";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
const ColorPaletteMini = ({ colorPaletteDetails, deleteHandler }) => {
  const { _id, title, colors } = colorPaletteDetails;

  return (
    <div className="mt-4 bg-base-200 p-2 rounded-xl">
      <div className="flex justify-between ">
        <h1 className="text-md">{title}</h1>
        <div className="flex gap-4">
          <MdEdit className="text-2xl cursor-pointer text-teal-400 hover:text-teal-500" />
          <MdOutlineDeleteOutline
            onClick={() => deleteHandler(_id)}
            className="text-2xl text-red-400 hover:text-red-500 cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 mt-4 ">
        {colors?.map((randomColor, idx) => {
          return (
            <div
              key={nanoid()}
              style={{ backgroundColor: randomColor }}
              className={`w-full cursor-pointer col-span-4 md:col-span-1 flex flex-col justify-end items-center h-52 ${
                idx === 0 ? "rounded-l-xl" : idx === 4 ? "rounded-r-xl" : ""
              }`}
              onClick={() => handleColorClick(randomColor)}
            >
              {/* <p className="mb-4">{randomColor}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

ColorPaletteMini.propTypes = {
  colorPaletteDetails: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  deleteHandler: PropTypes.func.isRequired,
};

export default ColorPaletteMini;
