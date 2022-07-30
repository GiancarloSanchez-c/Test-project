const User = require('../models/User')

const updateUser = async (req, res) => {
  const { id }= req.params;
  const { username, email, password, roles } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, { username, email, password,roles });
    res.json({
      message: 'User updated successfully',
    });
  }
  catch (error) {
    res.json({
      message: 'Error updating user',
      error
    });
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const userId = await User.findById(id);
  try {
    if (userId.id === id) {
      await User.findByIdAndDelete(id);
      return res.status(200).json("Account has been deleted");
    }
  } catch (error) {
    return res.status(403).json("You can delete only your account!");
  }

}

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (error) {
    return res.status(500).json(error);
  }
}

const getAllUsers = async (req, res) => {
  const options = {
    sort: {
      createdAt: 1
    }
  }
  try {
    const users = await User.find(options).populate({
      path: "roles",
      select:"name"
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers
};
