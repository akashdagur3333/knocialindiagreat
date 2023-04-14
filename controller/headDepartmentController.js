var {Head_department}=require('../module/head_department');
const counterSchema=require('../module/counter');


const addDepartment=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"headDepartment_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"headDepartment_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var head_department= new Head_department({
                _id:seqId,
                name:req.body.name,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            head_department.save((err,docs)=>{
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

const getAllDepartments=(req,res)=>{
    Head_department.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteDepartment= (req,res)=>{
    var deleteid=req.params.id;
    Head_department.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateDepartment=(req,res)=>{
    Head_department.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
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

module.exports={addDepartment,getAllDepartments,deleteDepartment,updateDepartment}