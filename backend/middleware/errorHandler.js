const errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (process.env.NODE_ENV === "production" && !err.isOperational) {
        res.status(500).json({
            message: "Something went wrong!",
            status: "error",
        })
    } else {
        console.log(err);
        res.status(err.statusCode).json({
            message: err.message,
            status: err.status,
            stack: err.stack,
        })
    }
}

export default errorHandler;