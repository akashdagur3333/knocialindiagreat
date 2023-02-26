const authPage =(permission)=>{
    return (req,res,next)=>{
        const userRole=req.body.role;
        if(permission.includes(userRole)){
            next()
        }
        else{
            return res.json({
                message:"You dont have permission"
            })
        }
    }
}
module.exports={authPage};