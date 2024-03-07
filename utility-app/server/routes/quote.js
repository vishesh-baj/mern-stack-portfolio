import { Router } from "express";
import {
  addQuote,
  deleteQuote,
  getAllQuotes,
} from "../controllers/quoteController.js";
import { verifyToken } from "../middlewares/index.js";
const router = Router();

router.get("/get-all-quotes", verifyToken, getAllQuotes);
router.delete("/delete-quote/:id", verifyToken, deleteQuote);
router.post("/add-quote", verifyToken, addQuote);

export default router;
