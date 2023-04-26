var {Stream}=require('../module/stream');
const counterSchema=require('../module/counter');


const addStream=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"stream_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"stream_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var stream= new Stream({
                _id:seqId,
                qualification_name:req.body.qualification_name,
                stream:req.body.stream,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            stream.save((err,docs)=>{
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

const getAllStream=(req,res)=>{
    Stream.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteStream= (req,res)=>{
    var deleteid=req.params.id;
    Stream.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateStream=(req,res)=>{
    Stream.findByIdAndUpdate(req.params.id,{
        qualification_name:req.body.qualification_name,
        stream:req.body.stream,
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


module.exports={addStream,getAllStream,deleteStream,updateStream}