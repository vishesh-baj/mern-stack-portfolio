import { Router } from "express";
import {
  createManagement,
  deleteManagement,
  getAllManagements,
  updateManagement,
} from "../controllers/managementController.js";

const router = Router();

router.get("/get-all-management", getAllManagements);
router.post("/create-management", createManagement);
router.put("/update-management/:id", updateManagement);
router.delete("/delete-management/:id", deleteManagement);

export default router;
