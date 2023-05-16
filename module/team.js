
const mongoose = require('mongoose');


const Team = mongoose.model("team",{
    _id:{type:Number,required:true},
    team_lead:{type:Array},
    team_member:{type:Array},
    created_by:{type:String},
    created_at:{type:String},
    updated_by:{type:String},
    updated_at:{type:String}


})

module.exports={Team}