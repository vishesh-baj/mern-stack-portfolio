import mongoose from "mongoose";

const colorPaletteSchema = mongoose.Schema({
  title: { type: String, required: true },
  colors: [{ type: String, required: true }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

const ColorPaletteModal = mongoose.model("colorPalette", colorPaletteSchema);
export default ColorPaletteModal;
