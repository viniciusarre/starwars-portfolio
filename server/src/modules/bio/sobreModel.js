const mongoose = require("mongoose");

const sobreSchema = new mongoose.Schema({
  title: { String },
  text: { String }
});
// semestreSchema.index({ name: 'text'});

sobreSchema.pre("save", next => {
  next();
});

module.exports = mongoose.model("About", sobreSchema);
