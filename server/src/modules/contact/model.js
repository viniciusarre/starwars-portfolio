const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
    sender: { type: String },
    email: { type: String },
    message: { type: String },
    date: { type: Date, default : new Date() }
});

contactSchema.pre('save', (next) => {
    next();
});

module.exports = mongoose.model('contact', contactSchema);