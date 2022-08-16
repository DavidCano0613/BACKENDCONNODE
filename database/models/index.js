// Este archivo se va encargar de enviar la conexción hacia lo modelos para poder hacer todos los mapeos

// van a estar toda la ocnfiguracíon y el setup inicial de sequelize con los modelos



const {User,UserSchema} = require('./user.model.js');

function setupModels(sequelize){
  User.init(UserSchema,User.config(sequelize));
}

module.exports = setupModels;

