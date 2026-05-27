const fs = require('fs');
const path = require('path');

const tasksFile = path.join(__dirname, '../data/tasks.json');

// leer tareas
const getTasks = () => {
    const data = fs.readFileSync(tasksFile, 'utf-8');
    return JSON.parse(data);
};

// guardar tareas
const saveTasks = (tasks) => {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
};

// obtener todas
const getAllTasks = (req, res) => {
    const tasks = getTasks();

    res.status(200).json({
        ok: true,
        data: tasks
    });
};

// obtener por id
const getTaskById = (req, res) => {
    const tasks = getTasks();

    const task = tasks.find(
        t => t.id === parseInt(req.params.id)
    );

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
};

// crear tarea
const createTask = (req, res) => {
    const tasks = getTasks();

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        description: req.body.description,
        done: req.body.done || false,
        priority: req.body.priority
    };

    tasks.push(newTask);

    saveTasks(tasks);

    res.status(201).json({
        ok: true,
        data: newTask
    });
};

// actualizar
const updateTask = (req, res) => {
    const tasks = getTasks();

    const index = tasks.findIndex(
        t => t.id === parseInt(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({
            ok: false,
            error: 'Tarea no encontrada'
        });
    }

    tasks[index] = {
        ...tasks[index],
        ...req.body
    };

    saveTasks(tasks);

    res.status(200).json({
        ok: true,
        data: tasks[index]
    });
};

// eliminar
const deleteTask = (req, res) => {
    const tasks = getTasks();

    const filteredTasks = tasks.filter(
        t => t.id !== parseInt(req.params.id)
    );

    if (tasks.length === filteredTasks.length) {
        return res.status(404).json({
            ok: false,
            error: 'Tarea no encontrada'
        });
    }

    saveTasks(filteredTasks);

    res.status(204).send();
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};