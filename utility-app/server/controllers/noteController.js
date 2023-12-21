import Note from "../schema/notes.js";

export const createNote = async (req, res) => {
  console.log("USER ID: ", req.user);
  try {
    const newNote = new Note({ ...req.body, user: req.user });
    if (!newNote) {
      res.status(404).json({
        error: "Note cannot be created due to insufficient information",
      });
    }
    const createdNote = await newNote.save();
    res.status(201).json({ createdNote });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllNotes = async (req, res) => {
  try {
    const AllNotesBasedOnUser = await Note.find({ user: req.user });
    if (!AllNotesBasedOnUser) {
      res.status(404).json({ error: "Unable to fetch all notes" });
    }
    res.status(200).json({ notes: AllNotesBasedOnUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteNoteById = async (req, res) => {
  const noteId = req.params.id;
  try {
    if (!noteId) {
      res.status(404).json({ error: "Unable to find the parameter to delete" });
    }
    const deletedNote = await Note.findByIdAndDelete(noteId);
    res.status(200).json({ message: "Note deleted successfully", deletedNote });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateNoteById = async (req, res) => {
  try {
    if (!req.params.id) {
      res.status(404).json({ error: "No id provided to update the note" });
    }
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body);
    if (!updateNoteById) {
      res.status(400).json({ error: "Unable to update a note" });
    }
    res.status(201).json({ message: "Note updated Successfully", updatedNote });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
