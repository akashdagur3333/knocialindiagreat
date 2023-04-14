var {Qualification}=require('../module/qualification');
const counterSchema=require('../module/counter');


const addQualification=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"qualification_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"qualification_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var qualification= new Qualification({
                _id:seqId,
                qualification_name:req.body.qualification_name,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            qualification.save((err,docs)=>{
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

const getAllQualification=(req,res)=>{
    Qualification.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteQualification= (req,res)=>{
    var deleteid=req.params.id;
    Qualification.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateQualification=(req,res)=>{
    Qualification.findByIdAndUpdate(req.params.id,{
        qualification_name:req.body.qualification_name,
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

module.exports={addQualification,getAllQualification,deleteQualification,updateQualification}