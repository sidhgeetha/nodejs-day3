import mongoose from "mongoose";

const mentorSchema = mongoose.Schema(
  {
    mentor_name: String,
    batch_name: String,
    email: String,
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      }],
  },{ versionKey: false });

const Mentor = mongoose.model("mentor", mentorSchema);
export default Mentor;
