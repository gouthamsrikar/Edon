const fs = require('fs');
const http = require('http');
const  url=require('url');


const data =fs.readFileSync(__dirname+'/dev-data/data.json','utf-8');
const dataObj =JSON.parse(data);


const server = http.createServer((req, res) => {
   // console.log(req.url);
    const pathname=req.url;
    if(pathname==='/' || pathname==='/overview'){
        res.end('this is lawda');
    }else if(pathname==='/product'){
        res.end('this is bhosda');
    }
    else if(pathname==='/apiqw'){



        res.writeHead(200,{'Content-type':'application/json'});
        res.end(data);
    }
    else
    {


        res.end('super sexy su');
    }

});
const yui='fsfs';
server.listen(8000, '127.0.0.1', () => {
    console.log('server  shuru hogaya bhai');
});