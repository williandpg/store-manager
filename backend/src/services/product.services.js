const { productModels } = require('../models');

const getAll = async () => {
  const products = await productModels.getAll();
  return { status: 'SUCCESS', data: products };
};

const findById = async (id) => {
  const [product] = await productModels.findById(id);
  if (!product) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESS', data: product };
};

const register = async (name) => {
  const product = await productModels.register(name);
  if (!name) {
    return { status: 'INVALID_DATA', data: { message: '"name" is required' } };
  }
  return { status: 'SUCCESS', data: product };
};

module.exports = {
  getAll,
  findById,
  register,
};