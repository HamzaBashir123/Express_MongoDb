import express from 'express';
import authRoutes from './routes/authRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
// import run  from "./Db/connect.js";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express()
const PORT = 8000

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connect to Db")
}).catch((err)=>{
    throw err;
})



app.use(express.json())
app.use(helmet());
app.use(morgan("common"));

app.use((req, res, next)=> {
    req.body.date = new Date()
    console.log(req.body)
    next()
})

app.use('/auth', authRoutes)
app.use('/profile', profileRoutes)

app.listen(PORT,async()=> {

    // await run()
    console.log("Server chal gaya at port number" + PORT)
})

