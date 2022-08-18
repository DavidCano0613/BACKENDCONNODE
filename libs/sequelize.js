//*CONFIGURACIÓN Y CONEXIÓN CON LA DB

//Requerimos la libreria como tal
const { Sequelize } = require('sequelize');


const { config } = require('../config/config.js');
const setupModels = require('./../database/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI,{
  dialect:'postgres',
  logging:true,
});

// Recibe la conexión
setupModels(sequelize);

// Para que haga la sincronización con los modelos
sequelize.sync();

module.exports = sequelize;

// Tambien trabajamos con el esquema que va tener la base de datos
