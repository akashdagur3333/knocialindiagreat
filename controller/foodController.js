var {food}=require('../module/foodDetail');
const counterSchema =require('../module/counter');
var path = require('path');

const addFood =(req,res)=>{
    var image = path.basename(req.body.imageUrl);
    counterSchema.findOneAndUpdate(
        {id:"food_seq"},
        {"$inc":{"seq":1}},
        {new:true},(err,cd)=>{
            let seqId;
            if(cd==null){
                const newval = new counterSchema({id:"food_seq",seq:1})
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq
            }
            var foodDetail = new food({
                _id:seqId,
                price:req.body.price,
                name:req.body.name,
                favorite:req.body.favorite,
                star:req.body.star,
                tags:req.body.tags,
                imageUrl:image,
                cookTime:req.body.cookTime,
                origins:req.body.origins

            }); 
            foodDetail.save((err,doc)=>{
                if(!err){
                 res.send(doc);
                }
                else{
                 console.log(err);
                }
                 });
 });
}

const showfood =(req,res)=>{
    food.find((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            console.log(err)
        }
    })

}


module.exports={addFood,showfood}