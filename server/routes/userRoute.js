const express = require("express");
const router = express.Router();
const { Protect, isAdmin } = require("../middlewares/authMiddlewares");
const User = require("../models/User");

router.get("/profile", Protect,(req, res) => {
    res.json(req.user);
})

router.get("/admin-dashboard", Protect, isAdmin, (req, res) => {
    res.json({Message:"Welcome to admin dashboard 👑"})
})

// get admin

router.get("/all/admins", async (req, res) => {

    try {
        const admins = await User.find({ role: "admin" }).select("name _id email");
        res.status(200).json(admins);
        
    } catch (error) {
        console.error("Error fetching admins", error);
    res.status(500).json({ message: "Error fetching admins" });
    }
})

module.exports = router;