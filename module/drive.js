const mongoose = require('mongoose');


const Drives = mongoose.model("drives",{
    _id:{type:Number,required:true},
    clg_id:{type:String,required:true},
    clg_name:{type:String,required:true},
    college_city:{type:String,required:true},
    college_state:{type:String,required:true},
    college_pin_code:{type:String,required:true},
    college_type:{type:String,required:true},
    drive_type:{type:String,required:true},
    drive_date:{type:Date,required:true},
    team_lead:{type:String,required:true},
    hr_name:{type:String,required:true},
    technical_person:{type:String,required:true},
    mode_of_travel:{type:String},
    travel_type:{type:String},
    created_by:{type:String,required:true},
    created_at:{type:Date,required:true},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={Drives}