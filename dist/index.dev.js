"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var _require = require('./db'),
    Mongoose = _require.Mongoose;

var user = require('../backend/auth');

var category = require('../backend/routing/categoryRouting/category-route');

var product = require('../backend/routing/categoryRouting/product-route');

var addCart = require('../backend/routing/categoryRouting/addCart-route');

var order = require('../backend/routing/categoryRouting/orders-route');

var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://myprojects-907fe.web.app'
}));
app.listen(3000, function () {
  return console.log("Server started at port 3000");
});
app.use('/user', user);
app.use('/', category);
app.use('/', product);
app.use('/', addCart);
app.use('/', order);