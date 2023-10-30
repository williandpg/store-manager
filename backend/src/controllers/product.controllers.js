const { productServices } = require('../services');
const { httpStatus } = require('../utils');

const getAll = async (_req, res) => {
  const { status, data } = await productServices.getAll();
  res.status(httpStatus(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productServices.findById(id);
  res.status(httpStatus(status)).json(data);
};

module.exports = {
  getAll,
  findById,
};