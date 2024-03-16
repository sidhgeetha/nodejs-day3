import Mentor from "../Models/mentor.schema.js";
import Student from "../Models/student.schema.js";

export const createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);

    await mentor.save();

    res.status(200).json({ mentor });
  } catch (error) {
    console.log({ error: error });
  }
};

export const getMentorDetail = async (req, res) => {
  try {
    const mentor = await Mentor.find();

    res.status(200).json({ data: mentor });
  } catch (error) {
    res.status(200).json;
    ({ error: "error in get  detail" });
  }
};

export const getMentorById = async (req, res) => {
  try {
    const mentorId = req.params.id;
    console.log(mentorId);
    const mentor = await Mentor.findById(mentorId);
    // const mentor = await Mentor.find({ _id: mentorId });

    if (mentor.length === 0) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.status(200).json({ data: mentor });
  } catch (error) {
    console.log(error);
  }
};

export const assignMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).populate("mentorId");

    res.status(200).json({
      message: " mentor assigned",
      Student: student.stu_name,
      Mentor: student.mentorId.stu_name,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateMentorById = async (req, res) => {
  try {
    const { id } = req.params;
    const { mentor_name, batch_name, email } = req.body;

    const mentor = await Mentor.findByIdAndUpdate(
      id,
      { mentor_name, batch_name, email },
      { new: true }
    );

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.status(200).json({
      message: "Mentor details updated",
      Mentor: mentor,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getStudentsByMentorId = async (req, res) => {
  try {
    const { mentorId } = req.params;
    console.log(mentorId);

    const students = await Student.find({ mentorId });

    if (!students || students.length === 0) {
      return res
        .status(404)
        .json({ message: "No students found for the specified mentor" });
    }

    res.status(200).json({ data: students });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
