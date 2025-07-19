const express = require("express");
const mongoose = require("mongoose");
const { Protect, isAdmin } = require("../middlewares/authMiddlewares");
const Loan = require("../models/loan");
const router = express.Router();


    router.post("/apply", Protect, async (req, res) => {
        const { loanType, amount, durationMonths } = req.body;
          console.log("🔁 Body:", req.body);
            console.log("🔑 User:", req.user);
            console.log("🔍 Loan request body:", { loanType, amount, durationMonths,assignedAdmin });
console.log("👤 User ID:", req.user?._id);
        try {
          
            const loan = await Loan.create({
                user: req.user._id,
                loanType,
                amount,
                durationMonths,
                assignedAdmin,
                
            });
            res.status(201).json(loan);
        } catch (error) {
            console.log(error,"error ")
            res.status(500).json({Message:"Loan application failed"},error)
        }
    })


// get my loan

router.get("/user", Protect, async (req, res) => {
    const getLoan = await Loan.find({ user: req.user._id });
    res.json(getLoan);
});

// Admin:get all loan

router.get("/all", Protect, isAdmin, async (req, res) => {
    const getAllLoan = await Loan.find().populate("user", "name email");
    res.json(getAllLoan);
})


// update status by admin

router.put("/status/:id", Protect, isAdmin, async (req, res) => {
    const { status } = req.body;
    const valid = ["pending", "approved", "rejected"];

    if (!valid.includes(status)) {
        return res.status(400).json({Message:"Invalid status value"})
    }
    const loan = await Loan.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true }
    );
    res.json(loan);
})

router.get("/my-loan", Protect, async (req, res) => {
    try {
        const loan = await Loan.find({ assignedAdmin: req.user.id }).populate("user");
        res.status(200).json(loan);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
})


module.exports = router;





