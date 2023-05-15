var {Client}=require('../module/client');
const counterSchema =require('../module/counter');
const timezone=require('../dateZone')

const addClient=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"client_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"client_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var client= new Client({
                _id:seqId,
                client_name:req.body.client_name,
                client_location:req.body.client_location,
                contact_person:req.body.contact_person,
                contact_number:req.body.contact_number,
                email_id:req.body.email_id,
                address:req.body.address,
                gst_number:req.body.gst_number,
                project_poc:req.body.project_poc,
                poc_contact:req.body.poc_contact,
                poc_email:req.body.poc_email,
                billing_currency:req.body.billing_currency,
                client_type:req.body.client_type,
                project_refrence:req.body.project_refrence,
                status:req.body.status,  
                created_by:req.body.created_by,
                created_at:timezone.datezone,

            });
            client.save((err,docs)=>{
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

const getAllClient =(req,res)=>{
    Client.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteClient=(req,res)=>{
    var deleteid=req.params.id;
    Client.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateClient = (req,res)=>{
    Client.findByIdAndUpdate(req.params.id,{
        client_name:req.body.client_name,
        client_location:req.body.client_location,
        contact_person:req.body.contact_person,
        contact_number:req.body.contact_number,
        email_id:req.body.email_id,
        address:req.body.address,
        gst_number:req.body.gst_number,
        project_poc:req.body.project_poc,
        poc_contact:req.body.poc_contact,
        poc_email:req.body.poc_email,
        billing_currency:req.body.billing_currency,
        client_type:req.body.client_type,
        project_refrence:req.body.project_refrence,
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

module.exports={getAllClient,addClient,deleteClient,updateClient}