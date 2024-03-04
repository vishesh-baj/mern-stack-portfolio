import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { handleColorClick } from "../utils";
import { MdEdit, MdEditOff, MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react";
const ColorPaletteMini = ({
  colorPaletteDetails,
  deleteHandler,
  editHandler,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(colorPaletteDetails);
  const { _id, title, colors } = editData;

  const handleChange = (title) => {
    setEditData((prevState) => {
      return { ...prevState, title };
    });
  };

  const handleSubmit = () => {
    setEditMode((prevState) => !prevState);
    editHandler(editData);
  };

  return (
    <div className="mt-4 bg-base-200 p-2 rounded-xl w-full">
      <div className="flex justify-between">
        <input
          onChange={(e) => handleChange(e.target.value)}
          disabled={!editMode}
          className=" bg-transparent"
          type="text"
          value={title}
          name=""
          id=""
        />
        <div className="flex gap-1">
          {editMode ? (
            <MdEditOff
              onClick={() => handleSubmit(editData)}
              className="text-2xl cursor-pointer text-teal-400 hover:text-teal-500"
            />
          ) : (
            <MdEdit
              onClick={() => setEditMode((prevState) => !prevState)}
              className="text-2xl cursor-pointer text-teal-400 hover:text-teal-500"
            />
          )}
          <MdOutlineDeleteOutline
            onClick={() => deleteHandler(_id)}
            className="text-2xl text-red-400 hover:text-red-500 cursor-pointer"
          />
        </div>
      </div>
      <div className="grid grid-cols-5 mt-4  ">
        {colors?.map((randomColor, idx) => {
          return (
            <div
              key={nanoid()}
              style={{ backgroundColor: randomColor }}
              className={`w-full cursor-pointer col-span-5 md:col-span-1 flex flex-col justify-end items-center h-10 md:h-52 ${
                idx === 0
                  ? " rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl"
                  : idx === 4
                  ? "rounded-bl-xl rounded-br-xl md:rounded-bl-none md:rounded-tr-xl"
                  : ""
              }`}
              onClick={() => handleColorClick(randomColor)}
            ></div>
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
  editHandler: PropTypes.func.isRequired,
};

export default ColorPaletteMini;
