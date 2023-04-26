var {FineWaiver}=require('../module/fineWaiver');
const counterSchema=require('../module/counter');


const addFineWaiver=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"fineWaiver_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"fineWaiver_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var fineWaiver= new FineWaiver({
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
            fineWaiver.save((err,docs)=>{
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

const getAllFineWaiver=(req,res)=>{
    FineWaiver.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteFineWaiver= (req,res)=>{
    var deleteid=req.params.id;
    FineWaiver.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}


module.exports={addFineWaiver,getAllFineWaiver,deleteFineWaiver}