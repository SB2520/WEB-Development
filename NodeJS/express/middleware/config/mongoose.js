const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts_list_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error Connecting To DB'));

db.once('open',()=>{
    console.log("Succesfully Connected To DB");
});


