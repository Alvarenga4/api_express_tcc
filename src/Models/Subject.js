const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created_at: String,
  updated_at: String,
});

module.exports = mongoose.model('Subject', SubjectSchema);