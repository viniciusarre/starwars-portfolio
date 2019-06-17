'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new mongoose.Schema({
    sender: { type: String },
    email: { type: String },
    message: { type: String },
    date: { type: Date, default: new Date() }
});

contactSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('contact', contactSchema);