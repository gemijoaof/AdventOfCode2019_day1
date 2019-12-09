const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString();
let arrayinput = input.split('\n');

const sumFuelRequirements = array => {
  return array.reduce((acc, num) => {
    return acc + Math.floor(num / 3) - 2;
  }, 0);
};

const calculateAddedFuel = num => {
  let result = Math.floor(num / 3) - 2;
  if (result < 0) {
    result = 0;
  } else {
    result += calculateAddedFuel(result);
  }
  return result;
};

const sumFuelRequirementsPlusAddedFuel = array => {
  return array.reduce((acc, num) => {
    return acc + calculateAddedFuel(num);
  }, 0);
};

console.time('part1');
console.log(sumFuelRequirements(arrayinput));
console.timeEnd('part1');
console.time('part2');
console.log(sumFuelRequirementsPlusAddedFuel(arrayinput));
console.timeEnd('part2');