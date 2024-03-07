import { Router } from "express";
import {
  createPalette,
  deletePalette,
  editPalette,
  getAllPalettes,
} from "../controllers/colorPaletteController.js";
import { verifyToken } from "../middlewares/index.js";
const router = Router();

router.get("/get-all-palettes", verifyToken, getAllPalettes);
router.post("/create-palette", verifyToken, createPalette);
router.put("/edit-palette/:id", verifyToken, editPalette);
router.delete("/delete-palette/:id", verifyToken, deletePalette);

export default router;
