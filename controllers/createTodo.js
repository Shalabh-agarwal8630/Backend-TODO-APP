const Todo = require("../models/Todo");
//database interaction krni h to main thread block na ho islie async use krenge idhr
//we will use express.json to fetch data not body parser
exports.createTodo = async (req, res) => {
  try {
    //extracting title and description from the body of request
    //create todo vala route ek todo ka object create krega aur uske baad usme title and description dalega aur
    //use db me insert krega
    const { title, description } = req.body;
    //creating a new todo object
    const response = await Todo.create({ title, description });
    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "entry created Successfully",
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
