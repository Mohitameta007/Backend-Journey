const fs = require('fs');

fs.writeFile("newfile.txt" , "This is my new file" , function(err){
    if(err)
    {
        console.error(err)
    }
    else{
        console.log("done");
    }
}) 

fs.appendFile("newfile.txt" , "This is my appended code " , function(err){
    if(err)
    {
        console.error(err)
    }
    else{
        console.log("done");
    }    
})

fs.rename("newfile.txt" , "renamefile.txt" , function(err){
    if(err)
    {
        console.error(err)
    }
    else{
        console.log("done");
    }   
})

fs.copyFile("renamefile.txt" , "./copy.txt" , function(err){
    if(err)
    {
        console.error(err.message)
    }
    else{
        console.log("done");
    }   
})

fs.unlink("copy.txt" , function(err){
    if(err)
    {
        console.error(err.message)
    }
    else{
        console.log("done");
    }   
})

//-------------------------------------------------------- HTTP MODULE ----------------------------------------------------------------------------

// basic server

const http = require('http')

const server = http.createServer((req , res)=>{
    res.end("server chal");
})

server.listen(3000)