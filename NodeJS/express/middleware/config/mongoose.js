const mongoose = require('mongoose');

main().catch(err => console.log(err.name));

async function main(){
    await mongoose.connect('mongodb://localhost/contacts_list_db');
};

