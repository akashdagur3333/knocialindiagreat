var {Package}=require('../module/package');
const counterSchema=require('../module/counter');


const addPackage=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"package_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"package_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var package= new Package({
                _id:seqId,
                package_name:req.body.package_name,
                stipend:req.body.stipend,
                training_days:req.body.training_days,
                basic:req.body.basic,
                mobile_internet:req.body.mobile_internet,
                project_allowance:req.body.project_allowance,
                other_allowance:req.body.other_allowance,
                incentives:req.body.incentives,
                special_all:req.body.special_all,
                gross_salary:req.body.gross_salary,
                benifits:req.body.benifits,
                esic:req.body.esic,
                pf:req.body.pf,
                admin:req.body.admin,
                resources_development:req.body.resources_development,
                social_welfare:req.body.social_welfare,
                variable_allowances:req.body.variable_allowances,
                gross_deduction:req.body.gross_deduction,
                ctcpm:req.body.ctcpm,
                ctcannual:req.body.ctcannual,
                net_pay:req.body.net_pay,
                ctcafter:req.body.ctcafter,
                txnMode:req.body.txnMode,
                created:req.body.created,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            package.save((err,docs)=>{
                if(!err){
                    res.json(docs);
                }
                else{
                    res.json(err);
                }
            });
        }
    )
        }

const getAllPackage=(req,res)=>{
    Package.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deletePackage= (req,res)=>{
    var deleteid=req.params.id;
    Package.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updatePackage=(req,res)=>{
    Package.findByIdAndUpdate(req.params.id,{
        package_name:req.body.package_name,
                stipend:req.body.stipend,
                training_days:req.body.training_days,
                basic:req.body.basic,
                mobile_internet:req.body.mobile_internet,
                project_allowance:req.body.project_allowance,
                other_allowance:req.body.other_allowance,
                incentives:req.body.incentives,
                special_all:req.body.special_all,
                gross_salary:req.body.gross_salary,
                benifits:req.body.benifits,
                esic:req.body.esic,
                pf:req.body.pf,
                admin:req.body.admin,
                resources_development:req.body.resources_development,
                social_welfare:req.body.social_welfare,
                variable_allowances:req.body.variable_allowances,
                gross_deduction:req.body.gross_deduction,
                ctcpm:req.body.ctcpm,
                ctcannual:req.body.ctcannual,
                net_pay:req.body.net_pay,
                ctcafter:req.body.ctcafter,
                txnMode:req.body.txnMode,
                created:req.body.created,
               updated_by:req.body.created_by,
               updated_at:Date.now()
    },(docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

module.exports={addPackage,getAllPackage,deletePackage,updatePackage}