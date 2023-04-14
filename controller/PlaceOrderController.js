var Orders=require('../module/orders');
const counterSchema=require('../module/counter');
const { findOne, findByIdAndUpdate } = require('../module/orders');


const addOrder=(req,res)=>{
   // console.log(req.params.id)
    // var user=Orders.findOne({'user_id':req.params.id},(err,docs)=>{
    //     if(!err){
    //         res.json(docs);
    //         if(!docs){
    //             user=null;
    //         }
    //     }
    //     else{
    //         req.json(err);
    //     }
       
    // });
    //console.log(user);
    // if(user==null){
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
            var orders= new Orders({
                _id:seqId,
                user_id:req.body.user_id,
                user_name:req.body.user_name,
                total:req.body.total,
                products:req.body.products
            })
            orders.save((err,docs)=>{
                if(!err){
                    res.json(docs);
                }
                else{
                    res.json(err);
                }
            })
            }
        )
    // }
    // else{
    //     res.json({
    //         message:"Already exsist"
    //     })
    // }
    // else{
    //     Orders.findOneAndUpdate({'user_id':req.params.id},{
    //         user_name:req.body.user_name,
    //         products:req.body.products
    //     },(err,docs)=>{
    //         if(!err){
    //             res.json(docs);
    //         }
    //         else{
    //             res.json(err);
    //         }
    //     })
            
    // }
    
}

const AllOrder= (req,res)=>{
Orders.findOne({'user_id':req.params.id},(err,docs)=>{
    if(!err){
        res.json(docs);
    }
    else{
        res.json(err);
    }
})
}

const getAllOrder=(req,res)=>{
    Orders.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}


const deleteOrder =(req,res)=>{
    Orders.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err){
            res.json({
                message:"Order Deleted"
            })
        }
        else{
            res.json(err);
        }
    })
}

module.exports={addOrder,AllOrder,getAllOrder,deleteOrder}