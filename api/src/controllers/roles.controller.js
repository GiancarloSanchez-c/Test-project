const Rol = require('../models/Rol');


const createRol = async (req, res) => {
  const { name } = req.body;
  try {
    const rol = await Rol.create({ name });
    res.status(201).json({ message: `Rol ${rol.name} created successfully` });
  } catch (error) {
    console.log(error);
  }
}

const updatedRol = async(req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  try {
    const rol = await Rol.findByIdAndUpdate(id, { name });
    res.status(200).json({ message: `Rol ${rol.name} updated successfully` });
  } catch (error) {
    console.log(error);
  }
}

const deleteRol = async(req, res) => {
  const { id } = req.params;
  try {
    const rol = await Rol.findByIdAndDelete(id);
    res.status(200).json({ message: `Rol ${rol.name} deleted successfully` });
  } catch (error) {
    console.log(error);
  }
}

const getRol = async (req, res) => {
  try {
    const rol = await Rol.find();
    res.status(200).json({ message: `Roles`, rol });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createRol,
  updatedRol,
  deleteRol,
  getRol
};
