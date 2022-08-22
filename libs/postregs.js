const { Client } = require('pg')

//*Establecer la conexión por medio de una función asincrona.
const getConnection = async () => {
  const client =  new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '123456',
    database: 'my_store'
  });

  //*La conexión da también como retorno una promesa.
  await client.connect()

  //*Se debe retornar el client para el que lo reciba pueda ejecutar consultas.
  return client;
}

module.exports = {getConnection};
