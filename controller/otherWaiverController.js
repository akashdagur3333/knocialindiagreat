var {OtherWaiver}=require('../module/otherWaiver');
const counterSchema=require('../module/counter');


const addOtherWaiver=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"otherWaiver_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"otherWaiver_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var otherWaiver= new OtherWaiver({
                _id:seqId,
                rpt_id:req.body.rpt_id,
                name:req.body.name,
                father_name:req.body.father_name,
                amount:req.body.amount,
                otherPending:req.body.otherPending,
                remarks:req.body.remarks,
                gst_amount:req.body.gst_amount,
                waived_by:req.body.waived_by,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            otherWaiver.save((err,docs)=>{
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

const getAllOtherWaiver=(req,res)=>{
    OtherWaiver.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteOtherWaiver= (req,res)=>{
    var deleteid=req.params.id;
    OtherWaiver.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}


module.exports={addOtherWaiver,getAllOtherWaiver,deleteOtherWaiver}