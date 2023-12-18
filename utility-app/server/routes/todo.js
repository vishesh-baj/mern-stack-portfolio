import {
  createTodo,
  deleteTodoById,
  getAllTodos,
  getTodoById,
  updateTodo,
} from "../controllers/todoController.js";
import { Router } from "express";

const router = Router();

router.post("/create-todo", createTodo);
router.put("/update-todo/:id", updateTodo);
router.get("/get-todos", getAllTodos);
router.get("/get-todo-by-id/:id", getTodoById);
router.delete("/delete-todo/:id", deleteTodoById);

export default router;
