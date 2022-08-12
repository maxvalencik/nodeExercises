const fs = require('fs');
const process = require('process');
const axios = require('axios');

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

async function webCat(url){
    let res = await axios.get(url);
    return res;
}

//process.argv[index] get the element of index index on the console line - returns an array!
//node step1.js one.txt     ------    one.txt is index 2

if ((process.argv[2]).slice(0,4)==='http'){
    webCat(process.argv[2]);
} else{
    cat(process.argv[2]);
}
