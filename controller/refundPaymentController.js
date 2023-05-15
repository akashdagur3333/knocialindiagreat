var {RefundPayment}=require('../module/refundPayment');
const counterSchema=require('../module/counter');
const Timezone=require('../dateZone')

const addRefundPayment=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"refundPayment_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"refundPayment_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var refundpayment= new RefundPayment({
                _id:seqId,
                rfd_id:req.body.rfd_id,
                rpt_id:req.body.rpt_id,
                name:req.body.name,
                payment_type:req.body.payment_type,
                amount:req.body.amount,
                payment_mode:req.body.payment_mode,
                bank_ledger:req.body.bank_ledger,
                booking_year:req.body.booking_year,
                payment_date:req.body.payment_date,
                txn_id:req.body.txn_id,
                director_remarks:req.body.director_remarks,
                created_by:req.body.created_by,
                created_at:Timezone.datezone
            });
            refundpayment.save((err,docs)=>{
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

const getAllRefundPayment=(req,res)=>{
    RefundPayment.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteRefundPayment= (req,res)=>{
    var deleteid=req.params.id;
    RefundPayment.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}



module.exports={addRefundPayment,getAllRefundPayment,deleteRefundPayment}