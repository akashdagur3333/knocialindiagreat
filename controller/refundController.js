var {Refund}=require('../module/refund');
const counterSchema=require('../module/counter');
const Timezone=require('../dateZone')

const addRefund=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"refund_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"refund_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var refund= new Refund({
                _id:seqId,
                rpt_id:req.body.rpt_id,
                name:req.body.name,
                father_name:req.body.father_name,
                aadhar_number:req.body.aadhar_number,
                offer_letter_id:req.body.offer_letter_id,
                sex:req.body.sex,
                emp_type:req.body.emp_type,
                reporting_date:req.body.reporting_date,
                total_value:req.body.total_value,
                paid_value:req.body.paid_value,
                pending_value:req.body.pending_value,
                refund_value:req.body.refund_value,
                state_reason:req.body.state_reason,
                which_policy:req.body.which_policy,
                created_by:req.body.created_by,
                created_at:Timezone.datezone
            });
            refund.save((err,docs)=>{
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

const getAllRefund=(req,res)=>{
    Refund.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteRefund= (req,res)=>{
    var deleteid=req.params.id;
    Refund.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateRefund=(req,res)=>{
    Refund.findByIdAndUpdate(req.params.id,{
        director_consent:req.body.director_consent,
        approx_date:req.body.approx_date,
        remarks:req.body.remarks,
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

module.exports={addRefund,getAllRefund,deleteRefund,updateRefund}