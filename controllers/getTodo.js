const Todo = require("../models/Todo");
//database interaction krni h to main thread block na ho islie async use krenge idhr
//we will use express.json to fetch data not body parser
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items from database
    const todos=await Todo.find({});
    //response
    res.status(200).json({
     success: true,
     data: todos,
     message: "Entire Todo data is fetched",
   }); 
  } catch (err) {
   console.error(err);
   console.log(err);
   res.status(500).json
   ({
    success:false,
    data:"internal server error",
    message:err.message,
   })
  }
};

exports.getTodoById = async (req, res) => {
 try {
  const id=req.params.id;
  const todo=await Todo.findById({_id:id})

  if(!todo)
  {
    return res.status(404).json({
     success:false,
     message:"No data found with the given id"
    })

  }
  res.status(200).json({
   success: true,
   data: todo,
   message: `Todo ${id} data is fetched`,
 })

 } catch (err) {
  console.error(err);
   console.log(err);
   res.status(500).json
   ({
    success:false,
    data:"internal server error",
    message:err.message,
   })
 }
};

