const express = require('express');
const usersRouter = express.Router();
const validatorHandler = require('../middlewares/validatorHandler.js')
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require('../schemas/usersSchemas.js');
const { UsersService } = require('../services/usersService.js');

// *No va correr de forma generica es decir de forma para todos en general, si no que cada endopoint debe definir su esquema como sado los datos de validación diferente y por lo tanto se debe definir en cada uno.

const userService = new UsersService();

usersRouter.get('/', async (req, res, next) => {
  try {
    const users = await userService.find();
    res.status(200).json(users)
  }
  catch (error) {
    //*Esto lo  que hace es llamar a los middlewares de tipo error.
    next(error);
  }
});

usersRouter.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userService.findOne(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

usersRouter.post('/',
validatorHandler(createUserSchema,'body'),
async (req, res) => {
  try {
    const body = req.body;
    const newUser = await userService.create(body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error)
  }
});

usersRouter.patch(
  '/:guid',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { guid } = req.params;
      const body = req.body;
      const updatedUser = await userService.update(guid, body);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

usersRouter.delete('/:guid',
  async (req, res) => {
    const { guid } = req.params;
    const deletedUser = await userService.delete(guid)
    res.json(deletedUser);
  });

//*Ejemplo con promesas
(() => {
  // usersRouter.get('/',  (req,res,next) => {
  //   return new Promise((resolve,reject)=>{
  //     const users = userService.find();
  //     if(users){
  //       resolve(users);
  //     }
  //     else{
  //       reject(users)
  //     }
  //   })
  //   .then(users => res.json(users))
  //   .catch(error => next(error))
  // });
})

module.exports = { usersRouter }
