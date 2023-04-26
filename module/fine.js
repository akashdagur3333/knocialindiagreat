const mongoose =require('mongoose');

const Fine = mongoose.model("fine",{
    _id:{type:Number},
    rpt_id:{type:String},
    name:{type:String},
    father_name:{type:String},
    imposed_date:{type:Date},
    amount:{type:Number},
    imposed_by:{type:String},
    remarks:{type:String},
    gst_amount:{type:Number},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
});
module.exports={Fine}