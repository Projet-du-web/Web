const app = require('express');
const auth = require('../utils/auth')
const Ressourcerouter = app.Router();

const { 
       create_ressource,
       ressourceValiations
}  = require('../Controller/ressource_controller');

Ressourcerouter.post('/create_ressource',auth,ressourceValiations,create_ressource);
module.exports = Ressourcerouter;