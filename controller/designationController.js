var {Designation}=require('../module/designation');
const counterSchema=require('../module/counter');


const addDesignation=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"designation_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"designation_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var designation= new Designation({
                _id:seqId,
                head_department:req.body.head_department,
                designation:req.body.designation,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            designation.save((err,docs)=>{
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

const getAllDesignation=(req,res)=>{
    Designation.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteDesignation= (req,res)=>{
    var deleteid=req.params.id;
    Designation.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateDesignation=(req,res)=>{
    Designation.findByIdAndUpdate(req.params.id,{
        head_department:req.body.head_department,
        designation:req.body.designation,
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

module.exports={addDesignation,getAllDesignation,deleteDesignation,updateDesignation}