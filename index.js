const express =  require ('express')
const app = express()

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

const env2=process.env.NODE_OPTIONS

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/hello',(req,res)=>{
    res.send(env2)
})
