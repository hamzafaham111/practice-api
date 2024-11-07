import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();
mongoose.connect(`${process.env.DB_URL}`).then(()=>{
    console.log("DB connected successfully");
}).catch((err)=>{
    console.log(`DB Connection Error :: ${err}`);
})