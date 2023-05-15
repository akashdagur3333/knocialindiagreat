
const mongoose = require('mongoose');


const RefundPayment = mongoose.model("refundPayment",{
    _id:{type:Number,required:true},
    rfd_id:{type:String},
    rpt_id:{type:String},
    name:{type:String},
    payment_type:{type:String},
    amount:{type:Number},
    payment_mode:{type:String},
    bank_ledger:{type:String},
    booking_year:{type:String},
    payment_date:{type:String},
    txn_id:{type:String},
    director_remarks:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}
})

module.exports={RefundPayment}