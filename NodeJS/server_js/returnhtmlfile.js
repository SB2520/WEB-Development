const http = require('http');

function reqhandler(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<h2 style="color:red;">Gotcha!</h2>');
}

const port = process.env.PORT || 3000;

let server = http.createServer(reqhandler);
server.listen(port,(err)=>{
    if(err)console.log(err.name);
    console.log(`listening on port ${port}`)
});