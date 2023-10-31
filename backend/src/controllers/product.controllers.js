const { productServices } = require('../services');

const findAll = async (_req, res) => {
  const { data } = await productServices.findAll();
  return res.status(200).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productServices.findById(id);
  if (status === 'NOT_FOUND') {
    return res.status(404).json(data);
  }
  return res.status(200).json(data);
};

const register = async (req, res) => {
  const { name } = req.body;
  const { data } = await productServices.register(name);
  return res.status(201).json(data);
};

module.exports = {
  findAll,
  findById,
  register,
};