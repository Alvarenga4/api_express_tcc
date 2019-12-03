const mongoose = require('mongoose');

const JoinClassroomSchema = new mongoose.Schema({
  classroom_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classroom',
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports  = mongoose.model('JoinClassroom', JoinClassroomSchema);