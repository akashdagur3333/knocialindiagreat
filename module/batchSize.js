
const mongoose = require('mongoose');


const Batch_size = mongoose.model("batch_size",{
    _id:{type:Number,required:true},
    batchSize:{type:Number,required:true},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}


})

module.exports={Batch_size}