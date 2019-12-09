const mongoose = require('mongoose');

const JoinClassroomSchema = new mongoose.Schema({
  classroom_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classroom',
  },
  classroom_name: String,
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  user_name: String,
  teacher_name: String,
});

module.exports  = mongoose.model('JoinClassroom', JoinClassroomSchema);