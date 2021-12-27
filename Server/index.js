const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connect = require("./config/db");
const router = require('./Route/userRoutes');
const Reportrouter = require('./Route/ReportRoute');
const app = express();

//connect to database
connect();

app.use(cors({
    origin :'*'
}));

app.use(bodyParser.json());
app.use('/',router);
app.use('/',Reportrouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is Running on Port ${PORT}`);
})



