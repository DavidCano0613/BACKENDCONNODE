const sequelize = require('../libs/sequelize.js');

class Products {
  constructor(){
    this.products = [];
  }

  async find(){
    const allProducts = 'SELECT * FROM task';
    const [data,metadata] = await sequelize.query(allProducts);
    return {
      data,
      metadata
    };
  }

  async findOne(){}

  async create(){}

  async update(){}

  async delete(){}

}

module.exports = Products
