const mongoose =require('mongoose');

const category = mongoose.model("categories",{
    _id:{type:Number},
    categoryName:{type:String},
    status:{type:Boolean}
});
module.exports={category}