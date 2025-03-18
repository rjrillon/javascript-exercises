const sumAll = function (num1, num2) {
  let start = num1;
  let end = num2;
  let result = 0;

  if (!Number.isInteger(num1) || !Number.isInteger(num2) || num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  if (start > end) {
    start = num2;
    end = num1;
  }

  //loop from start to end values
  while (start <= end) {
    result += start;
    start++;
  }
  return result;
};

// console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
