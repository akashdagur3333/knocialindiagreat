"use strict";

var express = require('express');

var _require = require('../authenticate'),
    Authanticate = _require.Authanticate;

var router = express.Router();

var foodController = require('../controller/foodController');

var _require2 = require('../role'),
    authPage = _require2.authPage;

router.post('/', foodController.addFood);
router.get('/', Authanticate, authPage(["user"]), foodController.showfood);
module.exports = router;