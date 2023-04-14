const mongoose = require('mongoose');


const Office_location = mongoose.model("office_locations",{
    _id:{type:Number,required:true},
    office_name:{type:String,required:true},
    address:{type:String,required:true},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}


})

module.exports={Office_location}