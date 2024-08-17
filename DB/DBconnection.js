import mongoose from "mongoose"
import { User } from '../model/user_model.js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
const dbname='crud'
const DBConnection= async ()=>{
    try {
        console.log(`mongoDB database is connecting  `);
       const ConnectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${dbname}`)
        console.log(`mongoDB database is connected `);
        // console.log(ConnectionInstance);
    } catch (error) {
        console.error('error At connection' +error)
    }
}

export default DBConnection
