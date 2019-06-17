'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sobreSchema = new mongoose.Schema({
    title: { String: String },
    text: { String: String }
});
// semestreSchema.index({ name: 'text'});

sobreSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('sobre', sobreSchema);