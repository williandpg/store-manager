const { productModels } = require('../models');

const getAll = async () => {
  const products = await productModels.getAll();
  return { status: 'SUCCESS', data: products };
};

const findById = async (id) => {
  const [product] = await productModels.findById(id);
  if (product.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }
  return { status: 'SUCCESS', data: product };
};

module.exports = {
  getAll,
  findById,
};