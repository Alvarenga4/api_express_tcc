const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const UserController = require('./Controllers/UserController');
const SesionController = require('./Controllers/SessionController');
const SubjectController = require('./Controllers/SubjectController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/', (req, res) => {
  return res.json({ success: 'API e-Teaching Online.' })
});

routes.post('/login', SesionController.create);

routes.get('/users', UserController.index);
routes.get('/users/:_id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:_id', UserController.update);
routes.delete('/users/:_id', UserController.delete);

routes.get('/subject', SubjectController.index);
routes.get('/subject/:_id', SubjectController.show);
routes.post('/subject/:user_id', SubjectController.store);
routes.put('/subject/:_id', SubjectController.update);
routes.delete('/subject/:_id', SubjectController.delete);

module.exports = routes;