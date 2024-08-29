const mongoose=require("mongoose")

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("MongoDB Connection with MSDB Server");
    }
).catch(
    err=>{
        console.log("Connection Failed!!!!");
        console.log(err);
    }
)