import express, { Router } from "express";

import {
  createStudent,
  deleteStudent,
  getPreviousMentorByStudentId,
  getStudentById,
  getStudentDetail,
  updateStudentById,
} from "../Controllers/student.controller.js";

const router = express.Router();

router.post("/create-student", createStudent);
router.get("/get-studentdetail", getStudentDetail);
router.get("/get-studentdetail/:id", getStudentById);
router.put("/update-student/:id", updateStudentById);
router.delete("/delete-student/:id" ,deleteStudent);
router.get("/getpreviousmentorbystudent/:id",getPreviousMentorByStudentId);
export default router;
