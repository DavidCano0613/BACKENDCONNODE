const Joi = require('joi')
const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15).required();
const email = Joi.string().email().min(5).max(15)
const password = Joi.string().min(8).max(20)
const role = Joi.string().min(5).max(20)

const getUserSchema = Joi.object({
  id: id.required(),
});

const createUserSchema = Joi.object({
  name: name,
  email: email.required(),
  password:password.required(),
  role: role.required()
})

const updateUserSchema = Joi.object({
  id: id.required(),
  name: name,
  role: role.required()
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
}


