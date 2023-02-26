const mongoose =require('mongoose');
var food =mongoose.model("foods",{
   _id:{type:Number},
    price:{type:Number},
    name:{type:String},
    tags:{type:[]},
    imageUrl:{type:String},
    cookTime:{type:String},
    origins:{type:[]}
});
module.exports={food};