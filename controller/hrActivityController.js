var {HrActivity}=require('../module/hrActivity');
const counterSchema=require('../module/counter');
const timeZone=require('../dateZone');


const addHrActivity=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"hrActivity_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"hrActivity_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var hrActivity= new HrActivity({
                _id:seqId,
                assign_to:req.body.assign_to,
                invite_to:req.body.invite_to,
                assign_date:req.body.assign_date,
                shift:req.body.shift,
                activity_start:req.body.activity_start,
                activity_end:req.body.activity_end,
                activity_location:req.body.activity_location,
                activity_name:req.body.activity_name,
                activity_description:req.body.activity_description,
                hr_remarks:req.body.hr_remarks,
                created_by:req.body.created_by,
                created_at:timeZone.datezone
            });
            hrActivity.save((err,docs)=>{
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

const getAllHrActivity=(req,res)=>{
    HrActivity.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteHrActivity= (req,res)=>{
    var deleteid=req.params.id;
    HrActivity.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateHrActivity=(req,res)=>{
    HrActivity.findByIdAndUpdate(req.params.id,{
        assign_to:req.body.assign_to,
        invite_to:req.body.invite_to,
        assign_date:req.body.assign_date,
        shift:req.body.shift,
        activity_start:req.body.activity_start,
        activity_end:req.body.activity_end,
        activity_location:req.body.activity_location,
        activity_name:req.body.activity_name,
        activity_description:req.body.activity_description,
        hr_remarks:req.body.hr_remarks,
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

module.exports={addHrActivity,getAllHrActivity,deleteHrActivity,updateHrActivity}