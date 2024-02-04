//require vale function ka use h import krna
//change scripts in that delete test and add
// "start": "node index.js",
//"dev": "nodemon index.js"
const express = require("express");
const app = express();

//load config  from env file
require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware ki need padegi to parse json request body

app.use(express.json());

//import routes for todo api
const todoRoutes = require("./routes/todos");

//mujhe in saare routes ko mount krna h
//mount all todo api routes

app.use("/api/v1", todoRoutes);
//start the server

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

//connect to database
const dbConnect = require("./config/database");
dbConnect();

//default ROute bhi likhna padega

//ye likhna h to likho kam se kam ui pe kuch dikh jaeega
app.get("/", (req, res) => {
  res.send(`<h1> This is homepage </h1>`);
});
