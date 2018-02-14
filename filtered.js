const fs = require('fs');
const path = require('path');

function callback(error, files) {
  if (error) {
    return console.log(error);
  }
  const fileArr = files.filter(file => path.extname(file).slice(1) === process.argv[3]);
  for (let i = 0; i < fileArr.length; i++) {
    console.log(fileArr[i]);
  }
}

fs.readdir(process.argv[2], callback);
