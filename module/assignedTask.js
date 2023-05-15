
const mongoose = require('mongoose');


const AssignedTask = mongoose.model("assignedtask",{
    _id:{type:Number,required:true},
    tsk_id:{type:String},
    ast_id:{type:String},
    prt_id:{type:String},
    clt_id:{type:String},
    department:{type:String},
    team_lead:{type:String},
    task_assign_to:{type:String},
    task_expiry_date:{type:String},
    assigned_by:{type:String},
    remarks:{type:String},
    status:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={AssignedTask}