var {TotalTask}=require('../module/addTask');
const counterSchema =require('../module/counter');
const timezone=require('../dateZone')
const addTotalTask=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"task_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"task_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var addTask= new TotalTask({
                _id:seqId,
                ast_id:req.body.ast_id,
                prt_id:req.body.prt_id,
                clt_id:req.body.clt_id,
                project_name:req.body.project_name,
                client_name:req.body.client_name,
                assign_to_department:req.body.assign_to_department,
                team_lead:req.body.team_lead,
                page_name:req.body.page_name,
                task_description:req.body.task_description,
                file:req.body.file,
                remarks:req.body.remarks,
                status:req.body.status,
                created_by:req.body.created_by,
                created_at:timezone.datezone,
            });
            addTask.save((err,docs)=>{
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

const getAllTotalTask=(req,res)=>{
    TotalTask.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteTotalTask=(req,res)=>{
    var deleteid=req.params._id;
    TotalTask.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateTotalTask= (req,res)=>{
    TotalTask.findByIdAndUpdate(req.params._id,{
        ast_id:req.body.ast_id,
        prt_id:req.body.prt_id,
        clt_id:req.body.clt_id,
        project_name:req.body.project_name,
        client_name:req.body.client_name,
        assign_to_department:req.body.assign_to_department,
        team_lead:req.body.team_lead,
        page_name:req.body.page_name,
        task_description:req.body.task_description,
        file:req.body.file,
        remarks:req.body.remarks,
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

module.exports={getAllTotalTask,addTotalTask,deleteTotalTask,updateTotalTask}