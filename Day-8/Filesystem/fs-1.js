const fs = require('fs');

// function fs_read(){
//     fs.readFile('./Filesystem/myFile.txt', {encoding: 'utf-8'}, (err, data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }else{
//             console.log('File Read Successfully..!');
//             console.log(data);
//         }
//     });


// }

function fs_delete(){
    fs.unlink('./Filesystem/myFile.txt', (err) => {
        if(err){
            console.log(err);
            return;
        }else{
            console.log("File Deleted..!");
        }
    })
}
module.exports= fs_delete;