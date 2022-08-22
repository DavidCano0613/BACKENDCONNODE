const { Pool } = require('pg');
const {config} = require('../config/config.js')

//*De esta froma el primer servicio que genere una conexión con la base de datos, hara que esta se reutilice en toda la app.

//*Todo con las variables de entorno

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

//*Creación de la URL de conexión. En un proyecto pueden ya pasarte esta URL.

//*Esta es la sintaxis, esto es una url que tiene toda la información de conexión a la base de datos pero con variables de entorno.
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

//*Al Pool le pasamos la URI y no es necesario usar .connect()
const pool = new Pool ({connectionString: URI});

module.exports = pool;




