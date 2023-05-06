const mongoose = require('mongoose');


const Students = mongoose.model("students",{
    _id:{type:Number},
    drv_id:{type:String},
    clg_id:{type:String},
    clg_name:{type:String},
    category:{type:String},
    type:{type:String},
    drive_type:{type:String},
    aadhar_number:{type:Number},
    name:{type:String},
    sex:{type:String},
    qualification:{type:String},
    stream:{type:String},
    package:{type:String},
    contact_no1:{type:Number},
    contact_no2:{type:Number},
    refrence_contact:{type:Number},
    refrence_name:{type:String},
    status:{type:String},

    college_name:{type:String},
    college_city:{type:String},
    college_state:{type:String},
    College_pin_code:{type:Number},
    college_type:{type:String},

    hr_remarks:{type:String},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={Students}