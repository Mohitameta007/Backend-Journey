// npm i express (to install the express package from npm)
// npm i nodemon -g (to install nodemon globally )

const express = require('express')
const app = express()

const PORT = 3000;

app.get('/' , (req , res)=>{
    res.send("server is running")
})
app.get('/profile' , (req , res)=>{
    res.send("This is my profile")
})
app.get('/settings' , (req , res)=>{
    res.send("This is my settings")
})

app.listen(PORT)               // to start the server  