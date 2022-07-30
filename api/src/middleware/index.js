const admin = require('./isAdmin');
const verifyToken = require('./verifyToken');
const { checkDuplicateUsernameOrEmail, checkRolesExisted } = require('./verifySignup');

module.exports = {
  admin,
  verifyToken,
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};
