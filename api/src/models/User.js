const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true
  },
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 25
  },
  profilePicture: {
    type: String,
    default: 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
  },
  age: {
    type: Number,
    required: true,
  },
  roles: [{
    type: Schema.Types.ObjectId,
    ref: 'Rol'
  }]
}
  , { timestamps: true }
)

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

userSchema.methods.validatePassword = async function (password) {
  return bcrypt.compare(password, this.password);
}

module.exports = model("User", userSchema);