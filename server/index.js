const express = require("express");
const app = express();
require("dotenv").config();

const connect = require('./config/dbconfig.js');

app.use(express.json());


const port = process.env.PORT || 5000;


app.listen(port, async()=>{
    await connect()
    console.log(`Listening on port  ${port}`)
    
})