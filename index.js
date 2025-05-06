const express = require("express")
const mongoose = require("mongoose")
const dotenv = require(".dotenv").config()

const MONGODB_URL = process.env.MONGODB_URL

const port = process.env.PORT || 5000
const app = express()
app.use(express.json()) 


mongoose.connect(MONGODB_URL)
.then(
    console.log("database connected sucessfully");
    app.listen(port,()=>{
        console.log(`server started at port ${port}`)
    })
).catch((error)()=>
console.error("error connecting to the database", error);
)
