var {Trainer}=require('../module/trainer');
const counterSchema=require('../module/counter');


const addTrainer=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"trainer_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"trainer_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var trainer= new Trainer({
                _id:seqId,
                name:req.body.name,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            trainer.save((err,docs)=>{
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

const getAllTrainer=(req,res)=>{
    Trainer.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteTrainer= (req,res)=>{
    var deleteid=req.params.id;
    Trainer.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateTrainer=(req,res)=>{
    Trainer.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
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

module.exports={addTrainer,getAllTrainer,deleteTrainer,updateTrainer}