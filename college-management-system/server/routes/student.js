import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../controllers/student.js";
import { verifyToken } from "../middlewares/auth.js";
const router = Router();

router.get("/get-all-students", verifyToken, getAllStudents);
router.post("/create-student", verifyToken, createStudent);
router.put("/update-student/:id", verifyToken, updateStudent);
router.delete("/delete-student/:id", verifyToken, deleteStudent);
export default router;
