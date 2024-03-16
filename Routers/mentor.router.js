import express, { Router } from "express";
import {
  assignMentor,
  createMentor,
  getMentorById,
  getMentorDetail,
  getStudentsByMentorId,
  updateMentorById,
} from "../Controllers/mentor.controller.js";

const router = express.Router();

router.post("/create-mentor", createMentor);
router.get("/get-mentordetail", getMentorDetail);
router.get("/get-mentordetail/:id", getMentorById);
router.get("/student-mentor/:id", assignMentor);
router.put("/update-mentor/:id", updateMentorById);
router.get("/getallstudents/:mentorId", getStudentsByMentorId);
export default router;
