const routes = require('express').Router();
const { productControllers } = require('../controllers');

routes.get('/', productControllers.getAll);

routes.get('/:id', productControllers.findById);

module.exports = routes;