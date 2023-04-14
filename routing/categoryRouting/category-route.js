const express=require('express');
const router=express.Router();
const categoryController =require('../../controller/categoryController');

router.post('/admin/category',categoryController.addCategory);
router.get('/admin/category',categoryController.showCategory);
router.delete('/admin/category/:_id',categoryController.deleteCategory);
router.put('/admin/category/:_id',categoryController.updateCategory);

module.exports=router;