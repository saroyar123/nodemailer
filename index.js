const express=require('express');
const { mail } = require('./mailer');



const app=express();

app.get("/",mail)

app.listen(4000,()=>{
    console.log("your server is running");
})