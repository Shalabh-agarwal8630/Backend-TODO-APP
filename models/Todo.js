const mongoose = require("mongoose");
const todoschema = new mongoose.Schema({
  title:
  {
   type:String,
   required:true,
   maxLenght:50,
  },
  description:
  {
   type:String,
   required:true,
   maxLenght:50,
  },
  createdAt:{
   type:Date,
   required:true,
   default:Date.now()
  },
  updatedAt:
  {
   type:Date,
   required:true,
   default:Date.now()

  }

});
//now anyone who wants to use this can use this with name of todo
module.exports=mongoose.model("Todo",todoschema);
