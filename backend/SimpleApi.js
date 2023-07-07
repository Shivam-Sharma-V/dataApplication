const http = require('http');
http.createServer((req,resp)=>{
    resp.writeHead(508,{'Content-Type':'application/json'})
    resp.write(JSON.stringify({
        name : "Shivam",
        email : "s@gmail.com"
    }));
    resp.end();
}).listen(5000) 

console.log(process.env)