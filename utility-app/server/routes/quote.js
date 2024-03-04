import { Router } from "express";
import {
  addQuote,
  deleteQuote,
  getAllQuotes,
} from "../controllers/quoteController";
import { verifyToken } from "../middlewares";
const router = Router();

router.get("/get-all-quotes", verifyToken, getAllQuotes);
router.delete("/delete-quote", verifyToken, deleteQuote);
router.addQuote("/add-quote", verifyToken, addQuote);

export default router;
