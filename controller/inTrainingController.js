var {InTraining}=require('../module/inTraining');
const counterSchema=require('../module/counter');



const addIntraining=(req,res)=>{
    var req=req.body;
    counterSchema.findOneAndUpdate(
        {id:"intraining_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"intraining_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            console.log(req.name)
            var intraining= new InTraining({
                _id:seqId,
                data:
                    {
                        name:req.name,
                        father_name:req.father_name
                    }
                ,
                created_by:req.created_by,
                created_at:Date.now()
            });
            intraining.save((err,docs)=>{
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

// const getAllDrives=(req,res)=>{    
//     Drives.find((err,docs)=>{
//         if(!err){
//             res.json(docs);
        
//         }
//         else{
//             res.json(err)
//         }
//     })
// }


// const deleteDrives= (req,res)=>{
//     var deleteid=req.params.id;
//     Drives.findByIdAndDelete(deleteid,(err,del)=>{
//         if(!err){
//             res.json(del);
//         }
//         else{
//             res.json(err);
//         }
//     })
// }

// const updateDrives=(req,res)=>{
//     var req1=req.body;   
//         Drives.findByIdAndUpdate(req.params.id,{
//             drive_type:req1.drive_type,
//             drive_date:req1.drive_date,
//             team_lead:req1.team_lead,
//             hr_name:req1.hr_name,
//             technical_person:req1.technical_person,
//             mode_of_travel:req1.mode_of_travel,
//             travel_type:req1.travel_type,
//             updated_by:req1.created_by,
//             updated_at:Date.now()
//         },(docs,err)=>{
//             if(!err){
//                 res.json(docs);
//             }
//             else{
//                 res.json(err);
//             }
//         })
//     }
   





module.exports={addIntraining}