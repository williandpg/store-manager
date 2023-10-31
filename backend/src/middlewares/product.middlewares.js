const { productModels } = require('../models');

const nameMiddleware = async (req, res, next) => {
  const { name } = req.body;
  if (!name || name === '') { 
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) { 
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' }); 
  }
  next();
};

const productMiddleware = async (req, res, next) => {
  const arrayOfProduct = [];
  const promisses = req.body.map(async (element) => {
    const product = await productModels.findById(element.productId);
    arrayOfProduct.push(product[0]);
  });
  await Promise.all(promisses);
  for (let index = 0; index < arrayOfProduct.length; index += 1) {
    if (arrayOfProduct[index] === undefined) {
      return res.status(404).json({ message: 'Product not found' });
    }
  }
  next();
};

module.exports = {
  nameMiddleware,
  productMiddleware,
};