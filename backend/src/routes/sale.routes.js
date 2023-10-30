const routes = require('express').Router();
const { saleControllers } = require('../controllers');

routes.get('/', saleControllers.getAll);

routes.get('/:id', saleControllers.findById);

routes.post('/', saleControllers.register);

module.exports = routes;