const validateTask = (req, res, next) => {

    const { title, done } = req.body;

    if (!title || typeof title !== 'string') {
        return res.status(400).json({
            ok: false,
            error: 'El campo title es obligatorio y debe ser texto'
        });
    }

    if (done !== undefined && typeof done !== 'boolean') {
        return res.status(400).json({
            ok: false,
            error: 'El campo done debe ser boolean'
        });
    }

    next();
};

module.exports = validateTask;