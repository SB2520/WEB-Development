const http = require('http');
const fs = require('fs');

let server = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile('./index.html','utf-8',(err,data)=>{
            if(err){
                console.log(err.name);
                return;
            }
            res.end(data);
        });
    }
    else{
        fs.readFile('./error404.html','utf-8',(err,data)=>{
            res.end(data);
        });
    }
});

let port = process.env.PORT || 3000;

server.listen(port,(err)=>{
    if(err){
        console.log(err.name);
        return;
    }
});