const { dataBase } = require('../database.js');
const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize.js');
class UsersService {
  constructor() {
    this.users = [];
    this.generate();
    this.guid;
    this.name;
    this.favoriteFruit;
  }

  generate() {
    for (let i = 0; i < 10; i++) {
      const usuario = dataBase[i];
      this.users.push(usuario);
    }
  }

  async find() {
    const response = await models.User.findAll();
    return response;
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(this.users);
    //   }, 5000);
    // });
  }

  async findOne(id) {
    const user = await models.User.findByPk(id)
    if(!user) throw boom.notFound('user not found');
    return user;
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async update(id, changes) {
    const user = await this.findOne(id)
    const updated = await user.update(changes);
    return updated
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return {id}
  }
}

module.exports = { UsersService };

