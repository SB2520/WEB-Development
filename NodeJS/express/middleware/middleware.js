const express = require('express');
const path = require('path');
const db = require('./config/mongoose.js');
const port = process.env.port || 3000;
let app = express();
const Contact = require('./models/contact.js');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assests'));

let arr = [
    {
        "name" : "Swagat",
        "phone" : 93432434
    },
    {
        "name" : "Aryan",
        "phone" : 93432434
    }
];

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
    async function retrieveUsers(){
        try {
          const users = await Contact.find().lean(); // Add .lean() to convert to JSON
          console.log(users);
          return res.render('home',{
            "title":"Practice",
            "arr": users
          });
        } catch (error) {
          console.error(error.name);
        };
      };
      retrieveUsers();
});

function removeExtraSpaceInBetween(str){
    return str.replace(/\s+/g,' ');
}

app.post('/add',(req,res)=>{
    req.body.name = req.body.name.trim();
    req.body.name = removeExtraSpaceInBetween(req.body.name);
    Contact.create({
        name : req.body.name,
        phone : parseInt(req.body.phone)
    });
    console.log("Succesfully Written");
    return res.redirect('back');
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

