const errorHandler = (err, req, res, next) => {

    console.error(err);

    res.status(500).json({
        ok: false,
        error: 'Error interno del servidor'
    });
};

module.exports = errorHandler;