const mongoose=require("mongoose");
require("dotenv").config();
//is statement se jo bhi data hamne environment ke andar likha tha vo sab process 
//ke andar aa jaega
const dbconnect=()=>
{
 mongoose.connect(process.env.DATABASE_URL)

 .then(()=>
{
 console.log("connection made successfully")
})
.catch((error)=>
{
 console.log("Issue in Db connection")
 console.log(error.message);
 process.exit(1);
})


}

module.exports=dbconnect;
 


// In Node.js, process.exit() is a method that allows you to forcefully terminate the Node.js process. 
//The argument passed to process.exit() is used as the exit code. Conventionally, a status code of 0 indicates success, 
//and any other value indicates an error or an abnormal termination.