const Classroom = require('../Models/Classroom');
const User = require('../Models/User');

module.exports = {
  async index(req, res) {
    const data = await Classroom.find();

    return res.json(data);
  },
  
  async show(req, res) {
    const { _id } = req.params;

    const data = await Classroom.findById(_id);

    return res.json(data);

  },
  
  async store(req, res) {
    const { user_id } = req.params;
    const { course_id, subject_id } = req.query;
    const { description } = req.body;

    const user = await User.findById(user_id);

    if (user) {
      if (user.is_teacher == true || user.is_adm == true || user.is_coordinator == true) {
        const data = await Classroom.create({
          subject: subject_id,
          course: course_id,
          user: user_id,
          description,
        });

        await data.populate('user').populate('subject').populate('course').execPopulate();

        return res.json(data);
      } else {
        return res.status(400).json({ error: "Usuário não autorizado" })
      }
    } else {
      return res.status(400).json({error: 'Usuário não encontrado'})
    }
  },
  
  async delete(req, res) {
    const { _id } = req.params;

    await Classroom.findByIdAndDelete(_id);

    return res.json({ error: 'Sala de Aula deletada com sucesso!' });
  },
  
}