import { Router } from "express";
import { getCountOfEntries } from "../controllers/countController.js";
const router = Router();

router.get("/get-counts", getCountOfEntries);

export default router;
