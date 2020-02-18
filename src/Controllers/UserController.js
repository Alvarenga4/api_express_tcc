const User = require('../Models/User');

module.exports = {
  async index(req, res) {
    const data = await User.find();

    return res.json(data);
  },

  async show(req, res) {
    const { _id } = req.params;

    const data = await User.findById(_id);

    return res.json(data);
  },

  async store(req, res) {
    const {
      fullname,
      cpf,
      email,
      birthday,
      address,
      complement,
      number,
      neighborhood,
      zip_code,
      state,
      is_teacher,
      is_adm,
      is_coordinator,
      formation,
      school_graduation,
      year_graduation,
      password,
    } = req.body;

    const data = await User.create({
      fullname,
      cpf,
      email,
      birthday,
      address,
      complement,
      number,
      neighborhood,
      zip_code,
      state,
      is_teacher,
      is_adm,
      is_coordinator,
      formation,
      school_graduation,
      year_graduation,
      password,
    });

    return res.json(data);
  },

  async update(req, res) {
    const { _id } = req.params;
    const {
      fullname,
      cpf,
      email,
      birthday,
      address,
      complement,
      number,
      neighborhood,
      zip_code,
      state,
      is_teacher,
      is_adm,
      is_coordinator,
      formation,
      school_graduation,
      year_graduation,
    } = req.body;

    const data = await User.findByIdAndUpdate(_id, {
      fullname,
      cpf,
      email,
      birthday,
      address,
      complement,
      number,
      neighborhood,
      zip_code,
      state,
      is_teacher,
      is_adm,
      is_coordinator,
      formation,
      school_graduation,
      year_graduation,
    });

    return res.json(data);
  },

  async delete(req, res) {
    const { _id } = req.params;

    await User.findByIdAndDelete(_id);

    return res.json({ success: 'Usuário deletado com sucesso!' })
  },
}