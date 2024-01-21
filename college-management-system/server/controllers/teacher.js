import Teacher from "../models/teacher.js";

export const getAllTeachers = async (req, res) => {
  try {
    const allTeachers = await Teacher.find({});
    if (!allTeachers) {
      res.status(404).json({ message: "Unable to fetch teachers" });
    }
    res
      .status(200)
      .json({ message: "Successfully fetched all teachers", allTeachers });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTeacher = async (req, res) => {
  try {
    const createdTeacher = new Teacher(req.body);
    const savedTeacher = await createdTeacher.save();
    if (!savedTeacher) {
      res.status(404).json({ message: "Unable to create Teacher " });
    }
    res
      .status(201)
      .json({ message: "teacher created sucessfully", savedTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTeacher = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(id);
    if (!deletedTeacher) {
      res.status(400).json({ message: "Unable to delete teacher" });
    }
    res
      .status(200)
      .json({ message: "Deleted Teacher Successfully", deletedTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTeacher = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body);
    if (!updatedTeacher) {
      res.status(400).json({ message: "unable to update teacher" });
    }
    res
      .status(200)
      .json({ message: "Successfully updated teacher", updatedTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
