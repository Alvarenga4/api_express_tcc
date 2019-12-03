const WorksClassroom = require('../Models/WorksClassroom');

module.exports = {
  async index(req, res) {
    const data = await WorksClassroom.find();

    return res.json(data);
  },

  async show(req, res) {
    const { _id } = req.params;

    const data = await WorksClassroom.findById(_id);

    return res.json(data);
  },

  async store(req, res) {
    const { classroom_id } = req.params;
    const { filename } = req.file;
    const { user_id } = req.query;
    const {
      description
    } = req.body;

    const data = await WorksClassroom.create({
      user: user_id,
      classroom: classroom_id,
      document: filename,
      description,
    });

    await data.populate('user').populate('classroom').execPopulate();

    return res.json(data);

  },
  
  async delete(req, res) {
    const { _id } = req.params;

    await WorksClassroom.findByIdAndDelete(_id);

    return res.json({success: "Arquivo deletado com sucesso!"}); 
  },
}