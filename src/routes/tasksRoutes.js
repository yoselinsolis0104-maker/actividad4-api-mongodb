const express = require('express');

const router = express.Router();

const tasksController = require('../controllers/tasksController');

const validateTask = require('../middlewares/validateTask');

router.get('/', tasksController.getAllTasks);

router.get('/:id', tasksController.getTaskById);

router.post('/', validateTask, tasksController.createTask);

router.put('/:id', validateTask, tasksController.updateTask);

router.delete('/:id', tasksController.deleteTask);

module.exports = router;