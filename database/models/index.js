//* Este archivo se va encargar de enviar la conexión hacia lo modelos para poder hacer todos los mapeos.

//* Va a estar toda la configuración y el setup inicial de sequelize con los modelos.

const {User,UserSchema} = require('./user.model.js');
const {Customer,CustomerSchema} = require('./customer.model.js');

function setupModels(sequelize){
  User.init(UserSchema,User.config(sequelize));
  Customer.init(CustomerSchema,Customer.config(sequelize));
  Customer.associate(sequelize.models);
}

module.exports = setupModels;

