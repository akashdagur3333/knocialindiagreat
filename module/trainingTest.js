
const mongoose = require('mongoose');


const TrainingTest = mongoose.model("trainingtest",{
    _id:{type:Number,required:true},
    test_name:{type:String},
    test_date:{type:Date},
    test_start:{type:String},
    test_timing:{type:Number},
    test_status:{type:String},
    question:{type:Array},
    user:{type:Array},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={TrainingTest}