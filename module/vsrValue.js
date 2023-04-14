
const mongoose = require('mongoose');


const VsrValue = mongoose.model("vsrValue",{
    _id:{type:Number,required:true},
    vsr_value:{type:Number,required:true},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={VsrValue}