const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.higorRoute);
routes.get('/gio', lesson1Controller.giovannaRoute);

module.exports = routes;