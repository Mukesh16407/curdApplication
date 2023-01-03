const express = require("express");
const User = require("../models/usersModel");
const router = express.Router();




router.post('/register',async(req,res)=>{
  const {name,email,age,mobile,work,add,desc} = req.body

  if(!name || !email || !age || !mobile || !work || !add || !desc){
    return res.send({
      success: false,
      message: "Please fill all Data",
    });
  }
  try {
    // check if the user already exists
    const user = await User.findOne({ email: email });
    if (user) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }else{
      const newUser = new User({
        name,email,age,mobile,work,add,desc
      });
      await newUser.save();
      
      res.send({
        success: true,
        message: "User Registered Successfully",
      });

    }
    
    }catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
})

  module.exports = router