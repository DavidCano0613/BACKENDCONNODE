const express = require('express')
const { usersRouter } = require('./usersRouter.js');
const { productsRouter } = require('./productsRouter.js');
const { customerRouter } = require('./costumer.router.js');

const routerApi = (aplicacion) => {
  const router = express.Router();
  aplicacion.use('/api/version1', router);
  router.use('/users', usersRouter);
  router.use('/products', productsRouter);
  router.use('/customer', customerRouter);
}

module.exports = { routerApi };


