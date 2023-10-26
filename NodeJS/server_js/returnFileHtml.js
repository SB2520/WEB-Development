const http = require('http');
const fs = require('fs');


let server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    fs.readFile('./index.html',(err,data)=>{
        if(err){
            res.end('<p>Error</p>');
            return;
        }
        return res.end(data);
    });
});

const port = process.env.port || 3000;

server.listen(port,(err)=>{
    if(err){
        console.log(err.name);
        return;
    }
    console.log(`Server listening at port ${port}`);
});