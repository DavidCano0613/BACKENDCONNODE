const express = require('express');

const { routerApi } = require('./routes/index.js');

const { logErrors, errorHandler, boomErrorHandler  } = require('./middlewares/errorHandler.js');
const cors = require('cors')

const app = express();
const port = 3001;

app.use(express.json());

//*Le da acceso a todo el mundo
// app.use(cors());

//*Asi se da acceso solo a los que se supone que se contemplan
const whiteList = ['http://localhost:8080'] //*Tambien podrian ponerse dominios 
const options = {
  origin: (origin,callback)=>{
    if(whiteList.includes(origin)){
      callback(null,true)
    } else{
      callback(new Error("No estas autorizado"))
    }
  }
}

app.use(cors(options));


//*Acceso a la capa de routing
routerApi(app);

//*Uso de middlewares de errores, el orden es importante.
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App corriendo en el puerto ${port}`);
});




//*ROUTING CON EXPRESS:
//*FUNCIONAMENTO A PROFUNDIDAD DE GET.

//*Recibir parametros, en el requets solemos tener un objeto que se llama params que contiene todo lo que hemos agreado de parámetros. Usar destructuración para sacar los parámetros. Los endpoints que son espesificos deben ir antes de los que son dinamicos.
//   app.get('/', (req, res) => {
//     res.send('Respuesta del servidor a la ruta por defecto');
//   });

//   app.get('/home', (req, res) => {
//     res.json({
//       rta: 'Respuesta del servidor al endpoint del home',
//     });
//   });

