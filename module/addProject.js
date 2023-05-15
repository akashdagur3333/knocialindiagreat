
const mongoose = require('mongoose');


const AddProject = mongoose.model("addproject",{
    _id:{type:Number,required:true},
    clt_id:{type:String},
    client_name:{type:String},
    project_category:{type:String},
    project_type:{type:String},
    project_name:{type:String},
    payment_type:{type:String},
    due_date:{type:String},
    project_description:{type:String},
    project_cost:{type:Number},
    gst_slab:{type:String},
    project_delivery_date:{type:String},
    domain_details:{type:String},
    hosting_details:{type:String},
    status:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={AddProject}