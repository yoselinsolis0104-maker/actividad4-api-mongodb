const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        minlength: 3
    },

    description: {
        type: String,
        required: true
    },

    done: {
        type: Boolean,
        default: false
    },

    priority: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    dueDate: {
        type: Date,
        required: true
    }

}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;