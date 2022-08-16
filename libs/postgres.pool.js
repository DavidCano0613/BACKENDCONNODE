const { Pool } = require('pg');

const {config} = require('../config/config.js')

//*Asi el primer servicio que genere una conexión iniciara una conexión para todos la demás.

//*Todo con las variables de entorno


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const pool = new Pool ({connectionString: URI});

module.exports = pool;




