const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  fullname: String,
  cpf: String,
  email: String,
  birthday: String,
  address: String,
  complement: String,
  number: Number,
  neighborhood: String,
  zip_code: String,
  state: String,
  is_teacher: Boolean,
  is_adm: Boolean,
  is_coordinator: Boolean,
  formation: String,
  school_graduation: String,
  year_graduation: Number,
  password: String,
}, {
  toJSON: {
    virtuals: true,
  }
});

UserSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified('password')) next();

  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },

  generateToken() {
    return jwt.sign({ id: this.id }, "secret", {
      expiresIn: 86400
    })
  }
}

module.exports = mongoose.model('User', UserSchema);