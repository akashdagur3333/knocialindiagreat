const express=require('express');
const router=express.Router();
const PlaceOrderController=require('../../controller/PlaceOrderController');

router.post('/order',PlaceOrderController.addOrder);
router.get('/order/:id',PlaceOrderController.AllOrder);
router.get('/order',PlaceOrderController.getAllOrder);
router.delete('/order/:id',PlaceOrderController.deleteOrder);

module.exports=router