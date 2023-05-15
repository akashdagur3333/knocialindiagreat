var {Relieving}=require('../module/relieving');
const counterSchema=require('../module/counter');
const Timezone=require('../dateZone')

const addRelieving=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"relieving_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"relieving_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var relieving= new Relieving({
                _id:seqId,
                rpt_id:req.body.rpt_id,
                name:req.body.name,
                father_name:req.body.father_name,
                aadhar_number:req.body.aadhar_number,
                leftStatus:req.body.left_type,
                training_start:req.body.training_start,
                training_completed:req.body.training_completed,
                doj:req.body.doj,
                seperation_date:req.body.seperation_date,
                emp_type:req.body.emp_type,
                left_hr_remarks:req.body.left_hr_remarks,
                rejoining:req.body.rejoining,
                vsr_status:req.body.vsr_status,
                final_hr_remarks:req.body.final_hr_remarks,
                created_by:req.body.created_by,
                created_at:Timezone.datezone
            });
            relieving.save((err,docs)=>{
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

const getAllRelieving=(req,res)=>{
    Relieving.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteRelieving= (req,res)=>{
    var deleteid=req.params.id;
    Relieving.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateRelieving=(req,res)=>{
    Relieving.findByIdAndUpdate(req.params.id,{
        rpt_id:req.body.rpt_id,
        name:req.body.name,
        father_name:req.body.father_name,
        aadhar_number:req.body.aadhar_number,
        leftStatus:req.body.left_type,
        training_start:req.body.training_start,
        training_completed:req.body.training_completed,
        doj:req.body.doj,
        seperation_date:req.body.seperation_date,
        emp_type:req.body.emp_type,
        left_hr_remarks:req.body.left_hr_remarks,
        rejoining:req.body.rejoining,
        vsr_status:req.body.vsr_status,
        final_hr_remarks:req.body.final_hr_remarks,
        updated_by:req.body.created_by,
        updated_at:Timezone.datezone
    },(docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

module.exports={addRelieving,getAllRelieving,deleteRelieving,updateRelieving}