var {AssignedTask}=require('../module/assignedTask');
const counterSchema =require('../module/counter');
const timezone=require('../dateZone')
const addAssignedTask=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"assignedtask_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"assignedtask_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var assignedTask= new AssignedTask({
    _id:seqId,
    tsk_id:req.body.tsk_id,
    ast_id:req.body.ast_id,
    prt_id:req.body.prt_id,
    clt_id:req.body.clt_id,
    project_name:req.body.project_name,
    client_name:req.body.client_name,
    assign_to_department:req.body.assign_to_department,
    assign_by:req.body.assign_by,
    page_name:req.body.page_name,
    task_description:req.body.task_description,
    task_assign_to:req.body.task_assign_to,
    task_expiry_date:req.body.task_expiry_date,
    remarks:req.body.remarks,
    status:req.body.status,
                created_by:req.body.created_by,
                created_at:timezone.datezone,
            });
            assignedTask.save((err,docs)=>{
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

const getAllAssignedTask=(req,res)=>{
    AssignedTask.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteAssignedTask=(req,res)=>{
    var deleteid=req.params._id;
    AssignedTask.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateAssignedTask= (req,res)=>{
    AssignedTask.findByIdAndUpdate(req.params._id,{
        tsk_id:req.body.status,
    ast_id:req.body.status,
    prt_id:req.body.status,
    clt_id:req.body.status,
    department:req.body.status,
    team_lead:req.body.status,
    task_assign_to:req.body.status,
    task_expiry_date:req.body.status,
    assigned_by:req.body.status,
    remarks:req.body.status,
    status:req.body.status,
        updated_by:req.body.created_by,
        updated_at:timezone.datezone
    },(err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

module.exports={getAllAssignedTask,addAssignedTask,deleteAssignedTask,updateAssignedTask}