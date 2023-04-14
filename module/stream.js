
const mongoose = require('mongoose');


const Stream = mongoose.model("stream",{
    _id:{type:Number,required:true},
    qualification_name:{type:String,required:true},
    stream:{type:String,required:true},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={Stream}