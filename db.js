const mongoose =require('mongoose');
mongoose.set('strictQuery', false);
//mongodb+srv://ramangroverind:Akashraman%40123@kcms.twusqtg.mongodb.net/knocial_india
mongoose.connect('mongodb://localhost:27017/knocial_india',(err)=>{
    if(!err){
      
        // console.log(db);
        console.log("Database connect sucessfully")
        // docs.collection("users").find({username:'om'}).toArray(function(err, result) {
        //     if (err) throw err;
        //     console.log(result);
        //     docs.close();
        //   });
        
    }
    else{
        console.log(err);
    }
})
module.exports=mongoose;