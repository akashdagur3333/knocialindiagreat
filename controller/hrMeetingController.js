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
                meeting_date:req.body.assign_date,
                shift:req.body.shift,
                Meeting_start:req.body.Meeting_start,
                Meeting_end:req.body.Meeting_end,
                Meeting_location:req.body.Meeting_location,
                Meeting_name:req.body.Meeting_name,
                Meeting_description:req.body.Meeting_description,
                meeting_remarks:req.body.hr_remarks,
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
                Meeting_start:req.body.Meeting_start,
                Meeting_end:req.body.Meeting_end,
                Meeting_location:req.body.Meeting_location,
                Meeting_name:req.body.Meeting_name,
                Meeting_description:req.body.Meeting_description,
                meeting_remarks:req.body.hr_remarks,
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