const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required:true,
        },

        loanType: {
            type: String,
            enum: ["personal", "business", "education"],
            required: true,
            
            
        },
        amount: {
            type: Number,
            required:true,
        },
        durationMonths: {
            type: Number,
            required:true,
        },
        status: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
            
        },


    },
    {timestamps:true}
)

module.exports=mongoose.model("Loan",loanSchema)