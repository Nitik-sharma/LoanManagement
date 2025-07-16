const mongoose = require("mongoose");

const connectDB = async () => {
     try {
         await mongoose.connect(process.env.MONGO_URL);
         console.log("mongoose connect seccusfully")
     } catch (error) {
         console.log("Mongosse arre not connect sucessfully " ,error.message)
         process.exit(1);
     } 
}
 

module.exports=connectDB