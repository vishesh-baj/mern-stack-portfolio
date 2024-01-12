import Management from "../models/management.js";

export const createManagement = async (req, res) => {
  try {
    const newManagement = new Management(req.body);
    if (!newManagement) {
      res.status(404).json({ message: "Unable to create management" });
    }
    const createdManagement = await newManagement.save();
    res.status(201).json({
      message: "Management created successfully",
      management: createdManagement,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllManagements = async (req, res) => {
  try {
    const managementList = await Management.find({});
    if (!managementList) {
      res.status(404).json({ message: "Unable to fetch managements list" });
    }
    res.status(200).json({
      message: "Successfully fetched management list",
      managementList,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateManagement = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedManagement = await Management.findByIdAndUpdate(id, req.body);
    if (!updatedManagement) {
      res.status(404).json({ message: "Unable to update management" });
    }
    res.status(200).json({
      message: "Successfully updated management",
      data: updatedManagement,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteManagement = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedManagement = await Management.findByIdAndDelete(id);
    if (!deletedManagement) {
      res.status(404).json({ message: "Unable to delete the management" });
    }
    res
      .status(200)
      .json({ message: "Management deleted successfully", deletedManagement });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
