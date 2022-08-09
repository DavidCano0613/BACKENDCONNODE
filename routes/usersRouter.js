const express = require('express');
const {UsersService} = require('../services/usersService.js');
const usersRouter = express.Router();

// const {validatorHandler} = require('../middlewares/validatorHandler.js');
// const {createUserSchema,getUserSchema,updateUserSchema} = require('../schemas/usersSchemas.js')

const userService = new UsersService();

usersRouter.get('/', async (req,res,next) => {
  try{
    const users = await userService.find();
    res.json(users)
  }
  catch(error){
    next(error);
  }
});

//*Ejemplo con promesas 
(()=>{
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



usersRouter.get('/:guid',
async (req, res, next) => {
  try{
      const { guid } = req.params;
      const user = await userService.findOne(guid);
      res.json(user);
  } catch(error){
    //*Esto lo  que hace es llamar a los middlewares de tipo error.
   next(error);
  }
});

usersRouter.post('/',async (req,res)=>{
  const body = req.body;
  const newUser = await userService.create(body);
  res.status(201).json(newUser);
})

usersRouter.patch('/:guid',
async (req, res, next) => {
  try {
  const {guid} = req.params;
  const body = req.body
  const updatedUser = await userService.update(guid,body)
  res.json(updatedUser);
  }
  catch(error){
    next(error);
  }
});

usersRouter.delete('/:guid',
async (req, res) => {
  const { guid } = req.params;
  const deletedUser = await userService.delete(guid)
  res.json(deletedUser);
});

module.exports = {usersRouter}
