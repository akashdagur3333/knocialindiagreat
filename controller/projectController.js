var {AddProject}=require('../module/addProject');
const counterSchema =require('../module/counter');
const timezone=require('../dateZone')

const addProject=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"project_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"project_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var project= new AddProject({
                _id:seqId,
                clt_id:req.body.clt_id,
                client_name:req.body.client_name,
                project_category:req.body.project_category,
                project_type:req.body.project_type,
                project_name:req.body.project_name,
                payment_type:req.body.payment_type,
                due_date:req.body.due_date,
                project_description:req.body.project_description,
                project_cost:req.body.project_cost,
                gst_slab:req.body.gst_slab,
                project_delivery_date:req.body.project_delivery_date,
                domain_details:req.body.domain_details,
                hosting_details:req.body.hosting_details,
                status:req.body.status,
                created_by:req.body.created_by,
                created_at:timezone.datezone,
            });
            project.save((err,docs)=>{
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

const getAllProject =(req,res)=>{
    AddProject.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteProject=(req,res)=>{
    var deleteid=req.params.id;
    AddProject.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateProject = (req,res)=>{
    AddProject.findByIdAndUpdate(req.params.id,{
        client_name:req.body.client_name,
        project_category:req.body.project_category,
        project_type:req.body.project_type,
        project_name:req.body.project_name,
        payment_type:req.body.payment_type,
        due_date:req.body.due_date,
        project_description:req.body.project_description,
        project_cost:req.body.project_cost,
        gst_slab:req.body.gst_slab,
        project_delivery_date:req.body.project_delivery_date,
        domain_details:req.body.domain_details,
        hosting_details:req.body.hosting_details,
        status:req.body.status,  
        updated_by:req.body.created_by,
        updated_at:timezone.datezone  
    },(err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

module.exports={getAllProject,addProject,deleteProject,updateProject}