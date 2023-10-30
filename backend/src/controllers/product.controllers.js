const { productServices } = require('../services');
const { httpStatus } = require('../utils');

const getAll = async (_req, res) => {
  const { status, data } = await productServices.getAll();
  return res.status(httpStatus(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productServices.findById(id);
  return res.status(httpStatus(status)).json(data);
};

const register = async (req, res) => {
  const { name } = req.body;
  const { status, data } = await productServices.register(name);
  return res.status(httpStatus(status)).json(data);
};

module.exports = {
  getAll,
  findById,
  register,
};