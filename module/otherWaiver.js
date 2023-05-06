const mongoose =require('mongoose');

const OtherWaiver = mongoose.model("otherwaiver",{
    _id:{type:Number},
    rpt_id:{type:String},
    name:{type:String},
    father_name:{type:String},
    amount:{type:Number},
    otherPending:{type:Number},
    gst_amount:{type:Number},
    waived_by:{type:String},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
});
module.exports={OtherWaiver}