function errorHandler(err, req, res, next) {
    const errObj = {
        message: err.message,
    }
    const statusCode = err.statusCode || 500;

    console.log(err);
    res.status(statusCode).json(errObj);
}

module.exports = errorHandler;