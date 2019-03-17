// Responde an URL not found with 404 and send the error to the next function
function notFound(req, res, next) {
  const err = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(err);
}

// Receives an error and send a response as json instead of HTML
function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    err: process.env.NODE_ENV === 'production' ? {} : err.stack,
  })
}

module.exports = { notFound, errorHandler }