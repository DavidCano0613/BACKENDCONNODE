//* Este archivo se va encargar de enviar la conexión hacia lo modelos para poder hacer todos los mapeos.

//* Va a estar toda la configuración y el setup inicial de sequelize con los modelos.

const {User,UserSchema} = require('./user.model.js');

function setupModels(sequelize){
  User.init(UserSchema,User.config(sequelize));
}

module.exports = setupModels;

