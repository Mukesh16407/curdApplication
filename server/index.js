const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = require('./config/dbconfig.js');

const cors =require('cors');
require("dotenv").config();


const usersRoute = require("./routes/userRoutes");


//middleware

app.use(cors())
app.use(express.json());


app.use("/api/users", usersRoute);

const port = process.env.PORT || 5000;



app.listen(port, async()=>{
  await connect()
  console.log(`Listening on port  ${port}`)
  
})