const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost:27017/eteaching', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/documents', express.static(path.resolve(__dirname, '..', 'uploads')))
app.listen(3000);
