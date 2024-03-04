import { Router } from "express";
import { getCountOfEntries } from "../controllers/countController.js";
import { verifyToken } from "../middlewares/index.js";
const router = Router();

router.get("/get-counts", verifyToken, getCountOfEntries);

export default router;
