"use strict";

var express = require('express');

var router = express.Router();

var PlaceOrderController = require('../../controller/PlaceOrderController');

router.post('/order', PlaceOrderController.addOrder);
router.get('/order/:id', PlaceOrderController.AllOrder);
router.get('/order', PlaceOrderController.getAllOrder);
router["delete"]('/order/:id', PlaceOrderController.deleteOrder);
module.exports = router;