var {NewTeam}=require('../module/newTeam');
const counterSchema =require('../module/counter');
const timezone=require('../dateZone')
const addTeam=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"team_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"team_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var team= new NewTeam({
                _id:seqId,
                team_lead_rpt_id:req.body.team_lead_rpt_id,
                team_lead_name:req.body.team_lead_name,
                team_lead_department:req.body.team_lead_department,
                team_member:[],
                created_by:req.body.created_by,
                created_at:timezone.datezone,
            });
            team.save((err,docs)=>{
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

const getAllTeam=(req,res)=>{
    NewTeam.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteTeam=(req,res)=>{
    var deleteid=req.params._id;
    NewTeam.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateTeam = (req,res)=>{
    NewTeam.findByIdAndUpdate(req.params._id,{
        team_lead_rpt_id:req.body.team_lead_rpt_id,
                team_lead_name:req.body.team_lead_name,
                team_lead_department:req.body.team_lead_department,
                team_member:[],
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

module.exports={getAllTeam,addTeam,deleteTeam,updateTeam}