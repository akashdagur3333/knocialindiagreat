
const mongoose = require('mongoose');


const Shift = mongoose.model("shifts",{
    _id:{type:Number,required:true},
    shift_name:{type:String,required:true},
    shift_start:{type:String,required:true},
    shift_end:{type:String,required:true},
    shift_description:{type:String,required:true},
    break1:{type:String,required:true},
    break1_duration:{type:String,required:true},
    break2:{type:String,required:true},
    break2_duration:{type:String,required:true},
    break3:{type:String,required:true},
    break3_duration:{type:String,required:true},
    status:{type:String,required:true},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={Shift}