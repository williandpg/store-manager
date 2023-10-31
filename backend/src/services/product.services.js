const { productModels } = require('../models');

const findAll = async () => {
  const products = await productModels.findAll();
  return { status: 'SUCCESSFULL', data: products };
};

const findById = async (id) => {
  const product = await productModels.findById(id);
  if (!product.length) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESSFULL', data: product[0] };
};

const register = async (name) => {
  const product = await productModels.register(name);
  return { status: 'SUCCESSFULL', data: product };
};

module.exports = {
  findAll,
  findById,
  register,
};