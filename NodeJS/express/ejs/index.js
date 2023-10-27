const express = require('express');
const path = require('path');
const port = process.env.port || 3000;
let app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'depend'));

app.get('/',(req,res)=>{
    return res.render('home',{title:"My Name is Swagat"});
})

app.listen(port,(err)=>{
    if(err){
        throw new Error(err.name);
    }
});