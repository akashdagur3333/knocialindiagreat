
const mongoose = require('mongoose');


const Head_department = mongoose.model("head_department",{
    _id:{type:Number,required:true},
    name:{type:String,required:true},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}


})

module.exports={Head_department}