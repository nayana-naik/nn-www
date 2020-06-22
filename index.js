const express =  require ('express')
const app = express()
const port = 3000


const env2=process.env.NODE_OPTIONS

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.listen(port, ()=>{
    console.log(`Listening to port ${port}!`)
})
app.get('/hello',(req,res)=>{
    res.send(env2)
})
