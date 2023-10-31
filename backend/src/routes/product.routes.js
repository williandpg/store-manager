const routes = require('express').Router();
const { productControllers } = require('../controllers');
const { nameMiddleware } = require('../middlewares/product.middlewares');

routes.get('/products', productControllers.findAll);

routes.get('/products/:id', productControllers.findById);

routes.post('/products', nameMiddleware, productControllers.register); 

routes.put('/products/:id', nameMiddleware, productControllers.update);

module.exports = routes;