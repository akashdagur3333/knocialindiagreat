var {Office_location}=require('../module/office_location');
const counterSchema=require('../module/counter');


const addLocation=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"location_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"location_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var office_location= new Office_location({
                _id:seqId,
                office_code:req.body.office_code,
                location:req.body.location,
                address:req.body.address, 
                created_by:req.body.created_by,
                created_at:Date.now()
            });
            office_location.save((err,docs)=>{
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

const getAllLocations=(req,res)=>{
    Office_location.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err)
        }
    })
}


const deleteLocations= (req,res)=>{
    var deleteid=req.params.id;
    Office_location.findByIdAndDelete(deleteid,(err,del)=>{
        if(!err){
            res.json(del);
        }
        else{
            res.json(err);
        }
    })
}

const updateLocations=(req,res)=>{
    Office_location.findByIdAndUpdate(req.params.id,{
        office_code:req.body.office_code,
        location:req.body.location,
        address:req.body.address, 
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

module.exports={addLocation,getAllLocations,deleteLocations,updateLocations}