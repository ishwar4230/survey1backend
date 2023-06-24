const express = require('express');
const cors = require("cors");

require("./db/config");
const testing = require("./db/testing");
const submission = require("./db/submission");
const app = express();

 app.get("/",(req,resp)=>{
    resp.send("app is kk...")
 });
//const data =  submission.find();
//console.warn(data);
app.use(express.json());
app.use(cors());
app.post("/register",async (req,resp)=>{   
    let test=new testing(req.body);
    let result= await test.save();
    resp.send(result);
})  

app.post("/submit",async (req,resp)=>{
    console.log("xyz",req.body);
    let {qn} = req.body;
    let subm=new submission(req.body);
    let result= await subm.save();
    resp.send(result);
    //console.log(result);
})  
const PORT = process.env.PORT || 5000

app.listen(PORT);