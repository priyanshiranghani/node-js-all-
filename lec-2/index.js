const http = require('http');

const port=8000;

const requestHandelar=(req,res) =>{
    res.write("<h1>Hellow World</h1>")

    res.end();
}

const server = http.createServer(requestHandelar);

server.listen(port,(err)=>{
    console.log("server is running");
    console.log("server is running");

})