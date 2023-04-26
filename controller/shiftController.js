var {Shift}=require('../module/shift');
const counterSchema=require('../module/counter');


const addShift=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"shift_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"shift_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var shift= new Shift({
                _id:seqId,
                shift_name:req.body.shift_name,
                shift_start:req.body.shift_start,
                shift_end:req.body.shift_end,
                shift_description:req.body.shift_description,
                break1:req.body.break1,
                break1_duration:req.body.break1_duration,
                break2:req.body.break2,
                break2_duration:req.body.break2_duration,
                break3:req.body.break3,
                break3_duration:req.body.break3_duration,
                status:req.body.status,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            shift.save((err,docs)=>{
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

const getAllShift=(req,res)=>{
    Shift.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteShift= (req,res)=>{
    var deleteid=req.params.id;
    Shift.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateShift=(req,res)=>{
    Shift.findByIdAndUpdate(req.params.id,{
        shift_name:req.body.shift_name,
        shift_start:req.body.shift_start,
        shift_end:req.body.shift_end,
        shift_description:req.body.shift_description,
        break1:req.body.break1,
        break1_duration:req.body.break1_duration,
        break2:req.body.break2,
        break2_duration:req.body.break2_duration,
        break3:req.body.break3,
        break3_duration:req.body.break3_duration,
        status:req.body.status,
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


module.exports={addShift,getAllShift,deleteShift,updateShift}