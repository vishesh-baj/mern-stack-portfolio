import ColorPalette from "../schema/colorPalette.js";

export const createPalette = async (req, res) => {
  try {
    const newPalette = new ColorPalette({ ...req.body, user: req.user });
    if (!newPalette) {
      res.status(404).json({
        error: "Color Palette cannot be create due to insufficient information",
      });
    }
    const createPalette = await newPalette.save();
    res.status(201).json({
      palette: createPalette,
      message: "Palette ccreated successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllPalettes = async (req, res) => {
  try {
    const allPalletesBasedOnUser = await ColorPalette.find({ user: req.user });
    if (!allPalletesBasedOnUser) {
      res.status(404).json({ error: "Unable to fetch all palettes" });
    }
    res.status(200).json({ colorPalettes: allPalletesBasedOnUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePalette = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ error: "No id is provided to delete the palette" });
    }
    const deletedPalette = await ColorPalette.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Successfully deleted Palette", deletedPalette });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const editPalette = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      res
        .status(404)
        .json({ error: "No id is provided to update the palettes" });
    }
    const updatedPalette = await ColorPalette.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!updatedPalette) {
      res.status(400).json({ error: "Unable to update palette" });
    }
    res
      .status(201)
      .json({ message: "Palette updated successfully", updatedPalette });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
