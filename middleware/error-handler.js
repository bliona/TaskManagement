const { CustomAPIError } = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
  // Log the error for debugging purposes
  console.error(err);

  if (err instanceof CustomAPIError) {
    // If it's a custom error, send a JSON response with the specific status code and message
    return res.status(err.statusCode).json({ error: err.message });
  }

  // For generic errors, choose an appropriate status code (e.g., 500) and send a JSON response
  return res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorHandlerMiddleware;

