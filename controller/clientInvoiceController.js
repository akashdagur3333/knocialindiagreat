var {ClientInvoice}=require('../module/clientInvoice');
const counterSchema =require('../module/counter');
const timezone=require('../dateZone')

const addInvoice=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"invoice_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"invoice_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var invoice= new ClientInvoice({
                _id:seqId,
                invoice:req.body.invoice,
                // clt_id:req.body.clt_id,
                // client_type:req.body.client_type,
                // client_name:req.body.client_name,
                // prt_id:req.body.prt_id,
                // status:req.body.status,
                 created_by:req.body.created_by,
                created_at:timezone.datezone,
            });
            invoice.save((err,docs)=>{
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

const getAllInvoice=(req,res)=>{
    ClientInvoice.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteInvoice=(req,res)=>{
    var deleteid=req.params._id;
    ClientInvoice.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateInvoice = (req,res)=>{
    ClientInvoice.findByIdAndUpdate(req.params._id,{
        invoice:req.body.invoice,
        // clt_id:req.body.clt_id,
        // client_type:req.body.client_type,
        // client_name:req.body.client_name,
        // prt_id:req.body.prt_id,
        // status:req.body.status,
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

module.exports={getAllInvoice,addInvoice,deleteInvoice,updateInvoice}