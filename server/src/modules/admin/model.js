const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  user: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  token: { type: String }
});

adminSchema.pre("save", next => {
  next();
});

module.exports = mongoose.model("admin", adminSchema);
