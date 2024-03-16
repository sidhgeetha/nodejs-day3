import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    stu_name: String,
    batch_name: String,
    email: String,

    mentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
    },
    previousMentorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mentor",
    },
  },
  { versionKey: false }
);

const Student = mongoose.model("student", studentSchema);
export default Student;
