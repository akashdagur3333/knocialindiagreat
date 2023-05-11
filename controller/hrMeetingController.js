var {HrMeeting}=require('../module/hrMeeting');
const counterSchema=require('../module/counter');
const timeZone=require('../dateZone');


const addHrMeeting=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"hrMeeting_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"hrMeeting_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var hrMeeting= new HrMeeting({
                _id:seqId,
                assign_to:req.body.assign_to,
                invite_to:req.body.invite_to,
                meeting_date:req.body.meeting_date,
                shift:req.body.shift,
                meeting_start:req.body.meeting_start,
                meeting_end:req.body.meeting_end,
                meeting_location:req.body.meeting_location,
                meeting_name:req.body.meeting_name,
                meeting_description:req.body.meeting_description,
                meeting_remarks:req.body.meeting_remarks,
                created_by:req.body.created_by,
                created_at:timeZone.datezone
            });
            hrMeeting.save((err,docs)=>{
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

const getAllHrMeeting=(req,res)=>{
    HrMeeting.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteHrMeeting= (req,res)=>{
    var deleteid=req.params.id;
    HrMeeting.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateHrMeeting=(req,res)=>{
    HrMeeting.findByIdAndUpdate(req.params.id,{
        assign_to:req.body.assign_to,
        invite_to:req.body.invite_to,
        meeting_date:req.body.assign_date,
        shift:req.body.shift,
        meeting_start:req.body.meeting_start,
        meeting_end:req.body.meeting_end,
        meeting_location:req.body.meeting_location,
        meeting_name:req.body.meeting_name,
        meeting_description:req.body.meeting_description,
        meeting_remarks:req.body.meeting_remarks,
        updated_by:req.body.created_by,
        updated_at:timeZone.datezone
    },(docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

module.exports={addHrMeeting,getAllHrMeeting,deleteHrMeeting,updateHrMeeting}