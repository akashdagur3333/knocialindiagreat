const {check}=require('express-validator');

const productValidator =[
    check('category','category is required').not().isEmpty(),
    check('productName','category is required').not().isEmpty(),
    check('description','category is required').not().isEmpty(),
    check('status','category is required').not().isEmpty(),
]

module.exports={productValidator}