
// 1. simple server

// const http = require('http');

// http.createServer((req, res)=> {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello World');
// }).listen(3000);

// console.log('Server running at http://localhost:3000/');




// 2. connect middleware
// const connect = require('connect');
// const app = connect();

// function helloWorld(req, res, next){
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// }
// app.use(helloWorld);
// app.listen(3000);
// console.log('Server running at http://localhost:3000/');



//3. with logger
const connect = require('connect');
const app = connect();

function logger(req, res, next){
    console.log(req.method, req.url);
    next();
}

function helloWorld(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
}

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');