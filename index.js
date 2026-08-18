import express from "express"

const app = express();

app.get("/",(req,res)=>{
   res.json({message:"Aa rha hai "})
})

app.listen(5000,()=>{
    console.log("connected")
})