import { useState } from "react";
import { generateRandomColors } from "../utils";
import ColorPalette from "../components/ColorPalette";
import { useMutation } from "react-query";
import { API_INSTANCE } from "../api";
import { toast } from "react-hot-toast";
import { colorPaletteValidation } from "../validations";
import { Modal } from "../components/Modal";
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

  const inputs = [
    {
      name: "title",
      label: "Enter Title",
      type: "text",
      placeholder: "Title for the palette",
    },
  ];

  const handleModalFormSubmit = (data) => {
    console.log(data);
    document.getElementById("generatePaletteTitle").close();
    const payload = {
      title: data.title,
      colors: randomColors,
    };
    addMutation.mutate(payload);
  };

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
        <button
          onClick={() =>
            document.getElementById("generatePaletteTitle").showModal()
          }
          className="btn"
        >
          Save
        </button>
      </div>
      <Modal
        inputs={inputs}
        onSubmit={handleModalFormSubmit}
        validationSchema={colorPaletteValidation}
        modalId="generatePaletteTitle"
      />
    </div>
  );
};

export default ColorPalettePage;
