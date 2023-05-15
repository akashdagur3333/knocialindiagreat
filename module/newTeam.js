
const mongoose = require('mongoose');


const NewTeam = mongoose.model("newteam",{
    _id:{type:Number,required:true},
    team_lead_rpt_id:{type:String},
    team_lead_name:{type:String},
    team_lead_department:{type:String},
    team_member:{type:Array},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={NewTeam}