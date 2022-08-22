'use strict';
const {UserSchema,USER_TABLE}= require('./../models/user.model.js');

module.exports = {
  //
  up: async (queryInterface, Sequelize) =>{
    await queryInterface.createTable(USER_TABLE,UserSchema);
  },
  //
  down: async (queryInterface, Sequelize )=> {
    await queryInterface.dropTable(USER_TABLE);
  },
};

// queryInterface: Nos sirve para ejecutar los comandos. queryInterface es una API de sequelize que nos permite..

//up hace la creación de la migración
// donw hace un rollback es decir va hacia atras, revierte cambios es como revertir lo que se hizo en up

// Normalmente al primer migración cuando ya se tienen todos los modelos y se esta seguro se pueden crear cada uno de esos modelos esa seria la primer migración, luego de haber corrido la primer migración ya por cada cambio se empizan hacer las propias migraciones independientes. 


