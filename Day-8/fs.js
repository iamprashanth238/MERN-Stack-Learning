const { error } = require('console');
const fs = require('fs');

// function fs_example(){
//     fs.mkdir('./Filesystem', (err) => {
//         if(err){
//             return err;
//         }else{
//             return ("Folder Successfully folder");
//         }
//     }); 
// }

// const fs_ex = fs.mkdir('./Filesystem', (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Folder Successfully created");
//     }
// });

const data = "Hello I am Prashanth \n I am from AU University..! \n I am 21 yrs";

function fs_write(){
    fs.writeFile('./Filesystem/myFile.txt', data, (err) => {
        if(err){
            console.log(err);
            return;
        }else{
            console.log('Written successfully...!');
        }
    });
}

module.exports = fs_write;