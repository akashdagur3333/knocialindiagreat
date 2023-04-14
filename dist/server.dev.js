"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var _require = require('./db'),
    Mongoose = _require.Mongoose;

var http = require('http');

var user = require('./auth');

var category = require('./routing/categoryRouting/category-route');

var product = require('./routing/categoryRouting/product-route');

var addCart = require('./routing/categoryRouting/addCart-route');

var order = require('./routing/categoryRouting/orders-route');

var hrManagement = require('./Routes/trainingRoute');

var setting = require('./Routes/settingRoute');

var cors = require('cors');

var server = http.createServer(function (req, res) {
  res.writeHead(200);
  res.end("hello world");
});
var app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200'
}));
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  return console.log("server is running on port 3000");
}); // app.listen(3000,()=>console.log("Server started at port 3000"));

app.use('/user', user);
app.use('/', category);
app.use('/', product);
app.use('/', addCart);
app.use('/', order);
app.use('/', hrManagement);
app.use('/', setting);