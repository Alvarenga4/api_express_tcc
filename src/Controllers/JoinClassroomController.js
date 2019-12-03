const JoinClassroom = require('../Models/JoinClassroom');

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
  
  async store(req, res) {
    const { classroom_id } = req.params;
    const { user_id } = req.query;

    const data = await JoinClassroom.create({
      user_id,
      classroom_id,
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