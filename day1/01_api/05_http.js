const http = require('http')
const fs = require('fs');
http.createServer((request, response) => {
    // console.log('a request', getPrototypChain(request));
    // response.end('Hi Node');
    const {url, method} = request;
    // console.log('url:' + url)
    if(url === '/' && method === 'GET'){
        fs.readFile('index.html', (err, data) =>{
            if(err){
                response.writeHead(500, {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                response.end('500 服务器出错')
                return
            }
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.end(data);
        })
    } else if (url === '/users' && method === 'GET') {
        response.writeHead(200, {'Content-Type':'application/json'})
        response.end(JSON.stringify({name: 'coienrr'}))
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type','text/plain;charset=utf-8');
        response.end('404');
    }
}).listen(3000, ()=>{
    console.log('Server at 3000');
})

function getPrototypChain(obj){
    const protoChain = [];
    while(obj = Object.getPrototypeOf(obj)){
        protoChain.push(obj);
    }
    return protoChain;
}