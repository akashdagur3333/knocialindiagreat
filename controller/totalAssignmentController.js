var {TotalAssignment}=require('../module/totalAssignment');
const counterSchema =require('../module/counter');
const timezone=require('../dateZone')
const addTotalAssignment=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"totalassignment_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"totalassignment_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var totalAssignment= new TotalAssignment({
    _id:seqId,
    prt_id:req.body.prt_id,
    project_name:req.body.project_name,
    clt_id:req.body.clt_id,
    client_name:req.body.client_name,
    assign_to_department:req.body.assign_to_department,
    team_lead:req.body.team_lead,
    assignment_date:req.body.assignment_date,
    delivery_date:req.body.delivery_date,
    remarks:req.body.remarks,
                created_by:req.body.created_by,
                created_at:timezone.datezone,
            });
            totalAssignment.save((err,docs)=>{
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

const getAllTotalAssignment=(req,res)=>{
    TotalAssignment.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteTotalAssignment=(req,res)=>{
    var deleteid=req.params.id;
    TotalAssignment.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateTotalAssignment = (req,res)=>{
    TotalAssignment.findByIdAndUpdate(req.params.id,{
    assign_to_department:req.body.assign_to_department,
    team_lead:req.body.team_lead,
    assignment_date:req.body.assignment_date,
    delivery_date:req.body.delivery_date,
    remarks:req.body.remarks,
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

module.exports={getAllTotalAssignment,addTotalAssignment,deleteTotalAssignment,updateTotalAssignment}