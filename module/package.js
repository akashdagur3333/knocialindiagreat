
const mongoose = require('mongoose');


const Package = mongoose.model("package",{
    _id:{type:Number,required:true},
    package_name:{type:String,required:true},
    stipend:{type:String,required:true},
    training_days:{type:String},
    basic:{type:String},
    mobile_internet:{type:String},
    project_allowance:{type:String},
    other_allowance:{type:String},
    incentives:{type:String},
    special_all:{type:String},
    gross_salary:{type:String},
    benifits:{type:String},
    esic:{type:String},
    pf:{type:String},
    admin:{type:String},
    resources_development:{type:String},
    social_welfare:{type:String},
    variable_allowances:{type:String},
    gross_deduction:{type:String},
    ctcpm:{type:String},
    ctcannual:{type:String},
    net_pay:{type:String},
    ctcafter:{type:String},
    txnMode:{type:String},
    created:{type:String},
    created_by:{type:String},
    created_at:{type:Date},
    updated_by:{type:String},
    updated_at:{type:Date}
})

module.exports={Package}