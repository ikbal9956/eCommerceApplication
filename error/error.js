// errorHandler.js
class ErrorHandler extends Error {
  constructor(message,statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// errorMiddleware.js
export const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message =
    err.message || "An unexpected error occurred its Internal server error";

  return res.status(statusCode).json({
    statusCode,
    message,
  });
};

export default ErrorHandler;
