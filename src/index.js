//   require(dotenv).config({path :`./env`})
import dotenv from "dotenv"
import connectDb from "./db/db.js"


dotenv.config({path:`./env`})
connectDb()












/*
import express from "express"
const app = express()

( async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on( "error", (error)=>{
        console.log("ERROR ",error)
        throw error
       })

       //server start
app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on ${process.env.PORT}`)
})



    } catch (error) {
        console.error("ERR: ", error)
        throw error
    }
})()
    */