const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const UserController = require('./Controllers/UserController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
  return res.json({ success: 'API e-Teaching Online.' })
});

routes.get('/users', UserController.index);
routes.get('/users/:_id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:_id', UserController.update);
routes.delete('/users/:_id', UserController.delete)

module.exports = routes;