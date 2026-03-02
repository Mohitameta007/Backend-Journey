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