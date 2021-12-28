const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require("./config/db");
const router = require('./Route/userRoutes');
const Ressourcerouter = require('./Route/RessourceRoute');
const app = express();

//connect to database
connect();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/',router);
app.use('/',Ressourcerouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is Running on Port ${PORT}`);
})



