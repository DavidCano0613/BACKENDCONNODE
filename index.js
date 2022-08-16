const express = require('express');
const { routerApi } = require('./routes/index.js');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler.js');

// const {} require('./schemas/usersSchemas.js')
const cors = require('cors')
const app = express();

const port = process.env.PORT || 3001;

//*Middlewares para parsear el body
app.use(express.json());


//*CORS
//*Le da acceso a todo el mundo
// app.use(cors());

//*Asi se da acceso solo a los que se supone que se contemplan
const whiteList = ['http://localhost:8080'] //*Tambien podrian ponerse dominios
const options = {
  origin: (origin,callback)=>{
    if(whiteList.includes(origin) || !origin){
      callback(null,true)
    } else{
      callback(new Error("No estas autorizado"))
    }
  }
}
app.use(cors(options));

//*Acceso a la capa de routing
routerApi(app);

//*Uso de middlewares de errores, deben ir despues del routing.
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//*Levantar el servidor de desarrollo
app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});


// (()=>{
//   //*Recibir parametros, en el requets solemos tener un objeto que se llama params que contiene todo lo que hemos agreado de parámetros. Usar destructuración para sacar los parámetros. Los endpoints que son espesificos deben ir antes de los que son dinamicos.
  // app.get('/', (req, res) => {
  //   try{
  //    return res.status(200).send('Acabas de hacer una petición a la raiz del servidor');
  //   } catch(error){
  //     return res.status(400).send('Hay un problema con tu petición')
  //   }
  // });

//   app.get('/home', (req, res) => {
//     console.log();
//     res.json({
//       rta: 'Respuesta del servidor al endpoint del home',
//     });
//   });
// })


