const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: String,
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created_at: String,
  updated_at: String,
});

module.exports = mongoose.model('Course', CourseSchema);