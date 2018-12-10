const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const semestreSchema = new mongoose.Schema({
    num: { type:  Number },
    nome: { type: String},
    materias: { type:  [Schema.Types.Mixed], default: [] },
    crawlTitle: {   type: String },
    crawlSubtitle: {   type: String },
    crawlText: { type: String }
});
// semestreSchema.index({ name: 'text'});

semestreSchema.pre('save', (next) => {
    next();
});

module.exports = mongoose.model('semestre', semestreSchema);