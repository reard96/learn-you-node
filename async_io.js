const fs = require('fs');

function doneReading(error, file) {
  if (error) return console.error(error);
  return file;
}

console.log(fs.readFile(process.argv[2], 'utf8', doneReading));
