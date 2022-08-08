const { dataBase } = require('../database.js');
const boom = require('@hapi/boom');
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
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 5000);
    });
  }

  async findOne(guid) {
   const user = this.users.find((usuario) => usuario.guid === guid);
    if (!user){
      throw boom.notFound('User not found');
    };
    return user;
  }

  async create(data) {
    const newUser = {
      guid: (Math.random()*20),
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async update(guid, changes) {
    const userIndex = this.users.findIndex((user) => user.guid === guid);
    if (userIndex === -1){
      throw boom.notFound('User not found');
    }
    const usuario = this.users[userIndex];
    this.users[userIndex] = {
      ...usuario,
      ...changes,
    };
    return this.users[userIndex];
  }

  async delete(guid) {
    const userIndex = this.users.findIndex((user) => user.guid === guid);
    if (userIndex === -1) {
      throw boom.notFound('User not found');
    }
    this.users.splice(userIndex,1);
    return { guid };
  }
}

module.exports = { UsersService };

