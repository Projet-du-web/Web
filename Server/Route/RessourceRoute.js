const app = require('express');
const auth = require('../utils/auth')
const Ressourcerouter = app.Router();

const { 
       create_ressource,
       ressourceValiations,
       getRessource,
       getRessourceId,
       DeleteRess
}  = require('../Controller/ressource_controller');

Ressourcerouter.post('/create_ressource',ressourceValiations,create_ressource);
Ressourcerouter.get('/getRessource',getRessource);
Ressourcerouter.get('/getRessourceId/:id',getRessourceId)
Ressourcerouter.delete('/deleteRess/:id',DeleteRess);
module.exports = Ressourcerouter;