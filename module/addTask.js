
const mongoose = require('mongoose');


const TotalTask = mongoose.model("totaltask",{
    _id:{type:Number,required:true},
    ast_id:{type:String},
    prt_id:{type:String},
    clt_id:{type:String},
    project_name:{type:String},
    client_name:{type:String},
    assign_to_department:{type:String},
    team_lead:{type:String},
    page_name:{type:String},
    task_description:{type:String},
    file:{type:String},
    remarks:{type:String},
    status:{type:String},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}
})

module.exports={TotalTask}