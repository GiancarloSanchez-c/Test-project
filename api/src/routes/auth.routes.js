const router = require('express').Router();
const { register, login } = require('../controllers/auth.controller')
const { checkDuplicateUsernameOrEmail, checkRolesExisted } = require('../middleware');


router.post('/register',[checkDuplicateUsernameOrEmail], register);
router.post('/login', login);
module.exports = router;