var {VsrWaiver}=require('../module/vsrWaiver');
const counterSchema=require('../module/counter');


const addVsrWaiver=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"VsrWaiver_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"VsrWaiver_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var vsrWaiver= new VsrWaiver({
                _id:seqId,
                rpt_id:req.body.rpt_id,
                name:req.body.name,
                father_name:req.body.father_name,
                amount:req.body.amount,
                remarks:req.body.remarks,
                gst_amount:req.body.gst_amount,
                waived_by:req.body.waived_by,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            vsrWaiver.save((err,docs)=>{
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

const getAllVsrWaiver=(req,res)=>{
    VsrWaiver.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteVsrWaiver= (req,res)=>{
    var deleteid=req.params.id;
    VsrWaiver.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}


module.exports={addVsrWaiver,getAllVsrWaiver,deleteVsrWaiver}