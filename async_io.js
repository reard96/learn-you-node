const fs = require('fs');

function doneReading(error, file) {
  if (error) {
    return console.log(error);
  }
  console.log(file.split('\n').length - 1);
}

fs.readFile(process.argv[2], 'utf8', doneReading);
