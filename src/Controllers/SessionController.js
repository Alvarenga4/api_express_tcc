const User =  require('../Models/User');
const bcrypt = require('bcryptjs');

module.exports = {
  async create(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (user.aprovado === false) {
        return res.status(401).json({ error: "Solicitação sob analise" });
      }

      if (!user) {
        return res.status(400).json({ error: "Usuário não encontrado" });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: "Invalid password" });
      }

      console.log(req.body)
      return res.json({
        user,
        token: user.generateToken()
      });
    } catch (err) {
      console.log(err)
      return res.status(400).json({ error: "User authentication failed" })
    }
  } 
}