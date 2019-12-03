const mongoose = require('mongoose');

const ClassroomSchema = new mongoose.Schema({
  course_id: String,
  subject_id: String,
  description: String,
  user_id: String,
});

module.exports = mongoose.model('Classroom', ClassroomSchema);