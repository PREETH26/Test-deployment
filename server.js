const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("Hello, Kalvians! Your backend server is live!")
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})