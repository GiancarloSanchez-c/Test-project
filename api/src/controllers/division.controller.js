const Division = require('../models/Divisions');
const User = require('../models/User');
const SubDivisions = require('../models/SubDivisions');

const createDivisions = async (req, res) => {
  const { name, higher, collaborators, level, subDivisions, ambassadors } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }

  const division = new Division({
    name,
    higher,
    collaborators,
    level,
    subDivisions,
    ambassadors,

  });
  try {
    await division.save();
    return res.status(200).json({ message: 'Division created successfully', division });
  } catch (error) {
    return res.status(400).json(error.message);

  }
}
const getAllDivisions = async (req, res) => {
  try {
    const divisions = await Division.find().populate("ambassadors");
    return res.status(200).json(divisions);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

const getDivisionByName = async (req, res) => {
  // Traer por nombre
  const { name } = req.query;
  //COnvertir el nombre a minusculas
  const nameLower = name.toLowerCase();
  try {
    if (name) {
      const division = await Division.find({ name: { $regex: nameLower, $options: 'i' } });
      return res.status(200).json(division);
    } else {
      return res.status(400).json({ message: 'Name is required' });
    }
  }
  catch (error) {
    return res.status(400).json(error.message);
  }
}

const getOneDivisions = async (req, res) => {
  const { id } = req.params;
  const { name } = req.query;
  try {
    if (id) {
      const division = await Division.findById(id);
      return res.status(200).json(division);
    } else if (name) {
      const nameLower = name.toLowerCase();
      const division = await Division.findOne({ name: { $regex: nameLower, $options: 'i' } });
      return res.status(200).json(division);
    } else {
      return res.status(400).json({ message: 'Id or name is required' });
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

const updateDivisions = async (req, res) => {
  const { id } = req.params;
  const { name, higher, collaborators, level, subDivisions, ambassadors } = req.body;
  const options = {
    new: true, // return the new updated document
    upsert: true // insert the document if it does not exist
  }
  try {
    const division = await Division.findByIdAndUpdate(id, {
      name,
      higher,
      collaborators,
      level,
      subDivisions,
      ambassadors,
    }, options);
    return res.status(200).json({ message: 'Division updated successfully', division });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

const deleteDivisions = async (req, res) => {
  const { id } = req.params;
  try {
    await Division.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Division deleted successfully' });
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

const addSubdivision = async (req, res) => {
  const { name } = req.body;
  const subdivision = new SubDivisions({
    name,
  });
  try {
    await subdivision.save();
    return res.status(200).json({ message: 'Subdivision created successfully', subdivision });
  }
  catch (error) {
    return res.status(400).json(error.message);
  }
}

const getAllSubdivisions = async (req, res) => {
  try {
    const subDivisions = await SubDivisions.find();
    return res.status(200).json(subDivisions);
  } catch (error) {
    return res.status(400).json(error.message);
  }
}

module.exports = {
  createDivisions,
  getAllDivisions,
  getOneDivisions,
  updateDivisions,
  deleteDivisions,
  getDivisionByName,
  addSubdivision,
  getAllSubdivisions
};
