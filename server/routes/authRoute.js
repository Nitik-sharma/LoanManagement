const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");


// registter

router.post("/register", async (req, res) => {
    console.log("running ....")
    console.log("Register ,",req.body);
    const { name, email, password,role } = req.body;
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "user is already exist !!" })
            
        }
        
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashPassword ,role:role||"user"});
        await newUser.save();

        res.status(200).json({message:"your registration got sucessfully "})
    } catch (error) {
        
    }
})


router.post("/login", async (req, res) => {
    const { email, password, role } = req.body;
    console.log("login",req.body)
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });

        }
        const isMatchP= await bcrypt.compare(password, user.password);

        if (!isMatchP) return res.status(400).json({ message: "Invalid passoword !" });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        res.status(200).json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
       
        

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
})





module.exports=router