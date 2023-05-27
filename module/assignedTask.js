
const mongoose = require('mongoose');


const AssignedTask = mongoose.model("assignedtask",{
    _id:{type:Number,required:true},
    tsk_id:{type:String},
    ast_id:{type:String},
    prt_id:{type:String},
    clt_id:{type:String},
    project_name:{type:String},
    client_name:{type:String},
    assign_to_department:{type:String},
    assign_by:{type:String},
    rpt_team_lead:{type:String},
    page_name:{type:String},
    task_description:{type:String},
    task_assign_to:{type:String},
    task_expiry_date:{type:String},
    remarks:{type:String},
    remark_Assign:{type:String},
    remark_reAssign:{type:String},
    remark_appliedforcheck:{type:String},
    remark_completed:{type:String},
    remark_failed:{type:String},
    status:{type:Number},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={AssignedTask}