"use strict";

var express = require('express');

var router = express.Router();

var productController = require('../../controller/productController');

var validators = require('../../validators/validator');

router.post('/admin/product', productController.addProduct);
router.get('/admin/product', productController.getProduct);
router.put('/admin/product/:_id', productController.updateProduct);
router["delete"]('/admin/product/:_id', productController.deleteProduct);
module.exports = router;