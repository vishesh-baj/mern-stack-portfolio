import mongoose from "mongoose";

const managementSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  role: { type: String, required: true },
});

const ManagementModel = mongoose.model("management", managementSchema);
export default ManagementModel;
