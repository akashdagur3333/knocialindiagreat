const express =require('express');
const bodyParser = require('body-parser');
const { Mongoose} = require('./db');
var user= require('../backend/auth');
const cors = require('cors');
var food =require('../backend/foodrouting/foodroute')


var app =express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));
app.listen(3000,()=>console.log("Server started at port 3000"));

app.use('/user',user);
app.use('/food',food);
