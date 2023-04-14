var {Batches}=require('../module/training_batches');
const counterSchema=require('../module/counter');


const addBatches=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"batches_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"batches_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var batches= new Batches({
                _id:seqId,
                batch_name:req.body.batch_name,
                batch_location:req.body.batch_location,
                batch_starting_date:req.body.batch_starting_date,
                batch_size:req.body.batch_size,
                batch_type:req.body.batch_type,
                batch_trainer:req.body.batch_trainer,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            batches.save((err,docs)=>{
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

const getAllBatches=(req,res)=>{
    Batches.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteBatches= (req,res)=>{
    var deleteid=req.params.id;
    Batches.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateBatches=(req,res)=>{
    Batches.findByIdAndUpdate(req.params.id,{
        batch_name:req.body.batch_name,
        batch_location:req.body.batch_location,
        batch_starting_date:req.body.batch_starting_date,
        batch_size:req.body.batch_size,
        batch_type:req.body.batch_type,
        batch_trainer:req.body.batch_trainer,
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

module.exports={addBatches,getAllBatches,deleteBatches,updateBatches}