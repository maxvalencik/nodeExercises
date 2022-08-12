const fs = require('fs');
const process = require('process');
const axios = require('axios');
const commandInput = process.argv[2];


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


function webCatWrite(content, filename){
    fs.readFile(`${content}`,'utf8', (err,data)=>{
        if(err){
            console.log(err);
            process.exit(1);
        }
        fs.writeFile(`${filename}`, data, 'utf8', (err)=>{
            if(err){
                console.log(err);
                process.exit(1);
            }
        console.log('Success!');
        })
    })
}


//code to show result
if (commandInput.slice(0,4)==='http'){
    webCat(process.argv[2]);
} 

else if (commandInput==='--out'){
    webCatWrite(process.argv[4],process.argv[3]);
}

else{
    cat(process.argv[2]);
}