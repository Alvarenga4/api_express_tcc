const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  },
  course_title: String,
  subject_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject'
  },
  subject_title: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  user_name: String,
});

module.exports = mongoose.model('Classroom', ClassroomSchema);