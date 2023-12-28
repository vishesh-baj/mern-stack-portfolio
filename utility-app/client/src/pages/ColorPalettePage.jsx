import { useState } from "react";
import { generateRandomColors } from "../utils";
import ColorPalette from "../components/ColorPalette";
import { useMutation } from "react-query";
import { API_INSTANCE } from "../api";
import { toast } from "react-hot-toast";

const ColorPalettePage = () => {
  const [randomColors, setRandomColors] = useState([]);
  const handleGenerateColors = () => {
    const randomColors = generateRandomColors();
    setRandomColors(randomColors);
  };

  const addMutation = useMutation(
    (data) => API_INSTANCE.post("/palette/create-palette", data),
    {
      onSuccess: (data) => {
        console.log(data);
        toast.success("Palette added successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <h1 className="text-2xl">Color Palette</h1>
      <ColorPalette randomColors={randomColors} />
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleGenerateColors}
          className="btn btn-primary btn-wide"
        >
          Generate Random Colors
        </button>
        <button className="btn">Save</button>
      </div>
    </div>
  );
};

export default ColorPalettePage;
