var {AddOrder}=require('../module/addOrder');
const counterSchema =require('../module/counter');
const timezone=require('../dateZone')

const addOrder=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"order_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"order_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var order= new AddOrder({
                _id:seqId,
                clt_id:req.body.clt_id,
                client_name:req.body.client_name,
                client_type:req.body.client_type,
                project:req.body.project,
                order_for:req.body.order_for,
                status:req.body.status,
                created_by:req.body.created_by,
                created_at:timezone.datezone,
            });
            order.save((err,docs)=>{
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

const getAllOrder=(req,res)=>{
    AddOrder.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteOrder=(req,res)=>{
    var deleteid=req.params.id;
    AddOrder.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateOrder = (req,res)=>{
    AddOrder.findByIdAndUpdate(req.params.id,{
        clt_id:req.body.client_name,
        client_name:req.body.client_name,
        client_type:req.body.client_type,
        project:req.body.project,
        order_for:req.body.order_for,
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

module.exports={getAllOrder,addOrder,deleteOrder,updateOrder}