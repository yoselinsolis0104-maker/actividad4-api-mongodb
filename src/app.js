const express = require('express');

const tasksRoutes = require('./routes/tasksRoutes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

// rutas
app.use('/tasks', tasksRoutes);

// middleware 404
app.use(notFound);

// middleware errores
app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});