const express=require('express');
const router=express.Router();
const addCartController=require('../../controller/addCartController');

router.post('/addCart',addCartController.addtoCart);
router.get('/addCart/:id',addCartController.showCart);
router.get('/addCart/',addCartController.showCartsData);
router.delete('/addCart/:id',addCartController.deleteCart);
module.exports=router;