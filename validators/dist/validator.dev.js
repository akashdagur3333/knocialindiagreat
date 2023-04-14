"use strict";

var _require = require('express-validator'),
    check = _require.check;

var productValidator = [check('category', 'category is required').not().isEmpty(), check('productName', 'category is required').not().isEmpty(), check('description', 'category is required').not().isEmpty(), check('status', 'category is required').not().isEmpty()];
module.exports = {
  productValidator: productValidator
};