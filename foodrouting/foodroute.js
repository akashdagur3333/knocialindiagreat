const  express =require('express');
const { Authanticate } = require('../authenticate');
const router = express.Router();
var foodController =require('../controller/foodController');
const {authPage} =require('../role')

router.post('/',foodController.addFood);
router.get('/',Authanticate,authPage(["user"]),foodController.showfood);

module.exports=router