const express = require('express');
const { routerApi } = require('./routes/index.js');
const {logErrors,errorHandler} require('./middlewares/errorHandler.js')
const app = express();
const port = 3001;

app.use(express.json());

routerApi(app);

app.use(logErrors)
app.use(errorHandler)

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




