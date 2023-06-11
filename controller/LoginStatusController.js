var {LoginStatus}=require('../module/LoginStatus');
const counterSchema=require('../module/counter');


const addLoginStatus=(rpt_id,name,date,loginTime,ipAddress)=>{
    counterSchema.findOneAndUpdate(
        {id:"loginStatus_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"loginStatus_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var loginstatus= new LoginStatus({
                _id:seqId,
                rpt_id:rpt_id,
                name:name,
                date:date,
                loginTime:loginTime,
                ipAddress:ipAddress,
                created_at:Date.now()
            });
            loginstatus.save((err,docs)=>{
                if(!err){
                  console.log(docs)
                }
                else{
console.log(err)        
        }
            });
        }
    )
        }

const getAllLoginStatus=(req,res)=>{
    LoginStatus.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}

const getAllLoginStatusById=(req,res)=>{
    const getId=req.params.id;
    LoginStatus.findOne({rpt_id:getId},(err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteLoginStatus= (req,res)=>{
    var deleteid=req.params.id;
    LoginStatus.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateLoginStatus=(req,res)=>{
    LoginStatus.findByIdAndUpdate(req.params.id,{
          logout:req.body.logout,
                break1DateTime:req.body.break1DateTime,
                break2DateTime:req.body.break2DateTime,
                break3DateTime:req.body.break3DateTime,
        lastActive:req.body.lastActive, 
        totalActive:req.body.totalActive,
        totalIdle:req.body.totalIdle,
        ActivityData:[],
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

module.exports={addLoginStatus,getAllLoginStatus,getAllLoginStatusById,deleteLoginStatus,updateLoginStatus}