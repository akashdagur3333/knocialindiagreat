"use strict";

var express = require('express');

var router = express.Router();

var _require = require('./authenticate'),
    Authanticate = _require.Authanticate;

var _require2 = require('./role'),
    authRole = _require2.authRole;

var userController = require('./controller/userController');

router.post('/register', authRole(['admin']), userController.register);
router.post('/login', userController.login);
router.get('/checkToken', Authanticate, userController.checkToken); // router.post('/check',userController.checkUser);
// router.post('/forget-password',userController.forget_password);

router.get('/alluser', userController.getAllUser);
router["delete"]('/deleteuser/:_id', userController.deleteUser);
router.put('/updateUser/:_id', authRole(['admin']), userController.updateUser);
module.exports = router;