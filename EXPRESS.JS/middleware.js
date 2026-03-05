// {
//     Middleware is a function that runs between the client request and the server response.
//     It processes the request and then passes control to the next middleware or route handler using next().
// }

const express = require('express')
const app = express();
const PORT = 3000

app.use((req , res , next)=>{                     // this is middleware , ye pehle chalega app.get() se 
    console.log("Middleware executed");
    next();                                       // next() -> ye request ko aage foreward karta hai 
})

app.get('/' , (req , res)=>{
    res.send("Server is running")
})
app.get('/about' , (req , res)=>{
    res.send("This is about section")
})

app.use((err , req , res , next)=>{                   // error handling middleware 
    console.log(err.message)
    res.status(500).send("something went wrong")
})

app.listen(PORT) 