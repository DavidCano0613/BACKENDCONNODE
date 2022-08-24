const { models } = require('./../libs/sequelize.js');
const boom = require('@hapi/boom');

class CustomerService {
  constructor() {
    this.users = [];
    this.guid;
    this.name;
  }

  async find() {
    const response = await models.Customer.findAll();
    return response;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id)
    if(!customer) throw boom.notFound('user not found');
    return customer;
  }

  async create(data) {
    const newCustomer = await models.Customer.create(data);
    return newCustomer;
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const updated = await user.update(changes);
    return updated;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return {id}
  }
}

module.exports = { CustomerService };
