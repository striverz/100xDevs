## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


````js
const fs = require('fs');


fs.readFile('a.txt','utf8',(error,data)=>{
    

    let fileData=data;
    
    fs.writeFile('a.txt','Manikanta Korimilli','utf8',(error)=>{
        if(error){
            console.log("Error while writing the file");
        }
        else{
            console.log("The file written succefully");
        }
    })

})


for(let i=0;i<1e8;i++){
    //The data 
}
console.log("The program is End!");

````