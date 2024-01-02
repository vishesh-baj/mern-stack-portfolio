import {
  createPomodoro,
  deletePomodoro,
  getAllPomodoros,
  updatePomodoro,
} from "../controllers/pomodoroController.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/index.js";
const router = Router();

router.get("/get-all-pomodoros", verifyToken, getAllPomodoros);
router.post("/create-pomodoro", verifyToken, createPomodoro);
router.delete("/delete-pomodoro/:id", verifyToken, deletePomodoro);
router.put("/update-pomodoro/:id", verifyToken, updatePomodoro);

export default router;
