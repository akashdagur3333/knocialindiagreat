const  express =require('express');
const router = express.Router();
const {Authanticate}=require('./authenticate')
const {authRole}=require('./role')

var userController =require('./controller/userController');



router.post('/register',authRole(['admin']),userController.register);
router.post('/login',userController.login);
router.get('/checkToken',Authanticate,userController.checkToken);
// router.post('/check',userController.checkUser);
// router.post('/forget-password',userController.forget_password);
router.get('/alluser',userController.getAllUser);
router.delete('/deleteuser/:_id',userController.deleteUser);
router.put('/updateUser/:_id',authRole(['admin']),userController.updateUser);



module.exports=router;