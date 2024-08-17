import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import  DBConnection from './DB/DBconnection.js'
import router  from './routes/userRouter.js'
// dotenv.config()
// // /* both method gives same results but below one gives more profession way*
    dotenv.config({
     path:'/.env',
 })
DBConnection();

const app=express()
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log(`the program is listening on ${process.env.PORT}`);
})

app.use('/api/user',router)