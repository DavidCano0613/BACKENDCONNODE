const { Client } = require('pg')

//*Creación de función asincrona para establecer la conexión.
const getConnection = async ()=> {
  const client =  new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'my_store'
  });
  await client.connect()
  //*Se debe retornar el client para el que lo reciba pueda ejecutar consultas
  return client;
}

module.exports = getConnection;
