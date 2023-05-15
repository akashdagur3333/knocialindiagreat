
const mongoose = require('mongoose');


const Relieving = mongoose.model("relieving",{
    _id:{type:Number,required:true},
    name:{type:String},
    rpt_id:{type:String},
    father_name:{type:String},
    aadhar_number:{type:Number},
    leftStatus:{type:Number},
    training_start:{type:String},
    training_completed:{type:String},
    doj:{type:String},
    seperation_date:{type:String},
    emp_type:{type:String},
    left_hr_remarks:{type:String},
    rejoining:{type:String},
    vsr_status:{type:String},
    final_hr_remarks:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}
})

module.exports={Relieving}