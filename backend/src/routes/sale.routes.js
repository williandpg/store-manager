const routes = require('express').Router();
const { saleControllers } = require('../controllers');
const { 
  productIdMiddleware,
  quantityMiddleware,
  lengthMiddleware } = require('../middlewares/sale.middlewares');
const { productMiddleware } = require('../middlewares/product.middlewares');

routes.get('/sales', saleControllers.findAll); 

routes.get('/sales/:id', saleControllers.findById);

routes.post(
  '/sales',
  productIdMiddleware,
  quantityMiddleware,
  lengthMiddleware,
  productMiddleware,
  saleControllers.register,
); 

module.exports = routes;