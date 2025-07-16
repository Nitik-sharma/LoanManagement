const express = require("express");
const router = express.Router();
const {Protect, isAdmin } = require("../middlewares/authMiddlewares");

router.get("/profile", Protect,(req, res) => {
    res.json(req.user);
})

router.get("/admin-dashboard", Protect, isAdmin, (req, res) => {
    res.json({Message:"Welcome to admin dashboard 👑"})
})

module.exports = router;