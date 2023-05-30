const authRole =(permission)=>{
    return (req,res,next)=>{
        const userRole=req.body.role;
        console.log(userRole)
        if(permission.includes(userRole)){
            console.log('great')
            next()
        }
        else{
            return res.json({
                message:"You dont have permission"
            })
        }
    }
}
module.exports={authRole};