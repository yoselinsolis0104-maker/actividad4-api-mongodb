require('dotenv').config();

const express = require('express');

const connectDB = require('./config/db');

const tasksRoutes = require('./routes/tasksRoutes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

connectDB();

app.use(express.json());

app.use('/tasks', tasksRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});