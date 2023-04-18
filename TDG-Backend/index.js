const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConexion } = require('./database/config');

console.log( process.env );

//Servidor de express
const app = express();

// Base de datos
dbConexion();

//CORS
app.use(cors())

//Directorio publico
app.use(express.static('public'))

// Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/productos', require('./routes/productos'));
// TODO: CRUD: Eventos 




//Escuchar peticiones
app.listen(process.env.port, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.port}`)
});