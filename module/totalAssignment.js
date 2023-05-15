
const mongoose = require('mongoose');


const TotalAssignment = mongoose.model("totalAssignment",{
    _id:{type:Number,required:true},
    ast_id:{type:String},
    prt_id:{type:String},
    project_name:{type:String},
    order_for:{type:String},
    clt_id:{type:String},
    client_name:{type:String},
    assign_to_department:{type:String},
    team_lead:{type:String},
    assignment_date:{type:String},
    delivery_date:{type:String},
    remarks:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={TotalAssignment}