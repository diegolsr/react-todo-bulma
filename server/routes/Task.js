const express = require('express');
const Task = express.Router();

const controllers = require('../controllers/Task');

Task.route('/')
    .post(controllers.add)
    .get(controllers.getAll);

Task.route('/:id')
    .delete(controllers.delete)
    .put(controllers.update);

module.exports = Task;