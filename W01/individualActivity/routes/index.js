const routes = require('express').Router();
const controller = require('../controllers/json');

routes.get('/professional', controller.info);

module.exports = routes;