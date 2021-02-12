const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static(__dirname+'/public'))

app.use('/api',require('./route/api').route)


app.listen(4999,()=>{
    console.log('http://localhost:4999')
})