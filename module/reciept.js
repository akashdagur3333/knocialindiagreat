const mongoose =require('mongoose');

const Reciept = mongoose.model("reciept",{
    _id:{type:Number},
    rpt_id:{type:String},
    reciept_serial:{type:String},
    ol_serial:{type:String},
    name:{type:String},
    father_name:{type:String},
    financial_year:{type:String},
    ledger:{type:String},
    type:{type:String},
    amount:{type:Number},
    txn_id:{type:String},
    submited_at:{type:String},
    gst_amount:{type:String},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
});
module.exports={Reciept}