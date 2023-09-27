 const express = require('express') ;
 const bodyparser = require('body-parser') ;
 
 const app = express(); 

 app.use(bodyparser.json());

 
app.post("/login",(req,res)=>{
   console.log(req.body); 
})

 app.listen(3000,()=>{
    console.log();
 })