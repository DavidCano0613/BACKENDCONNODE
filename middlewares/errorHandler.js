//* Middleware de error global
//* Este tipo de middlewares reciben como parametro el error la requets el response y el next 

//*Puede ser util para hacer tracking de errores
function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

//*Para crear un formato o estandar cada vez que se tiene un error.
function errorHandler(err, req, res, next) {
  res.status(500).json({
    status: err.status,
    statusCode: err.statusCode,
    message: err.message,
    //*Esta propiedad sirve para saber donde ocurrio el error.
    stack: err.stack
  });
}

//*Manejo de errores respetando los status codes.
function boomErrorHandler(err, req, res, next) {
  if(err.isBoom){
    const {output} = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
