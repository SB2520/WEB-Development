const express = require('express');
const path = require('path');
const port = process.env.port || 3000;
let app = express();
//Setting up the view engine
app.set('view engine','ejs');

//Joing the views with the path 
app.set('views',path.join(__dirname,'views'));

let arr = [
    {
        "Name":"Swagat",
        "PhoneNo":992321394
    },
    {
        "Name":"Aryan",
        "PhoneNo":882313132
    }
]

app.get('/',(req,res)=>{
    res.render('index',{
        "title":"Home",
    });
});

app.get('/contact',(req,res)=>{
    res.render('contact',{
        "title":"Contacts",
        "contactlist":arr
    });
})

app.listen(port,(err)=>{
    if(err){
        console.log(err.name);
        throw err;
        return;
    }
    console.log(`listening at port no ${port}`);
});