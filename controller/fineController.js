var {Fine}=require('../module/fine');
const counterSchema=require('../module/counter');


const addFine=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"fine_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"fine_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var fine= new Fine({
                _id:seqId,
                rpt_id:req.body.rpt_id,
                name:req.body.name,
                father_name:req.body.father_name,
                imposed_date:Date.now(),
                amount:req.body.amount,
                imposed_by:req.body.imposed_by,
                remarks:req.body.remarks,
                gst_amount:req.body.gst_amount,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            fine.save((err,docs)=>{
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

const getAllFine=(req,res)=>{
    Fine.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteFine= (req,res)=>{
    var deleteid=req.params.id;
    Fine.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}


module.exports={addFine,getAllFine,deleteFine}