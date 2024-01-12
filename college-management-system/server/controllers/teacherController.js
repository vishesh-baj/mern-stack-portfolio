import Teacher from "../models/teacher.js";

export const createTeacher = async (req, res) => {
  try {
    const teacherExists = await Teacher.find({ email: req.body.email });
    if (teacherExists) {
      res.status(400).json({
        message:
          "Teacher already associated with email, Two teachers cannot have same email",
      });
    }
    const newteacher = new Teacher(req.body);
    const savedTeacher = await newteacher.save();
    if (!savedTeacher) {
      res.status(400).json({ message: "Unable to create new teacher" });
    }
    res
      .status(201)
      .json({ message: "Teacher created successfully", newteacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await Teacher.find();
    if (!allTeachers) {
      res.status(404).json({ message: "Unable to fetch all teachers" });
    }
    res.status(200).json({
      message: "All teachers fetched successfully",
      teachers: allTeachers,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTeacher = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body);
    if (!updatedTeacher) {
      res.status(404).json({ message: "Unable to update teacher" });
    }
    res
      .status(204)
      .json({ message: "Teacher updated successfully", updatedTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTeacher = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(id);
    if (!deleteTeacher) {
      res.status(404).json({ message: "Unable to delete teacher" });
    }
    res
      .status(200)
      .json({ message: "Teaher deleted successfully", deletedTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
