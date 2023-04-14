"use strict";

var express = require('express');

var router = express.Router();

var categoryController = require('../../controller/categoryController');

router.post('/admin/category', categoryController.addCategory);
router.get('/admin/category', categoryController.showCategory);
router["delete"]('/admin/category/:_id', categoryController.deleteCategory);
router.put('/admin/category/:_id', categoryController.updateCategory);
module.exports = router;