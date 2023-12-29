import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
const ColorPalette = ({ randomColors }) => {
  const handleColorClick = (colorCode) => {
    // Create a temporary input element
    const tempInput = document.createElement("input");
    // Set its value to the color code
    tempInput.value = colorCode;
    // Append the input element to the document
    document.body.appendChild(tempInput);
    // Select the input's content
    tempInput.select();
    // Execute the copy command
    document.execCommand("copy");
    // Remove the input element
    document.body.removeChild(tempInput);

    // Optionally, you can provide some feedback to the user
    toast.success(`Color code ${colorCode} copied to clipboard!`);
  };

  return (
    <div className="grid grid-cols-5 mt-4">
      {randomColors?.map((randomColor, idx) => {
        return (
          <div
            key={nanoid()}
            style={{ backgroundColor: randomColor }}
            className={`cursor-pointer col-span-4 md:col-span-1 flex flex-col justify-end items-center h-96 ${
              idx === 0 ? "rounded-l-xl" : idx === 4 ? "rounded-r-xl" : ""
            }`}
            onClick={() => handleColorClick(randomColor)}
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
