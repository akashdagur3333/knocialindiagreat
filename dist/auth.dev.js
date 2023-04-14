"use strict";

var express = require('express');

var router = express.Router(); // const {Authanticate}=require('../backend/authenticate')

var userController = require('../backend/controller/userController');

router.post('/register', userController.register);
router.post('/login', userController.login); // router.get('/checkToken',Authanticate,userController.checkToken);
// router.post('/check',userController.checkUser);
// router.post('/forget-password',userController.forget_password);

router.get('/alluser', userController.getAllUser);
router["delete"]('/deleteuser/:_id', userController.deleteUser);
router.put('/updateUser/:_id', userController.updateUser);
module.exports = router;