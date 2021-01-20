//confi ROUTES


//importa expres
const express = require('express');

const UserController = require('./controllers/UserController')
//usando router que esta dento de express
const router = express.Router();


//criando rotas para CONSULTA de registros no BD 
router.get('/users', UserController.index);


//criando rotas para ENVIAR dados pra base de dados 
router.post('/users', UserController.store);

//criando rotas para ATUALIZAR dados pra base de dados 
router.put('/users/:user_id', UserController.update);

//criando rotas para DELETAR dados pra base de dados 
router.delete('/users/:user_id', UserController.delete);

//criando rotas para DELETAR dados pra base de dados 
router.post('/users/login', UserController.login)


module.exports = router;