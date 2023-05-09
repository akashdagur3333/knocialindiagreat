const mongoose =require('mongoose');

const InTraining = mongoose.model("intraining",{
    _id:{type:Number},
    data:{type:Array},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
});
module.exports={InTraining}