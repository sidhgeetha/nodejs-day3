import Student from "../Models/student.schema.js";

export const createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    student.previousMentorId = null;

    console.log(student);

    await student.save();

    res.status(200).json({ student });
  } catch (error) {
    console.log({ error: "error in create employee" });
  }
};

export const getStudentDetail = async (req, res) => {
  try {
    const student = await Student.find();

    res.status(200).json({ data: student });
  } catch (error) {
    console.log(error);
  }
};

export const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);

    if (student.length === 0) {
      return res.status(404).json({ message: "student not found" });
    }

    res.status(200).json({ data: student });
  } catch (error) {
    console.log(error);
  }
};

export const updateStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    let previousMentorId;
    const { stu_name, batch_name, email, mentorId } = req.body;

    const student = await Student.findById(studentId);
    if (student.mentorId.equals(mentorId)) {
      previousMentorId = student.previousMentorId;
    } else {
      previousMentorId = student.mentorId;
    }

    const result = await Student.updateOne(
      { _id: studentId },
      { stu_name, batch_name, email, mentorId, previousMentorId }
    );

    if (result.matchedCount === 0) {
      return res.status(400).json({ error: "student id not found" });
    }

    res.status(200).json({ message: "Student record updated" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const result = await Student.deleteOne({ _id: studentId });


    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};




export const getPreviousMentorByStudentId = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    const previousMentorId = student.previousMentorId;
    if (!previousMentorId) {
      return res
        .status(404)
        .json({ message: "No previous mentor assigned for the student" });
    }
    res.status(200).json({ previousMentorId });
  } catch (error) {
    console.error( error);
    res.status(500).json({ error: "Internal server error" });
  }
};

