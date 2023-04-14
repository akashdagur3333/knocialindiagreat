const CounterSchema=require('../module/counter');
const Items=require('../module/addCart');


const addtoCart=(req,res)=>{
  var akash=req.body.user_id;
  
Items.findOne({'user_id':akash}).then(data=>{
    if(data==null){
        CounterSchema.findOneAndUpdate(
            {id:"addcart_seq"},
            {"$inc":{"seq":1}},
        {new:true},(err,cd)=>{
            let seqId;
            if(cd==null){
                const newval=new CounterSchema({id:"addcart_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var item= new Items({
                _id:seqId,
                 user_id:req.body.user_id,
                data:req.body.data,
                 created_by:req.body.user_name
            })
            item.save((err,docs)=>{
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
    else{
        Items.updateOne(data,{
            data:req.body.data
        },(err,docs)=>{
            if(!err){
                res.json(docs);
            }
            else{
                res.json(err)
            }
        })
    }

})
  
}


const showCart=(req,res)=>{
    Items.findOne({'user_id':req.params.id},(err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}


const showCartsData=(req,res)=>{
    Items.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}


const deleteCart=(req,res)=>{
    Items.findByIdAndDelete(req.params.id,(err,docs)=>{
        if(!err){
            res.json({
                message:"Deleted Successfully"
            });
        }
        else{
            res.json(err);
        }
    })
}


// const deleteItem=(req,res)=>{
// var user_id=req.params.user_id
// var id =req.params.id

// Items.findOne({'user_id':user_id}).then(userData=>{
//    userData.findOne()
// }
// )
// //.then(userData=>{
//     // if(userData){
//         // console.log(userData)
//         // userData.pop()
//     //    userData.data.forEach(element => {
//     //     if(element.product_id==id){

//     //         console.log(indexOf(element))
//     //       //  console.log(element)
//     //      //console.log(userData.data.pop(element)) 
//     //     }

//     //    });
//         // userData.$where({'product_id':id}).then(data=>{
//         //     console.log(data)
//         // })
      
//     //  userData.filter((x)=>{
//     //    console.log(x.product_id==id) 
//     // })
// //     }
// //     else{
// //         console.log("User not found");
// //     }
// // })

// }



module.exports={addtoCart,showCart,showCartsData,deleteCart}