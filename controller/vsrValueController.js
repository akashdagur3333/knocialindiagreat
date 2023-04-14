var {VsrValue}=require('../module/vsrValue');
const counterSchema=require('../module/counter');


const addVsrValue=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"VsrValue_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"VsrValue_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var vsrValue= new VsrValue({
                _id:seqId,
                vsr_value:req.body.vsr_value,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            vsrValue.save((err,docs)=>{
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

const getAllVsrValue=(req,res)=>{
    VsrValue.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteVsrValue= (req,res)=>{
    var deleteid=req.params.id;
    VsrValue.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateVsrvalue=(req,res)=>{
    VsrValue.findByIdAndUpdate(req.params.id,{
        vsr_value:req.body.vsr_value,
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

module.exports={addVsrValue,getAllVsrValue,deleteVsrValue,updateVsrvalue}