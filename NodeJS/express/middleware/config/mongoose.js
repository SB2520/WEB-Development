const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire the connection to check if it is succesfull
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'Error Connecting To DB'));

// up and learning then print the message
db.once('open',()=>{
    console.log("Succesfully Connected To DB");
});


