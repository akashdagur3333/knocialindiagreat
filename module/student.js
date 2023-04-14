const mongoose = require('mongoose');


const Students = mongoose.model("students",{
    _id:{type:Number,required:true},
    drv_id:{type:String,required:true},
    clg_id:{type:String,required:true},
    clg_name:{type:String,required:true},
    drive_type:{type:String,required:true},
    aadhar_number:{type:Number,required:true},
    name:{type:String,required:true},
    sex:{type:String,required:true},
    qualification:{type:String,required:true},
    stream:{type:String,required:true},
    package:{type:String,required:true},
    contact_no1:{type:Number,required:true},
    contact_no2:{type:Number,required:true},
    status:{type:String,required:true},
    hr_remarks:{type:String,required:true},
    created_by:{type:String,required:true},
    created_at:{type:Date,required:true},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={Students}