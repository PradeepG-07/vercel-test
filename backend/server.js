import express from "express";
const app=express();


app.get("/",(req,res)=>{
    res.status(200).send("hello");
})
app.listen(4000,()=>{
    console.log("server started");
})