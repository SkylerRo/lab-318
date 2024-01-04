const express = require("express")
const morgan = require("morgan")
const app = express()

const PORT = 3000
app.use(morgan("dev"))
app.get("/",(req,res)=>{
    console.log(req.url)
    res.send("you made it")
})
app.get("/package",(req,res)=>{
    console.log(req.url)
    res.send("here's what we're offering if you stay with us")
}) 
app.get("/user",(req,res)=>{
    console.log(req.url)
    res.send("welcome user")
})
app.get("/user/userID",(req,res)=>{
    console.log(req.url)
    res.send("welcome")
})
app.listen(PORT,()=>{
    console.log("server is running")
})