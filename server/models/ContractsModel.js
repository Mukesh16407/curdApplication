const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema(
  {
    Lender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    Borrower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    Principle:{
        type:Number,
        required:true
    },
    Interest:{
        type:String,
        required:true
    },
    LoanStartDate:{
        type:String,
        required:true
    },
    LoanDueDate:{
        type:String,
        required:true
    },
    isRepaid:{
         type:Boolean,
         required:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("contracts", ContractSchema);