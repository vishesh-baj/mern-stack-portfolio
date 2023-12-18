import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controllers/todoController.js";
import { Router } from "express";
import { verifyToken } from "../middlewares/index.js";
const router = Router();

router.post("/create-todo", verifyToken, createTodo);
router.put("/update-todo/:id", verifyToken, updateTodo);
router.get("/get-todos", verifyToken, getAllTodos);
router.get("/get-todo-by-id/:id", verifyToken, getTodoById);
router.delete("/delete-todo/:id", verifyToken, deleteTodoById);

export default router;
