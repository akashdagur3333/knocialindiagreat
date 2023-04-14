var {product}=require('../module/product');
const decoder=require('jwt-decode');
const counterSchema =require('../module/counter');

const addProduct=(req,res)=>{
    counterSchema.findOneAndUpdate({id:"product_seq"},{"$inc":{"seq":1}},
    {new:true},(err,cd)=>{
        let seqId;
        if(cd==null){
            const newval = new counterSchema({id:"product_seq",seq:1});
            newval.save();
            seqId=1;
        }
        else{
            seqId=cd.seq;
        }
        // var created_by =localStorage.getItem('token');
        // created_by=decoder(created_by);

        var Product = new product({
            _id:seqId,
            category:req.body.category,
            productName:req.body.productName,
            productPrice:req.body.productPrice,
            description:req.body.description,
            unit:req.body.unit,
            created_by:req.body.created_by,
            status:req.body.status
        });
        Product.save((err,docs)=>{
            if(!err){
                res.json(docs);
            }
            else{
                res.json(err);
            }
        });
    })
}

const getProduct=(req,res)=>{
    product.find((err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const updateProduct=(req,res)=>{
    const updated=Date.now();
    product.findByIdAndUpdate(req.params._id,{
        category:req.body.category,
        productName:req.body.productName,
        productPrice:req.body.productPrice,
        description:req.body.description,
        unit:req.body.unit,
        updated_by:req.body.created_by,
        updated_at:updated,
        status:req.body.status
    },(err,docs)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteProduct=(req,res)=>{
     product.findByIdAndDelete(req.params._id,(err,docs)=>{
        if(!err){
            res.json({
                message:'Delete Successfully'
            });
        }
        else{
            res.json(err);
        }
     })
}
module.exports={addProduct,getProduct,updateProduct,deleteProduct}