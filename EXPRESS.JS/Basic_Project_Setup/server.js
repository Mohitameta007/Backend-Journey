// npm i cookie-parser (parse the cookies in json format)
// npm i ejs (Embedded JavaScript -> ejs use to generate html pages dynamically  )

const express = require('express')

const app = express();
const PORT = 3000
const path = require('path')                        // built in path module of node.js

app.use(express.json());                            // use to parse the json data 
app.use(express.urlencoded({extended : true}));     // use to parse data of html form

app.use(express.static(path.join(__dirname , 'public' )));       // for all static files go to public folder

app.set('view engine' , 'ejs')                      // instruction to express for using ejs

app.get('/' , (req , res)=>{
    res.render("index")
})

app.get('/profile/:username' , (req , res)=>{        // dynamic routing 
    res.send(req.params.username)                    // ye vo username ka naam dega req.params se 
})

app.get('/profile/:username/:age' , (req , res)=>{
    res.send(`Hi , ${req.params.username} your age is ${req.params.age}`)
})

app.use((err , req , res , next)=>{       
    console.log(err.message)
    res.status(500).send("something went wrong")
})

app.listen(PORT , ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
}) 