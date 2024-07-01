const path = require('path');

const myPath = 'D:\MERN-Stack-Learning\Day-8path.js';

const pathInfo = {
    filename:path.basename(myPath),
    foldername:path.dirname(myPath),
    fileExe:path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath)
}

module.exports = pathInfo;