const jwt = require("jsonwebtoken");
const User = require("../models/User");

const Protect = async (req, res, next) => {
    
    let token;
    // get token from header 
    console.log(req.headers)
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attached user to request 
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.error("❌ Invalid token", error.message);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: "not authorization ,no token " });
    }
};


const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: "Acess denied :Admin only!" });
    }

};



module.exports = {Protect,isAdmin};