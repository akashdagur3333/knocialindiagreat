const mongoose = require('mongoose');
var user = mongoose.model("user",{
    _id:{type:Number},
    username:{type:String,min:5,max:10},
    email:{type:String},
    password:{type:String,min:5},
    role:{type:Array},
    status:{type:Boolean}
}); 
module.exports={user};