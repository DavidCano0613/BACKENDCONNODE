const boom = require('@hapi/boom');

//*Recibe un esquema, le decimos donde encontrar la información y retorna un middleware de forma dinamica usando clousures.

const validatorHandler = (schema,property) => {
  return (req, res, next) => {
    //Aqui se recibe el request, esta informacion puede venir en un params, query o body. Depende de si es un post un get, etc... por esto así se hace dinamico
    const data = req[property];

    //El esquema de joi tiene el método validate que recibe la data que va a validar y esta se saca del request.

    //AbortEarly permite no abortar el error con la primera que encuentre

    const { error } = schema.validate(data,{AbortEarly:false});

    // Si hay un error, es decir no cumple la validacion entonces se le pasa esto a los middlewares que manejan los errores
    if (error) {
      next(boom.badRequest(error));
    }

    //Si no hay error puede seguir y pasar a la capa de casos de usos
    next();
  };
}

module.exports =  validatorHandler
