const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter=require("./routes/userRoute.js")
const authRoute = require("./routes/authRoute.js")
const loanRoute = require("./routes/loanRoute");
const blogRoute = require("./routes/blogRoute.js");

require("dotenv").config();

const app = express();
app.use(cors(
    {
        origin:["http://localhost:3000","https://loan-management-ashy.vercel.app"],
        credentials:true,
    }
));
app.use(express.json());



// Router placeholder 
app.get("/", (req, res) => {
    res.send("Loan management app is running .....")
});




app.use("/api/auth", authRoute);
app.use("/api/user", userRouter);
app.use("/api/loan", loanRoute);
app.use("/api/blog", blogRoute);


// MongoDB connect
const connectDB = require("./config/db.js");
connectDB()






// /make router

const PORT = process.env.PORT||5001;

app.listen(PORT, () => {
    console.log(`Server is runnig on ${PORT}`  )
});


