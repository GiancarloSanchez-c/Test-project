const router = require('express').Router();

const {createRol, deleteRol, updatedRol,getRol, } = require('../controllers/roles.controller')

router.get('/', getRol);
router.post('/create', createRol);
router.put('/update/:id', updatedRol);
router.delete('/delete/:id', deleteRol);

module.exports = router;