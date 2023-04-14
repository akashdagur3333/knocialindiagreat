var {financial_year}=require('../module/financial_year');
const counterSchema=require('../module/counter');


const addYear=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"financial_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"financial_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var Financial_year= new financial_year({
                _id:seqId,
                year_financial:req.body.year_financial,
                status:req.body.status, 
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            Financial_year.save((err,docs)=>{
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

const getAllYear=(req,res)=>{
    financial_year.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteYear= (req,res)=>{
    var deleteid=req.params.id;
    financial_year.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateYear=(req,res)=>{
    financial_year.findByIdAndUpdate(req.params.id,{
        year_financial:req.body.year_financial,
        status:req.body.status, 
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

module.exports={addYear,getAllYear,deleteYear,updateYear}