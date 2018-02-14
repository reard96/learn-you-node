const fs = require('fs');

const getNewLines = (input) => {
  const fileString = fs.readFileSync(input).toString();
  const counterArray = fileString.split('\n');

  return counterArray.length - 1;
};

console.log(getNewLines(process.argv[2]));
