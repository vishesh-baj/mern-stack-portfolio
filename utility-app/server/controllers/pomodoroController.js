import Pomodoro from "../schema/pomodoro.js";

export const createPomodoro = async (req, res) => {
  const userId = req.user;
  try {
    const newPomodoro = new Pomodoro({ ...req.body, user: userId });
    const createdPomodoro = await newPomodoro.save();
    if (!createdPomodoro) {
      res.status(400).json({ error: "Unable to create pomodoro" });
    }
    res.status(201).json({
      message: "Pomodoro created successfully",
      pomodoro: createdPomodoro,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getAllPomodoros = async (req, res) => {
  const userId = req.user;
  try {
    const pomodoros = await Pomodoro.find({ user: userId });
    if (!pomodoros) {
      res.status(404).json({ message: "Unable to find pomodoros" });
    }
    res
      .status(200)
      .json({ message: "pomodoros fetched successfully", pomodoros });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deletePomodoro = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedPomodoro = await Pomodoro.findByIdAndDelete(id);
    if (!deletedPomodoro) {
      res.status(400).json({ message: "Unable to delete pomodoro" });
    }
    res
      .status(200)
      .json({ message: "Pomodoro deleted successfully", deletedPomodoro });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updatePomodoro = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      res.status(404).json({ message: "Id not found to update pomodoro" });
    }
    const updatedPomodoro = await Pomodoro.findByIdAndUpdate(id, req.body);
    if (!updatedPomodoro) {
      res.status(404).json({ message: "Unable to update pomodoro" });
    }
    res.status(200).json(updatedPomodoro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
