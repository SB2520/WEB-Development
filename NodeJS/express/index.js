const express = require('express');
const port = process.env.port || 3000;

const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>My Name is Swagat</h1>");
});

app.listen(port,(err)=>{
    if(err){
        console.log(err.name);
        return;
    }
    console.log("My server is running");

});