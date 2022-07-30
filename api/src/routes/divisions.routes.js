const router = require('express').Router();

const { getAllSubdivisions, addSubdivision,getDivisionByName, createDivisions, getAllDivisions, getOneDivisions, deleteDivisions, updateDivisions } = require('../controllers/division.controller');

router.post('/create', createDivisions);
router.get('/', getAllDivisions);
router.get('/oneDivision/:id', getOneDivisions);
router.delete('/deleteDivision/:id', deleteDivisions);
router.put('/updateDivision/:id', updateDivisions);
router.get('/find', getDivisionByName);
router.get('/allSubdivisions', getAllSubdivisions);
router.post('createSubdivisions', addSubdivision);
module.exports = router;