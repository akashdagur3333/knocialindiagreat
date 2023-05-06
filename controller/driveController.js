var {Drives}=require('../module/drive');
const counterSchema=require('../module/counter');



const addDrives=(req,res)=>{
    var req=req.body;
    counterSchema.findOneAndUpdate(
        {id:"drives_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"drives_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var drives= new Drives({
                _id:seqId,
                clg_id:req.clg_id,
                clg_name:req.clg_name,
                college_state:req.college_state,
                college_city:req.college_city,
                college_pin_code:req.college_pin_code,
                college_type:req.college_type,
                drive_type:req.drive_type,
                drive_date:req.drive_date,
                team_lead:req.team_lead,
                hr_name:req.hr_name,
                technical_person:req.technical_person,
                mode_of_travel:req.mode_of_travel,
                travel_type:req.travel_type,
                created_by:req.created_by,
                created_at:Date.now()
            });
            drives.save((err,docs)=>{
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

const getAllDrives=(req,res)=>{    
    Drives.find((err,docs)=>{
        if(!err){
            res.json(docs);
        
        }
        else{
            res.json(err)
        }
    })
}


const deleteDrives= (req,res)=>{
    var deleteid=req.params.id;
    Drives.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateDrives=(req,res)=>{
    var req1=req.body;   
        Drives.findByIdAndUpdate(req.params.id,{
            drive_type:req1.drive_type,
            drive_date:req1.drive_date,
            team_lead:req1.team_lead,
            hr_name:req1.hr_name,
            technical_person:req1.technical_person,
            mode_of_travel:req1.mode_of_travel,
            travel_type:req1.travel_type,
            updated_by:req1.created_by,
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
   





module.exports={addDrives,getAllDrives,deleteDrives,updateDrives}