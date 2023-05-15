
const mongoose = require('mongoose');


const Refund = mongoose.model("refund",{
    _id:{type:Number,required:true},
    rpt_id:{type:String},
    emp_type:{type:String},
    name:{type:String},
    father_name:{type:String},
    aadhar_number:{type:Number},
    offer_letter_id:{type:String},
    sex:{type:String},
    reporting_date:{type:String},
    total_value:{type:Number},
    paid_value:{type:Number},
    pending_value:{type:Number},
    refund_value:{type:Number},
    state_reason:{type:String},
    which_policy:{type:String},
    director_consent:{type:String},
    approx_date:{type:String},
    remarks:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}
})

module.exports={Refund}