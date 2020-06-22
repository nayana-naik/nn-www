const express =  require ('express')
const app = express()



const env2=process.env.NODE_OPTIONS

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/hello',(req,res)=>{
    res.send(env2)
})
