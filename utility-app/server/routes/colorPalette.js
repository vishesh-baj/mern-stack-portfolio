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
router.put("/edit-palette/:id", editPalette);
router.delete("/delete-palette/:id", deletePalette);

export default router;
