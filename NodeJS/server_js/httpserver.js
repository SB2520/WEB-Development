const http = require('http');

function reqHandler(req,res){
    console.log(req.url);
    res.end('Gotcha');
}

const server = http.createServer(reqHandler);
server.listen(3000,(err)=>{
    if(err){
        console.log(err.name);
        return;
    }
    console.log("Server is running");
});