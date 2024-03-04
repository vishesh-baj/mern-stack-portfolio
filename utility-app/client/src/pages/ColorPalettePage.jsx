import { useState } from "react";
import { generateRandomColors } from "../utils";
import ColorPalette from "../components/ColorPalette";
import { useMutation, useQuery } from "react-query";
import { API_INSTANCE } from "../api";
import { toast } from "react-hot-toast";
import { colorPaletteValidation } from "../validations";
import { Modal } from "../components/Modal";
import { colorPaletteModalMapping } from "../constants";
import { nanoid } from "nanoid";
import ColorPaletteMini from "../components/ColorPaletteMini";
import Loader from "../components/Loader";
import SectionLayout from "../layout/SectionLayout";
const ColorPalettePage = () => {
  const [randomColors, setRandomColors] = useState([]);
  const handleGenerateColors = () => {
    const randomColors = generateRandomColors();
    setRandomColors(randomColors);
  };

  const {
    data: colorPalettedData,
    refetch,
    isLoading,
  } = useQuery("color-palette", async () => {
    const response = await API_INSTANCE.get("palette/get-all-palettes");
    return response.data;
  });

  const addMutation = useMutation(
    (data) => API_INSTANCE.post("/palette/create-palette", data),
    {
      onSuccess: (data) => {
        console.log(data);
        toast.success("Palette added successfully");
        refetch();
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const deleteMutation = useMutation(
    (id) => API_INSTANCE.delete(`/palette/delete-palette/${id}`),
    {
      onSuccess: () => {
        toast.success("Palette Deleted Successfully");
        refetch();
      },
    }
  );

  const editMutation = useMutation(
    ({ id, data }) =>
      API_INSTANCE.put(
        `http://localhost:8080/palette/edit-palette/${id}`,
        data
      ),
    {
      onSuccess: () => {
        refetch();
        toast.success("Palette edited successfully");
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const handleModalFormSubmit = (data) => {
    console.log(data);
    document.getElementById("generatePaletteTitle").close();
    const payload = {
      title: data.title,
      colors: randomColors,
    };
    addMutation.mutate(payload);
  };

  const handleDeletePalette = (id) => {
    deleteMutation.mutate(id);
  };
  const handleEditPalette = (data) => {
    console.log(data);
    const payload = {
      title: data.title,
      colors: data.colors,
    };
    editMutation.mutate({ id: data._id, data: payload });
  };

  return (
    <SectionLayout sectionTitle="Color Palette">
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
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {colorPalettedData?.colorPalettes.map((colorPalette) => {
            return (
              <ColorPaletteMini
                editHandler={handleEditPalette}
                deleteHandler={handleDeletePalette}
                colorPaletteDetails={colorPalette}
                key={nanoid()}
              />
            );
          })}
        </div>
      )}
      <Modal
        inputs={colorPaletteModalMapping}
        onSubmit={handleModalFormSubmit}
        validationSchema={colorPaletteValidation}
        modalId="generatePaletteTitle"
      />
    </SectionLayout>
  );
};

export default ColorPalettePage;
