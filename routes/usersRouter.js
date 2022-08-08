const express = require('express');

const {UsersService} = require('../services/usersService.js');

const usersRouter = express.Router();

// const {validatorHandler} = require('../middlewares/validatorHandler.js');
// const {createUserSchema,getUserSchema,updateUserSchema} = require('../schemas/usersSchemas.js')

const usuarios = new UsersService();


usersRouter.get('/', async (req,res,next) => {
  try{
    const users = await usuarios.find()
    res.json(users)
  }
  catch(error){
    next(error);
  }
});

usersRouter.get('/:guid',
async (req, res, next) => {
  try{
      const { guid } = req.params;
      const user = await usuarios.findOne(guid);
      res.json(user);
  } catch(error){
    //*Esto lo  que hace es llamar a los middlewares de tipo error.
   next(error);
  }
});

usersRouter.post('/',async (req,res)=>{
  const body = req.body;
  const newUser = await usuarios.create(body);
  res.status(201).json(newUser);
})

usersRouter.patch('/:guid',
async (req, res, next) => {
  try {
  const {guid} = req.params;
  const body = req.body
  const updatedUser = await usuarios.update(guid,body)
  res.json(updatedUser);
  }
  catch(error){
    next(error);
  }
});

usersRouter.delete('/:guid',
async (req, res) => {
  const { guid } = req.params;
  const deletedUser = await usuarios.delete(guid)
  res.json(deletedUser);
});

module.exports = {usersRouter}
