import { Router } from "express";
import {
  addBook,
  deleteBook,
  getAllBooks,
} from "../controllers/bookController.js";
const router = Router();
import { verifyToken } from "../middlewares/index.js";

router.get("/get-all-books", verifyToken, getAllBooks);
router.post("/add-book", verifyToken, addBook);
router.delete("/delete-book/:id", verifyToken, deleteBook);

export default router;
