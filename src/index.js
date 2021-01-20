//Importando o express
const express = require('express');

//Importando Routes
const routes = require('./routes')

require('./config/database/index')
//Intanciando o express
const app = express();

//dixendo pro app que utilizarei a estruturaa json
app.use(express.json());

app.use(routes);


//criando servidor no localhost 
app.listen(3333);