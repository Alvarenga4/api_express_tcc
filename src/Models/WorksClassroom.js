const mongoose = require('mongoose');

const WorksClassroomSchema = new mongoose.Schema({
  document: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  classroom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Classroom'
  }
}, {
  toJSON: {
    virtuals: true,
  }
});

WorksClassroomSchema.virtual('document_url').get(function() {
  return `http://192.168.43.237:3000/documents/${this.document}`
});

module.exports = mongoose.model('WorksClassroom', WorksClassroomSchema);