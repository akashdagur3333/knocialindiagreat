const mongoose=require('mongoose');

const product= mongoose.model("products",{
    _id:{type:Number},
    category:{type:String,required:true},
    productName:{type:String,required:true},
    productPrice:{type:Number,required:true},
    description:{type:String,max:20},
    unit:{type:String,required:true},
    status:{type:Boolean,required:true},
    created_at:{type:Date,required:true,default:Date.now
},
    created_by:{type:String,required:true},
    updated_at:{type:Date},
    update_by:{type:String},
    deleted_by:{type:String},
    deleted_at:{type:Date}
})

module.exports={product}