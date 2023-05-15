
const mongoose = require('mongoose');


const AddOrder = mongoose.model("addorder",{
    _id:{type:Number,required:true},
    project:{type:Array},
    order_for:{type:String},
    client_name:{type:String},
    client_type:{type:String},
    clt_id:{type:String},
    status:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={AddOrder}