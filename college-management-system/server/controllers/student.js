import Student from "../models/student.js";

export const getAllStudents = async (req, res) => {
  try {
    const allStudents = await Student.find({});
    if (!allStudents) {
      res.status(404).json({ message: "Unable to fetch students" });
    }
    res
      .status(200)
      .json({ message: "All Students fetched successfully", allStudents });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const createdStudent = new Student(req.body);
    const savedStudent = await createdStudent.save();
    if (!savedStudent) {
      res.status(400).json({ message: "Unable to create student" });
    }
    res
      .status(201)
      .json({ message: "Student created successfully", savedStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteStudent = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (deletedStudent) {
      res.status(400).json({ message: "Unable to delete student" });
    }
    res
      .status(200)
      .json({ message: "Student deletd successfully", deletedStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedObject = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedObject) {
      return res.status(404).json({ message: "Student not found" });
    }
    res
      .status(200)
      .json({ message: "Student updated successfully", data: updatedObject });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
