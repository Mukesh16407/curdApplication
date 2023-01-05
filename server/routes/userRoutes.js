const express = require("express");
const User = require("../models/usersModel");
const router = express.Router();


//register user

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
        data:newUser
      });

    }
    
    }catch (error) {
      res.send({
        success: false,
        message: error.message,
      });
    }
})

//get userData

router.get('/getdata',async(req,res)=>{

  try{
      const userdata = await User.find();
      
      res.send({
        success:true,
        message: "User details fetched successfully",
        data: userdata,
      })
  }catch(error){
    res.send({
      success: false,
      message: error.message,
    });
  }

})

// get indivisul Data

router.get('/getuser/:id', async(req,res)=>{

  try{
    
     const {id} = req.params;
     const userIndividual =await User.findById({_id:id});
     res.send({
      success:true,
      message: "Get Individual Data",
      data: userIndividual,
    })
    
     
  }catch(error){
    res.send({
      success: false,
      message: error.message,
    });
  }
});
//update user data

router.patch('/update/:id', async(req,res)=>{
  try{
    const {id} = req.params;

    const updatedUser =await User.findByIdAndUpdate(id,req.body,{
      new:true
    });
    res.send({
      success:true,
      message: "Get Updated Data",
      data: updatedUser
    })

  }catch(error){
    res.send({
      success: false,
      message: error.message,
    });
  }
})

//delete user
router.delete('/deleteuser/:id',async(req,res)=>{

  try{
    const {id} = req.params;
    const deleteUser = await User.findByIdAndDelete({_id:id})

    res.send({
      message: " deleted successfully",
      success: true,
    });
  }catch(error){
    res.send({
      error: error.message,
      success: false,
    });
  }
})

  module.exports = router