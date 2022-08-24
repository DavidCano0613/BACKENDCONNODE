const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(5).max(15);
const phone = Joi.number().integer().min(8).max(20);


const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  lasName: lastName.required(),
  phone:phone.required(),
})

const updateCustomerSchema = Joi.object({
  name,
  lastName,
  phone,
});

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema
}

