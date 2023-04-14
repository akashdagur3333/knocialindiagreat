var {Ledger}=require('../module/ledger');
const counterSchema=require('../module/counter');


const addLedger=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"ledger_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"ledger_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var ledger= new Ledger({
                _id:seqId,
                ledger_name:req.body.ledger_name,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            ledger.save((err,docs)=>{
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

const getAllLedger=(req,res)=>{
    Ledger.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteLedger= (req,res)=>{
    var deleteid=req.params.id;
    Ledger.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateLedger=(req,res)=>{
    Ledger.findByIdAndUpdate(req.params.id,{
        ledger_name:req.body.ledger_name,
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

module.exports={addLedger,getAllLedger,deleteLedger,updateLedger}