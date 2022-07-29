const { dataBase } = require('../database.js');

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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 5000);
    });
  }

  async findOne(guid) {
    return this.users.find((usuario) => usuario.guid === guid);
  }

  async create(data) {
    const newUser = {
      guid: '1000396156',
      ...data,
    };
    this.users.push(newUser);
    return newUser;
  }

  async update(guid, changes) {
    const userIndex = this.users.findIndex((user) => user.guid === guid);
    if (userIndex === -1) {
      throw new Error('Usuario no encontrado');
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
      throw new Error('Usuario no encontrado');
    }
    this.users.splice(userIndex, 1);
    return { guid };
  }
}

module.exports = { UsersService };

// const array = [1,2,3,4,5,6,7,7,8]
// console.log(array.splice(0,1))
