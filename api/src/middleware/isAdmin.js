const User = require('../models/User');
const Rol = require('../models/Rol');

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId)
    const roles = await Rol.find({ _id: { $in: user.roles } })
   // get all roles of user and check if one of them is moderator or admin if so then next() 
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next()
        return;
      }
    }
    return res.status(403).json({ message: "You are not authorized to perform this action" })
  } catch (error) {
    console.log(error.message);
  }
}


module.exports = isAdmin;