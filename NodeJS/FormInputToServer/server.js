const express = require('express');
const path = require('path');
let port = process.env.port || 3000;

let app = express();

let contacts = [
    {
        "name":"Swagat",
        "phone":999121212
    },
    {
        "name":"Aryan",
        "phone":999121212
    },
    {
        "name":"Papa",
        "phone":999121212
    },
    {
        "name":"Mummy",
        "phone":999121212
    }
];

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//Creating the parser
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    return res.render('home',{"title":"Swagat","contacts":contacts});
});

app.post('/contacts',(req,res)=>{
    console.log(req.body);
    contacts.push(req.body);
    return res.redirect('back');
})

app.listen(port,(err)=>{
    if(err){
        console.log(err.name);
        return;
    }
})