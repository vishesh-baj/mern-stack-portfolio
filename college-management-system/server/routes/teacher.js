import { Router } from "express";
import {
  createTeacher,
  deleteTeacher,
  getAllTeachers,
  updateTeacher,
} from "../controllers/teacher";

const router = Router();

router.get("/get-all-teachers", getAllTeachers);
router.post("/create-teacher", createTeacher);
router.put("/update-teacher/:id", updateTeacher);
router.delete("/delete-teacher/:id", deleteTeacher);

export default router;
