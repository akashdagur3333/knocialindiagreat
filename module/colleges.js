const mongoose = require('mongoose');


const Colleges = mongoose.model("colleges",{
    _id:{type:Number,required:true},
    college_name:{type:String,required:true},
    college_city:{type:String,required:true},
    college_state:{type:String,required:true},
    college_pin_code:{type:Number,required:true},
    college_type:{type:String,required:true},
    tnp_head_name:{type:String},
    tnp_head_contact:{type:String},
    tnp_head_email:{type:String},
    status:{type:Number},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={Colleges}