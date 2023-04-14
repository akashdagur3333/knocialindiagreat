const express =require('express');
const bodyParser = require('body-parser');
const { Mongoose} = require('./db');
const http =require('http');
var user= require('./auth');
// var category=require('./routing/categoryRouting/category-route');
// var product=require('./routing/categoryRouting/product-route');
// var addCart=require('./routing/categoryRouting/addCart-route');
// var order=require('./routing/categoryRouting/orders-route');
var hrManagement=require('./Routes/trainingRoute');
var setting=require('./Routes/settingRoute');
const cors = require('cors');


const server=http.createServer((req,res)=>{
    res.writeHead(200);
    res.end("hello world")
});
var app =express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

const PORT =process.env.PORT || 3000;
// server.listen(PORT,()=>console.log("server is running on port 3000"))
app.listen(PORT,()=>console.log("Server started at port 3000"));



// app.use('/user',user);
// app.use('/',category);
// app.use('/',product);
// app.use('/',addCart);
// app.use('/',order);

// app.use('/',hrManagement);
// app.use('/',setting);
