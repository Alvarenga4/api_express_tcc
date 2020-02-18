const Subject = require('../Models/Subject');

module.exports = {
  async index(req, res) {
    const data = await Subject.find();

    return res.json(data);
  },
  
  async show(req, res) {
    const { _id } = req.params;

    const data = await Subject.findById( _id );

    return res.json(data);
  },
  
  async store(req, res) {
    const d = new Date();

    const day = d.getDate() - 1;
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const hour = d.getHours() - 1;
    const minute = d.getMinutes();

    const { user_id } = req.params;
    const {
      title,
    } = req.body;

    const data = await Subject.create({
      title,
      created_at: `${day}/${month}/${year} - ${hour}:${minute}`,
      user: user_id,
    });

    await data.populate('user').execPopulate();

    return res.json(data);
  },
  
  async update(req, res) {
    const { _id } = req.params;

    const {
      title,
      updated_at,
    } = req.body;

    const d = new Date();

    const day = d.getDate() - 1;
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const hour = d.getHours() - 1;
    const minute = d.getMinutes() - 1;

    const data = await Subject.findByIdAndUpdate(_id, {
      title,
      updated_at: `${day}/${month}/${year} - ${hour}:${minute}`,
    });

    return res.json({ success: 'Disciplina atualizada com sucesso!' });

  },
  
  async delete(req, res) {
    const { _id } = req.params;

    await Subject.findByIdAndDelete(_id);

    return res.json({ success: 'Disciplina deletada com sucesso!' });
  },  
}