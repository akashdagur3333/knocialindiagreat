var {user}=require('../module/user');
const counterSchema =require('../module/counter');
const bcrypt =require('bcryptjs');
const jwt =require('jsonwebtoken');
const connection =require('../db');
const { tokenPrivacy } = require('../data');
// const { user } = require('../auth');
// const nodemailer= require('nodemailer');
// const randomstring =require('randomstring');
// const config =require('../config/config');


// const sendResetPasswordMail=async(email,token)=>{
//     try{
//     const transporter= nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:config.emailUser,
//             pass: config.emailPassword
//         }

//             // host: 'smtp.gmail.com',
//             // port: 465,
//             // secure: true,
//             // providerauth: {
//             //     user: config.emailUser,
//             //     pass: config.emailPassword,
//             // },
//       })

//       const mailOptions ={
//         from:config.emailUser,
//         to:email,
//         subject:'For reset Password',
//         html:'<p> Hii '+Email+',Please copy the link <a href="http://localhost:3000/user/forget-password?token='+token+'">and reset your password </a>'
//       }
//       transporter.sendMail(mailOptions,function(error,info){
//         if(error){
//             console.log(error);
//         }
//         else{
//             console.log("mail has been sent :-" ,info.response);
//         }
//       })
//     }
//     catch (error){
//        console.log(error)
//     }
// }
const checkToken=(req,res)=>{
    return res.status(200).json({
        message:"true"
    });
}


const register =(req,res)=>{
    var email =req.body.email;
    user.findOne({email}).then(registerUser=>{
         console.log(registerUser);
       
        if(registerUser==null){
            
            bcrypt.hash(req.body.password,10,function(err,hasspass){
        if(err){
           res.json({
            error:err
           })
        }
    counterSchema.findOneAndUpdate(
        {id:"user_seq"},
        {"$inc":{"seq":1}},
        {new:true},(err,cd)=>{
            let seqId;
            if(cd==null){
                const newval = new counterSchema({id:"user_seq",seq:1})
                newval.save();
                seqId=1;
            }
            else{
                seqId=cd.seq
            }
                var User = new user({
                    _id:seqId,
                    username:req.body.username,
                    email:req.body.email,
                    password:hasspass,
                    role:"user",
                    status:false

                }); 
                User.save((err,doc)=>{
               if(!err){
                res.send(doc);
               }
               else{
                console.log(err);
               }
                })
            }
        )
     })
        }
        else{
                res.json({
                    message:"user already registered"
                })
        }
    })
    
    

}

const count =(req,res)=>{
   user.count({username:"akash"},(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        res.json(result);
    }
   })
}

const login =(req,res)=>{
    var email =req.body.email
    var password=req.body.password

    user.findOne({email}).then(User=>{
        console.log(User)
       if(User){
       // console.log(password);
       // var pass =User.password
       // console.log(pass);
       if(User.status==false){
        bcrypt.compare(password,User.password,function(err,result){
            if(err){
             console.log(err)
             }
             if(result){
                 let token = jwt.sign({email:User.email,role:User.role},tokenPrivacy,{expiresIn:'24h'})
                 let refreshToken=jwt.sign({email:User.email},'RefreshTokenverySecretValue',{expiresIn:'48h'})
                 res.json({
                     message:'login Successfully',
                     token,
                     refreshToken
                 })
             }
             else{
                 res.json({
                     message:'Password not match'
                 })
             }
            })
       }
       else{
        res.json({
            message:"User Inactive"
        })
       }
      
       }
       else{
        res.json({
            message:'user not found'
        })
       }

    })
}

// const forget_password = async(req,res)=>{
//     try{
//         // console.log(socket.dnsserver());
//         const email = req.body.email;
// const userData = await user.findOne({email:email});
// if(userData){
//     Email = userData.email;
//         // res.json({Email});
//     const randomString =randomstring.generate();
//   const data =await user.updateOne({email:email},{$set:{token:randomString}});
//   sendResetPasswordMail(Email,randomString);
//   res.status(200).send({success:true,msg:"please check your mail"});
// }else{
//     res.status(200).send({success:true, msg:"This email does not exist"});
// }

//     }
//     catch (error){
//         res.send(400).send({success:false,msg:error.message});
//     }
// }

module.exports ={register,login,count,checkToken}