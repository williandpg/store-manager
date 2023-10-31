const { saleServices } = require('../services');

const findAll = async (_req, res) => {
  const { data } = await saleServices.findAll();
  return res.status(200).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await saleServices.findById(id);
  if (status === 'NOT_FOUND') {
    return res.status(404).json(data);
  }
  return res.status(200).json(data);
};

const register = async (req, res) => {
  const { data } = await saleServices.register(req.body);
  return res.status(201).json(data);
};

module.exports = {
  findAll,
  findById,
  register,
};