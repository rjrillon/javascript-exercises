const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => acc * num, 1);
};

const power = function (num, power) {
  let result = 1;
  while (power > 0) {
    result *= num;
    power--;
  }
  return result;
};

const factorial = function (num) {
  let result = 1;
  while (num > 0) {
    result *= num;
    num--;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
