import Todo from "../schema/todo.js";
import Note from "../schema/notes.js";
import ColorPalette from "../schema/colorPalette.js";

export const getCountOfEntries = async (req, res) => {
  try {
    const todoCount = await Todo.countDocuments();
    const noteCount = await Note.countDocuments();
    const colorPaletteCount = await ColorPalette.countDocuments();

    const countsArray = [todoCount, noteCount, colorPaletteCount];

    res.json({ counts: countsArray });
  } catch (error) {
    console.error("Error getting counts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
