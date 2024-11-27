## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

```javascript
const fs = require('fs');

fs.writeFile('a.txt',"Hello World",'utf8',(err)=>{
    if(err){
        console.log("Error is occured while write the file");
    }
    else{
        console.log("The File is written succefully");
    }
})

fs.readFile('a.txt','utf8',(error,data)=>{
    console.log(data);
})

```