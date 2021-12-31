const app = require('express');
const auth = require('../utils/auth')
const Ressourcerouter = app.Router();

const { 
       create_ressource,
       ressourceValiations,
       getRessource,
       getRessourceId
}  = require('../Controller/ressource_controller');

Ressourcerouter.post('/create_ressource',ressourceValiations,create_ressource);
Ressourcerouter.get('/getRessource',getRessource);
Ressourcerouter.get('/getRessourceId/:id',getRessourceId)
module.exports = Ressourcerouter;