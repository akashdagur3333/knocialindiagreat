var {Batch_size}=require('../module/batchSize');
const counterSchema=require('../module/counter');


const addBatchSize=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"batch_size"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"batch_size",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var batchsize= new Batch_size({
                _id:seqId,
                batchSize:req.body.batchSize,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            batchsize.save((err,docs)=>{
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

const getAllBatchSize=(req,res)=>{
    Batch_size.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteBatchSize= (req,res)=>{
    var deleteid=req.params.id;
    Batch_size.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateBatchSize=(req,res)=>{
    Batch_size.findByIdAndUpdate(req.params.id,{
        batchSize:req.body.batchSize,
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

module.exports={addBatchSize,getAllBatchSize,deleteBatchSize,updateBatchSize}