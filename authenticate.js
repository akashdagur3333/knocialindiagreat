const jwt = require('jsonwebtoken');
const {tokenPrivacy} =require('./data');

const Authanticate  = (req,res,next)=>{
    try{
     const token =req.headers.authorization.split(' ')[1]
     const decode = jwt.verify(token,tokenPrivacy)
    req.user =decode
     next()
    }
  
     catch(error){
         if(error.name=="TokenExpiredError"){
             res.status(401).json({
                 message:"Token Expired"
             })
         }
         res.json({
             message:"Authentication failed"
         })
     }
 }

module.exports={Authanticate}