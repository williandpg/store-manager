const productIdMiddleware = async (req, res, next) => {
  let error = null;
  req.body.forEach((sale) => {
    if (!sale.productId || sale.productId === '') {
      error = true;
    } 
  });
  if (error) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  next();
};
  
const quantityMiddleware = async (req, res, next) => {
  let error = null;
  req.body.forEach((sale) => {
    if (!sale.quantity && sale.quantity !== 0) {
      error = true;
    }
  });
  if (error) {
    return res.status(400).json({ message: '"quantity" is required' });
  }
  next();
};
  
const lengthMiddleware = async (req, res, next) => {
  let error;
  req.body.forEach((sale) => {
    if (sale.quantity <= 0) {
      error = true;
    }
  });
  if (error) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  productIdMiddleware,
  quantityMiddleware,
  lengthMiddleware,
};