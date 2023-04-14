const express=require('express');
const router=express.Router();
const productController=require('../../controller/productController');
const validators=require('../../validators/validator');

router.post('/admin/product',productController.addProduct);
router.get('/admin/product',productController.getProduct);
router.put('/admin/product/:_id',productController.updateProduct);
router.delete('/admin/product/:_id',productController.deleteProduct);

module.exports=router