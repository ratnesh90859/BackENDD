require('dotenv').config()
console.log("chai aur code");
const express = require('express')//require module syntex
//import express from "express"
const app = express()
const port = 3001//port pe listen

app.get('/', (req, res) => {  // "/"req and response hum hello world send kar denge
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')//send url or username of twitter
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai and code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code </h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

//server ban gya jo / pe bhi listen kar rha aur /twitter pe bhi listen kar rha hai