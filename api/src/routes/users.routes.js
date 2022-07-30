const router = require('express').Router();
const { verifyToken } = require('../middleware');
const {
  deleteUser,
  updateUser,
  getUser,
  getAllUsers,
} = require('../controllers/users.controller');

router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id', getUser);
router.get('/', getAllUsers);

module.exports = router;