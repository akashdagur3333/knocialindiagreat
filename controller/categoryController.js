const { model } = require('mongoose');
var {category}=require('../module/category');
const counterSchema =require('../module/counter');

const addCategory=(req,res)=>{
    counterSchema.findOneAndUpdate(
        {id:"category_seq"},
        {"$inc":{"seq":1} },{new:true},
        (err,cd)=>{
            let seqId;
            if(cd==null){
                const newval =new counterSchema({id:"category_seq",seq:1});
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq;
            }
            var Category= new category({
                _id:seqId,
                categoryName:req.body.category,
                status:req.body.status
            });
            Category.save((err,docs)=>{
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

const showCategory =(req,res)=>{
    category.find((docs,err)=>{
        if(!err){
            res.json(docs);
        }
        else{
            res.json(err);
        }
    })
}

const deleteCategory=(req,res)=>{
    var deleteid=req.params._id;
    console.log(deleteid)
    category.findByIdAndDelete(deleteid,(err,msg)=>{
        if(!err){
          res.json(msg);
        }
        else{
            res.json(err)
        }
    })
}

const updateCategory = (req,res)=>{
    category.findByIdAndUpdate(req.params._id,{
        categoryName:req.body.category,
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

module.exports={showCategory,addCategory,deleteCategory,updateCategory}