const express = require('express');
const path = require('path');
let port = process.env.port || 3000;

let app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    return res.render('home',{"title":"Swagat"});
});

app.post('/contacts',(req,res)=>{
    console.log(req.body);
    return res.redirect('/');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err.name);
        return;
    }
})