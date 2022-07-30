const User = require('../models/User');
const Rol = require('../models/Rol');
const { SECRET } = require('../config');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, email, password,age, roles } = req.body;
  try {
    const user = await User.create({ username, email, password,age })
    user.password = await user.encryptPassword(user.password);

    if (roles) {
      const foundRoles = await Rol.find({ name: { $in: roles } });
      console.log(foundRoles)
      user.roles = foundRoles.map(rol => rol._id);
      console.log(user.roles)
    } else {
      const rol = await Rol.find({ name: "user" });
      user.roles = [rol._id];
    }
    const userSaved = await user.save();
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: 60 * 60 * 24
    })
    res.status(201).json({ message: `User ${userSaved.username} with email ${userSaved.email} created successfully`, token });
  } catch (error) {
    console.log(error);
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const isPasswordValid = await user.validatePassword(password, user.password)
    if (!isPasswordValid) return res.status(401).json({ message: 'Invalid password' });
    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: 60 * 60 * 24
    })
    res.json({ user, token })

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  register,
  login
}