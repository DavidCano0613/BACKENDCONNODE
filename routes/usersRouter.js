const express = require('express')
const usersRouter = express.Router()
const {UsersService} = require('../services/usersService.js')

const usuarios = new UsersService();

usersRouter.get('/',async (req,res) => {
  const users = await usuarios.find()
  res.json(users)
});

// usersRouter.get('/filter', (req, res) => {
//   res.send('Hola soy un filter de usuarios');
// });

usersRouter.get('/:guid', async (req, res) => {
  const { guid } = req.params;
  const user = await usuarios.findOne(guid)
  res.json(user);
});


usersRouter.post('/', async (req,res)=>{
  const body = req.body;
  const newUser = await usuarios.create(body)
  res.status(201).json(newUser)
})

usersRouter.patch('/:guid', async (req, res) => {
  try{
  const {guid} = req.params;
  const body = req.body
  const updatedUser = await usuarios.update(guid,body)
  res.json(updatedUser);
  }
  catch(error){
    res.status(404).json({
      message:error.message
    })
  }
});

usersRouter.delete('/:guid', async (req, res) => {
  const { guid } = req.params;
  const deletedUser = await usuarios.delete(guid)
  res.json(deletedUser);
});

module.exports = {usersRouter}
