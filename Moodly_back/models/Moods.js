const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  emoji: { type: String, required: true },
  details: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mood', moodSchema);