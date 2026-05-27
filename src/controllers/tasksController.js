const Task = require('../models/taskModel');

// GET /tasks
exports.getAllTasks = async (req, res) => {

    try {

        const tasks = await Task.find();

        res.status(200).json({
            ok: true,
            data: tasks
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            error: error.message
        });

    }

};

// GET /tasks/:id
exports.getTaskById = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id);

        if (!task) {

            return res.status(404).json({
                ok: false,
                error: 'Tarea no encontrada'
            });

        }

        res.status(200).json({
            ok: true,
            data: task
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            error: error.message
        });

    }

};

// POST /tasks
exports.createTask = async (req, res) => {

    try {

        const newTask = await Task.create(req.body);

        res.status(201).json({
            ok: true,
            data: newTask
        });

    } catch (error) {

        res.status(400).json({
            ok: false,
            error: error.message
        });

    }

};

// PUT /tasks/:id
exports.updateTask = async (req, res) => {

    try {

        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedTask) {

            return res.status(404).json({
                ok: false,
                error: 'Tarea no encontrada'
            });

        }

        res.status(200).json({
            ok: true,
            data: updatedTask
        });

    } catch (error) {

        res.status(400).json({
            ok: false,
            error: error.message
        });

    }

};

// DELETE /tasks/:id
exports.deleteTask = async (req, res) => {

    try {

        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {

            return res.status(404).json({
                ok: false,
                error: 'Tarea no encontrada'
            });

        }

        res.status(204).send();

    } catch (error) {

        res.status(500).json({
            ok: false,
            error: error.message
        });

    }

};