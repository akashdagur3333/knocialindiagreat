
const mongoose = require('mongoose');


const ClientInvoice = mongoose.model("clientinvoice",{
    _id:{type:Number,required:true},
    invoice:{type:Array},
    // clt_id:{type:String},
    // client_type:{type:String},
    // client_name:{type:String},
    // prt_id:{type:String},
    // status:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={ClientInvoice}