
require('dotenv').config()
const express = require('express')
// import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user',(req,res)=>{
    res.send("welcome")
})
app.get('/github',(req,res)=>{
    res.send("shamsMallick github")
})

app.get('/login',(req,res)=>{
    res. send("<h1>Please login at Shams mallick account</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})