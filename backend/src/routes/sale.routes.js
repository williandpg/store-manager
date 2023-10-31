const routes = require('express').Router();
const { saleControllers } = require('../controllers');

routes.get('/sales', saleControllers.findAll); 

routes.get('/sales/:id', saleControllers.findById);

routes.post('/sales', saleControllers.register); 

module.exports = routes;