const express = require('express');
const path = require('path');
const port = process.env.port || 3000;
let app = express();

let arr = [
    {
        "name":"Swagat",
        "phone":883232034
    },
    {
        "name":"Aryan",
        "phone":93292855
    }
];

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assests'));

//Some of the midlleware
app.use((req,res,next)=>{
    req.swagat = 1;
    console.log("Middleware1");
    next();
});

app.use((req,res,next)=>{
    console.log("Middleware2 ",req.swagat);
    next();
});

app.get('/',(req,res)=>{
   return res.render('home',{
    "title":"Practice",
    "arr":arr
   }); 
});

function removeExtraSpaceInBetween(str){
    return str.replace(/\s+/g,' ');
}

app.post('/add',(req,res)=>{
    req.body.name.trim();
    req.body.name = removeExtraSpaceInBetween(req.body.name);
    arr.push(req.body);
    return res.redirect('/');
});

app.get('/delete',(req,res)=>{
    let index = arr.findIndex(()=>req.params.phone == arr.phone);
    if(index != -1)arr.splice(index,1);
    res.redirect('/');
});

//Listening
app.listen(port,(err)=>{
    if(err){
        console.log(`This is an error ${err.name}`);
    }
    console.log(`Listening on port ${port}`); 
});

