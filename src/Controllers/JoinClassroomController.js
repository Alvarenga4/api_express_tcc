const JoinClassroom = require('../Models/JoinClassroom');
const Classroom = require('../Models/Classroom');
const User = require('../Models/User');

module.exports = {
  async index(req, res) {
    const data = await JoinClassroom.find();

    return res.json(data);
  },

  async show(req, res) {
    const { _id } = req.params;

    const data = await JoinClassroom.findById(_id);

    return res.json(data);
  },

  async my_register(req, res) {
    const { user_id } = req.params;

    const data = await JoinClassroom.find({user_id});

    return res.json(data);
  },
  
  async store(req, res) {
    const { classroom_id } = req.params;
    const { user_id } = req.query;

    const user = await User.findById(user_id);
    const classroom = await Classroom.findById(classroom_id);

    const data = await JoinClassroom.create({
      user_id,
      classroom_id,
      classroom_name: classroom.course_title,
      user_name: user.fullname,
      teacher_name: classroom.user_name,
    });

    await data.populate('user_id').populate('classroom_id').execPopulate();

    return res.json(data);

  },
  
  async delete(req, res) {
    const { _id } = req.params;

    await JoinClassroom.findByIdAndDelete(_id);

    return res.json({ success: 'Registro deletada com sucesso!' });
  },
}