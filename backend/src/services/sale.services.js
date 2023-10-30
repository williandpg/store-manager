const { saleModels } = require('../models');

const getAll = async () => {
  const sales = await saleModels.getAll();
  return { status: 'SUCCESS', data: sales };
};

const findById = async (id) => {
  const [sale] = await saleModels.findById(id);
  if (!sale) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESS', data: sale };
};

const register = async (name) => {
  const sale = await saleModels.register(name);
  return { status: 'CREATED', data: sale };
};

module.exports = {
  getAll,
  findById,
  register,
};