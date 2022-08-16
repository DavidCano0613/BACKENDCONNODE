const express = require('express')
const { productsRouter } = require('./productsRouter.js');
const { usersRouter } = require('./usersRouter.js');

function routerApi(aplicacion){
  const router = express.Router();
  aplicacion.use('/api/version1',router);
  router.use('/users',usersRouter);
  router.use('/products',productsRouter);
}

module.exports = {routerApi};
