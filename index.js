require ('dotenv').config()
const express=require("express")
const cors=require("cors")
const jwt = require("jsonwebtoken");
const router=require("./Router/router")
require("./DB/connection")


const MemphisMarine=express()

MemphisMarine.use(cors())
MemphisMarine.use(express.json())
MemphisMarine.use(router)
const PORT=3000||process.env.PORT


MemphisMarine.listen(PORT,()=>{
    console.log(`Memphis Marine Server Started at ${PORT}`);
    console.log(`PORT:-  http://localhost:${PORT}/`)
})

MemphisMarine.get("/",(req,res)=>{
    res.status(200).send(`<h1>Memphis Marine Server Started</h1>`)
})

