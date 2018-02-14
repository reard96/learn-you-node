// for loop, ignoring first 2 elem of array

// const loopSum = (input) => {
//   let sum = 0;
//   for (let i = 2; i < input.length; i++) {
//     sum += Number(process.argv[i]);
//   }
//   return sum;
// };

// console.log(loopSum(process.argv));


// using map & reduce
const reduceSum = (input) => {
  input = input.slice(2);
  const numArr = input.map(Number);
  return numArr.reduce((memo, item) => memo + item);
};

console.log(reduceSum(process.argv));
