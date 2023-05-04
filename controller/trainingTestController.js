var {TrainingTest}=require('../module/trainingTest');
const counterSchema=require('../module/counter');


const addTest=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"test_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"test_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var trainingTest= new TrainingTest({
                _id:seqId,
                test_name:req.body.test_name,
                test_date:req.body.test_date,
                test_start:req.body.test_start,
                test_timing:req.body.test_timing,
                test_status:req.body.test_status,
                question:req.body.question,
                user:req.body.user,
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            trainingTest.save((err,docs)=>{
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

const getAllTest=(req,res)=>{
    TrainingTest.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteTest= (req,res)=>{
    var deleteid=req.params.id;
    TrainingTest.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateTest=(req,res)=>{
    TrainingTest.findByIdAndUpdate(req.params.id,{
        test_name:req.body.test_name,
                test_date:req.body.test_date,
                test_start:req.body.test_start,
                test_timing:req.body.test_timing,
                test_status:req.body.test_status,
                question:req.body.question,
                user:req.body.user,
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

module.exports={addTest,getAllTest,deleteTest,updateTest}