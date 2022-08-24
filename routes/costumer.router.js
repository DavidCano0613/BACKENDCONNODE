const express = require('express');
const customerRouter = express.Router();
const validatorHandler = require('../middlewares/validatorHandler.js')
const {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
} = require('../schemas/customerSchema.js');

const { CustomerService } = require('../services/customerService.js');
const customerService = new CustomerService();

customerRouter.get('/', async (req, res, next) => {
  try {
    const customers = await customerService.find();
    res.status(200).json(customers)
  }
  catch (error) {
    //*Esto lo  que hace es llamar a los middlewares de tipo error.
    next(error);
  }
});

customerRouter.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await customerService.findOne(id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
});

customerRouter.post('/',
validatorHandler(createCustomerSchema,'body'),
async (req, res) => {
  try {
    const body = req.body;
    const newCustomer = await customerService.create(body);
    res.status(201).json(newCustomer);
  } catch (error) {
    next(error)
  }
});

customerRouter.patch(
  '/:guid',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { guid } = req.params;
      const body = req.body;
      const updatedUser = await customerService.update(guid, body);
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  }
);

customerRouter.delete('/:guid',
  async (req, res) => {
    const { guid } = req.params;
    const deletedCustomer = await customerService.delete(guid)
    res.json(deletedCustomer);
  });


module.exports = { customerRouter }

