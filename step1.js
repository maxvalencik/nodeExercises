const fs = require('fs');
const process = require('process');

function cat(path){
    fs.readFile(`${path}`,'utf8',(err,data)=>{
        if(err){
            //print error if any
            console.log(err);
            //kill the process
            process.exit(1);
        }
        console.log(data);
    });
}

//process.argv[index] get the element of index index on the console line
//node step1.js one.txt     ------    one.txt is index 2
cat(process.argv[2]);