var {Sub_department}=require('../module/sub_department');
const counterSchema=require('../module/counter');


const addSubDepartment=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"subDepartment_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"subDepartment_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var sub_department= new Sub_department({
                _id:seqId,
                head_department:req.body.head_department,
                Sub_department:req.body.Sub_department,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            sub_department.save((err,docs)=>{
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

const getAllSubDepartment=(req,res)=>{
    Sub_department.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteSubDepartment= (req,res)=>{
    var deleteid=req.params.id;
    Sub_department.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateSubDepartment=(req,res)=>{
    Sub_department.findByIdAndUpdate(req.params.id,{
        head_department:req.body.head_department,
        Sub_department:req.body.Sub_department,
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

module.exports={addSubDepartment,getAllSubDepartment,deleteSubDepartment,updateSubDepartment}