const os = require('os');

function sys_details(){
    console.log(os.type());
    console.log(os.userInfo());
    const otherinfo = {
        name: os.type(),
        release: os.release(),
        totalmem: os.totalmem(),
        freemem: os.freemem()
    }
    console.log(otherinfo);
}

module.exports = sys_details;