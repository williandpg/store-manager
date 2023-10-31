const { saleModels } = require('../models');

const findAll = async () => {
  const sales = await saleModels.findAll();
  return { status: 'SUCCESSFULL', data: sales };
};

const findById = async (id) => {
  const sale = await saleModels.findById(id);
  if (!sale.length) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESSFULL', data: sale };
};

const register = async (name) => {
  const { id, itemsSold } = await saleModels.register(name);
  return { status: 'SUCCESSFULL', data: { id, itemsSold } };
};

module.exports = {
  findAll,
  findById,
  register,
};