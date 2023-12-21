import { Router } from "express";
import {
  createNote,
  getAllNotes,
  deleteNoteById,
  updateNoteById,
} from "../controllers/noteController.js";
import { verifyToken } from "../middlewares/index.js";
const router = Router();

router.post("/create-note", verifyToken, createNote);
router.get("/get-all-notes", verifyToken, getAllNotes);
router.delete("/delete-note/:id", verifyToken, deleteNoteById);
router.put("/update-note/:id", verifyToken, updateNoteById);

export default router;
