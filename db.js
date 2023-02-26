const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/MyProject',(err)=>{
    if(!err){
        // var db=res.db.MyProject.collection("users");
        // var query={ username: "akash" };

        // var result =db.collection("users").find(query).toArray();
    //    db.users.find(query).toArray((result,err)=>{
    //     if(!err){
    //   console.log(result);
    //   res.close();
    //     }
    //     else{

    //     }
    //    })
        // console.log(db);
        console.log("Database connect sucessfully")
    }
    else{
        console.log(err);
    }
})
module.exports=mongoose;