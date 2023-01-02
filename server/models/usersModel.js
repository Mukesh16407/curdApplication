const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    idNumber: {
        type: String,
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    MobileNumber: {
      type: Number,
      required: true,
    },
  
   
  },{
      timestamps: true,
    }
  );
  
  // user model
  const userModel = mongoose.model("users", userSchema);
  module.exports = userModel;