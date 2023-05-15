
const mongoose = require('mongoose');


const Client = mongoose.model("client",{
    _id:{type:Number,required:true},
    client_name:{type:String},
    client_location:{type:String},
    contact_person:{type:String},
    contact_number:{type:Number},
    email_id:{type:String},
    address:{type:String},
    gst_number:{type:String},
    project_poc:{type:String},
    poc_contact:{type:Number},
    poc_email:{type:String},
    billing_currency:{type:String},
    client_type:{type:String},
    project_refrence:{type:String},
    status:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={Client}